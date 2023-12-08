"use client";

import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const UploadDropZone = () => {
  return <div>UploadDropZone</div>;
};

interface UploadButtonProps {}

const UploadButton = ({}: UploadButtonProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={buttonVariants()}>Upload PDF</DialogTrigger>
      <DialogContent>Hello</DialogContent>
    </Dialog>
  );
};

export default UploadButton;
