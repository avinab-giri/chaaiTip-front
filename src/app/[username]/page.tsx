import ErrorPage from "@/components/screen/404Page";
import BasicVarient from "@/components/variants/basic/basic";

interface PageProps {
  params: { username: string };
}

const UserDetailsPage = async ({ params }: PageProps) => {
  const { username } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user-by/${encodeURIComponent(username)}`,
    { cache: "no-store" } 
  );

  if (!res.ok) {
    return <ErrorPage />;
  }

  const fetched = await res.json();

  const fetchData = {
    ...fetched,
    theme: {
      primary: fetched?.theme?.primary ?? "#7c3aed",
    },
  };

  const accountVerify = fetchData?.payOutSetting?.accountVerify;

  if (accountVerify === 0) {
    return <ErrorPage />;
  }

  return <BasicVarient data={fetchData} />;
};

export default UserDetailsPage;
