"use client";

import { trpc } from "@/app/_trpc/client";
import { useUploadThing } from "@/lib/uploadthing";
import { Cloud, File, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DropZone from "react-dropzone";
import { buttonVariants } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Progress } from "./ui/progress";
import { useToast } from "./ui/use-toast";

const UploadDropZone = ({ isSubscribed }: { isSubscribed: boolean }) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const { toast } = useToast();
  const router = useRouter();

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };

  const { startUpload } = useUploadThing("pdfUploader");

  const { mutate: startPolling } = trpc.getFile.useMutation({
    onSuccess: (file) => {
      router.push(`/dashboard/${file.id}`);
    },
    retry: true,
    retryDelay: 500,
  });

  return (
    <DropZone
      multiple={false}
      onDrop={async (acceptedFiles) => {
        setIsUploading(true);

        const progressInterval = startSimulatedProgress();

        // Handle File Uploading

        const res = await startUpload(acceptedFiles);

        if (!res) {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        const [fileResponse] = res;

        const key = fileResponse?.key;

        if (!key) {
          return toast({
            title: "Something went wrong",
            description: "Please try again later",
            variant: "destructive",
          });
        }

        clearInterval(progressInterval);
        setUploadProgress(100);

        startPolling({ key });
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="m-4 flex h-64 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <Cloud className="mb-2 h-6 w-6 text-zinc-500" />
            <p className="mb-2 text-sm text-zinc-700">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-zinc-500">
              PDF (up to {isSubscribed ? "16" : "4"}MB)
            </p>
          </div>

          {acceptedFiles && acceptedFiles[0] ? (
            <div className="flex max-w-xs items-center divide-x divide-zinc-200 overflow-hidden rounded-md bg-white outline outline-[1px] outline-zinc-200">
              <div className="grid h-full place-items-center px-3 py-2">
                <File className="h-4 w-4 text-blue-500" />
              </div>
              <div className="h-full truncate px-3 py-2 text-sm">
                {acceptedFiles[0].name}
              </div>
            </div>
          ) : null}

          {isUploading && (
            <div className="mx-auto mt-4 w-full max-w-xs">
              <Progress
                indicatorColor={uploadProgress === 100 ? "bg-green-500" : ""}
                value={uploadProgress}
                className="h-1 w-full bg-zinc-200"
              />
              {uploadProgress === 100 && (
                <div className="flex items-center justify-center gap-1 pt-2 text-center text-sm text-zinc-700">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Redirecting...
                </div>
              )}
            </div>
          )}

          <input {...getInputProps()} type="file" className="hidden" />
        </div>
      )}
    </DropZone>
  );
};

interface UploadButtonProps {}

const UploadButton = ({}: UploadButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={buttonVariants()}>Upload PDF</DialogTrigger>
      <DialogContent>
        <UploadDropZone isSubscribed={false} />
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
