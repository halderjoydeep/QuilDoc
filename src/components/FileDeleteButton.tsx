"use client";

import { trpc } from "@/app/_trpc/client";
import { Loader2, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface FileDeleteButtonProps {
  fileId: string;
}

const FileDeleteButton = ({ fileId }: FileDeleteButtonProps) => {
  const router = useRouter();

  const { mutate: deleteFile, isLoading } = trpc.deleteFile.useMutation({
    onSuccess: router.refresh,
    onError: (error) => console.log(error),
  });

  return (
    <Button
      variant="destructive"
      size="sm"
      className="w-full"
      onClick={() => deleteFile({ id: fileId })}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4" />
      ) : (
        <Trash className="h-4 w-4" />
      )}
    </Button>
  );
};

export default FileDeleteButton;
