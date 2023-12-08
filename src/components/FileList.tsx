import { serverClient } from "@/app/_trpc/serverClient";
import { format } from "date-fns";
import { Ghost, MessageSquare, Plus } from "lucide-react";
import Link from "next/link";
import { FileDeleteButton } from ".";

interface FileListProps {}

const FileList = async ({}: FileListProps) => {
  const files = await serverClient.getUserFiles();

  return files && files.length > 0 ? (
    <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3 ">
      {files
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .map((file) => (
          <li
            key={file.id}
            className="flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
          >
            <Link
              href={`/dashboard/${file.id}`}
              className="flex items-center gap-6 p-6"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <h3 className="flex-1 truncate text-lg font-medium text-zinc-900">
                {file.name}
              </h3>
            </Link>

            <div className="grid grid-cols-3 place-items-center gap-6 px-6 py-2 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <Plus className="h-4 w-4" />{" "}
                {format(file.createdAt, "MMM yyyy")}
              </div>

              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                mocked
              </div>

              <FileDeleteButton fileId={file.id} />
            </div>
          </li>
        ))}
    </ul>
  ) : (
    <div className="mt-16 flex flex-col items-center gap-2">
      <Ghost className="h-8 w-8 text-zinc-800" />
      <h3 className="text-lg font-semibold">Pretty empty around here</h3>
      <p className="text-sm text-gray-600">Let&apos;s upload your first PDF.</p>
    </div>
  );
};

export default FileList;
