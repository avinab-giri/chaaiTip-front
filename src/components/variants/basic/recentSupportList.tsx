import { CustomDialog } from '@/components/CustomDialog';
import GenerateFeedback from '@/components/generateFeedback';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

interface Supporter {
  name: string;
  feedback: string;
  feedbackDisplay: boolean;
}

interface RecentSupportersProps {
  userId: string;
  refreshKey: number;
}

const BasicRecentSupporters: React.FC<RecentSupportersProps> = ({ userId, refreshKey }) => {
  const [supporters, setSupporters] = useState<Supporter[]>([]); // preview (5 latest)
  const [allSupporters, setAllSupporters] = useState<Supporter[]>([]); // dialog list
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const limit = 10;

  const fetchSupporters = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/supporters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userId, limit: 5 }),
      });

      if (!response.ok) throw new Error("Failed to fetch supporters");
      const data = await response.json();
      setSupporters(data.data.data || []);
    } catch (error) {
      console.error("Error fetching supporters:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllSupporters = async (pageNum: number) => {
    try {
      if (pageNum === 1) setAllSupporters([]); // reset on first open
      setLoadingMore(true);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/supporters`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: userId,
          limit,
          page: pageNum,
        }),
      });

      if (!response.ok) throw new Error("Failed to fetch supporters");
      const data = await response.json();
      setAllSupporters(prev => [...prev, ...(data.data.data || [])]);
    } catch (error) {
      console.error("Error fetching all supporters:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const showAllSupporters = () => {
    setDialogOpen(true);
    setPage(1);
    fetchAllSupporters(1);
  };

  const loadMoreSupporters = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchAllSupporters(nextPage);
  };

  useEffect(() => {
    fetchSupporters();
  }, [userId, refreshKey]);

  return (
    <div className="bg-gradient-to-r from-[rgb(var(--primary-20))] to-white rounded-lg p-5 border border-primary-100">
      <p className="text-sm font-medium mb-1">Recent supporters</p>
      <div>
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="p-4 rounded-lg flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse" />
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded animate-pulse w-3/4 mb-2" />
                <div className="h-3 bg-gray-300 rounded animate-pulse w-5/6" />
              </div>
            </div>
          ))
        ) : supporters.length > 0 ? (
          <>
            {supporters.map(
              (supporter, i) =>
                supporter.feedbackDisplay && (
                  <div className="flex items-center justify-start w-full" key={i}>
                    <GenerateFeedback name={supporter.name} feedback={supporter.feedback} cups={1} />
                  </div>
                )
            )}
            <div>
              <Button className="w-full cursor-pointer" variant="secondary" onClick={showAllSupporters}>
                See all
              </Button>
            </div>

            <CustomDialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <div className="space-y-4">
                {allSupporters.map((s, i) => (
                  <GenerateFeedback key={i} name={s.name} feedback={s.feedback} cups={1} />
                ))}

                {loadingMore && <p className="text-center text-gray-500">Loading...</p>}

                {allSupporters.length > 0 && (
                  <Button
                    className="w-full mt-2"
                    variant="secondary"
                    disabled={loadingMore}
                    onClick={loadMoreSupporters}
                  >
                    {loadingMore ? "Loading..." : "Load more"}
                  </Button>
                )}
              </div>
            </CustomDialog>
          </>
        ) : (
          <div className="flex items-center justify-between">
            <p className="text-gray-600">Be the first one to support!</p>
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
              <i className="fas fa-user-friends text-primary-500" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicRecentSupporters;
