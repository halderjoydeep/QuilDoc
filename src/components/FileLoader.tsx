import { Skeleton } from "./ui/skeleton";

const FileLoader = () => {
  return (
    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-32 bg-gray-200" />
      ))}
    </div>
  );
};

export default FileLoader;
