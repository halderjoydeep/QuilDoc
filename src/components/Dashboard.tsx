import { Suspense } from "react";
import { FileList, FileLoader, UploadButton } from ".";

interface DashboardProps {}

const Dashboard = async ({}: DashboardProps) => {
  return (
    <main className="mx-auto max-w-7xl p-6 md:p-10">
      <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-300 pb-6 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="text-3xl font-bold text-gray-900">My Files</h1>
        <UploadButton />
      </div>

      <Suspense fallback={<FileLoader />}>
        <FileList />
      </Suspense>
    </main>
  );
};

export default Dashboard;
