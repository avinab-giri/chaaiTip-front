'use client'

import { useEffect, useState } from "react";

interface BasicMilestonesProps {
    username: string;
    refreshKey: number;
    milestoneTitle: string;
}

const BasicMilestones: React.FC<BasicMilestonesProps> = ({ username, refreshKey, milestoneTitle }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [totalSupport, setTotalSupport] = useState<number>(0);
    const [milestoneCount, setMilestoneCount] = useState<number>(0);
    const [progressPercent, setProgressPercent] = useState<number>(0);

    const fetchMilestones = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user-by/${username}`);
            if (!response.ok) {
                throw new Error("Failed to fetch supporters");
            }

            const data = await response.json();
            const totalSupport = data.totalSupport ?? 0;
            const payOutSettingData = data.payOutSetting ?? {};
            const milestones = payOutSettingData.milestones ?? 1;

            const milestoneCount = milestones;
            const progressPercent = Math.min((totalSupport / milestoneCount) * 100, 100);

            // update states
            setTotalSupport(totalSupport);
            setMilestoneCount(milestoneCount);
            setProgressPercent(progressPercent);
        } catch (error) {
            console.error('Error fetching supporters:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMilestones();
    }, [username, refreshKey]);

    if (loading) {
        return (
            <div className="bg-white rounded-xl p-6 card border border-gray-100">
                <p className="text-gray-500">Loading milestones...</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl p-6 card border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support Milestones</h3>
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[rgb(var(--primary-100))] flex items-center justify-center">
                        <i className="fas fa-medal text-[rgb(var(--primary-500))]"></i>
                    </div>
                    <div>
                        <p className="font-medium text-gray-800">{milestoneTitle}</p>
                        <p className="text-sm text-gray-500">{totalSupport}/{milestoneCount} supporter</p>
                    </div>
                </div>
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[rgb(var(--primary-500))] rounded-full"
                        style={{ width: `${progressPercent}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default BasicMilestones;
