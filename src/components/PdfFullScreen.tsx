"use client";

import { Expand } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface PdfFullScreenProps {}

const PdfFullScreen = ({}: PdfFullScreenProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Expand className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>he</DialogContent>
    </Dialog>
  );
};

export default PdfFullScreen;
