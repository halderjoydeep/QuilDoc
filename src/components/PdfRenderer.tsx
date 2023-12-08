"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Search,
} from "lucide-react";
import { useState } from "react";
import PdfFullScreen from "./PdfFullScreen";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Input } from "./ui/input";

interface PdfRendererProps {}

const PdfRenderer = ({}: PdfRendererProps) => {
  const [currPage, setCurrPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>();
  const [scale, setScale] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);

  return (
    <div className="flex flex-col items-center rounded-md bg-white shadow">
      {/* Control Bar */}
      <div className="flex h-14 w-full items-center justify-between border-b border-zinc-200 px-2">
        {/* PDF Navigation Control */}
        <div className="flex items-center gap-1.5">
          <Button
            disabled={currPage <= 1}
            variant="ghost"
            size="sm"
            aria-label="previous page"
            onClick={() => setCurrPage((prev) => prev - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex items-center gap-1.5">
            <Input className="h-8 w-12" />
            <p className="space-x-1 text-sm text-zinc-700">
              <span>/</span>
              <span>{numPages ?? "x"}</span>
            </p>
          </div>

          <Button
            disabled={numPages === undefined || currPage === numPages}
            onClick={() => {
              setCurrPage((prev) => prev + 1);
            }}
            variant="ghost"
            size="sm"
            aria-label="next page"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* PDF  Appearance Control*/}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="hidden sm:flex">
              <Button className="gap-1.5" aria-label="zoom" variant="ghost">
                <Search className="h-4 w-4" />
                {scale * 100}%
                <ChevronDown className="h-3 w-3 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setScale(1)}>
                100%
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setScale(1.5)}>
                150%
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setScale(2)}>
                200%
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setScale(2.5)}>
                250%
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            onClick={() => setRotation((prev) => prev + 90)}
            variant="ghost"
            size="sm"
            aria-label="rotate 90 degress"
          >
            <RotateCw className="h-4 w-4" />
          </Button>

          <PdfFullScreen />
        </div>
      </div>
      PdfRenderer
    </div>
  );
};

export default PdfRenderer;
