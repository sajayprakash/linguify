"use client";

import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { usePracticeModal } from "@/store/use-practice-modal";

export default function PracticeModal() {
  const [isclient, issetClient] = useState(false);
  const { isOpen, close } = usePracticeModal();
  useEffect(() => issetClient(true), []);

  if (!isclient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/heart.svg" alt="heart" width={100} height={100} />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Practice lesson
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            You can use practice lessons to regain hearts and points. You will
            <span className="font-bold uppercase"> not</span> loose any hearts
            or points in practice lessons.
          </DialogDescription>
          <DialogFooter className="mb-4">
            <div className="flex flex-col gap-y-4 w-full">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={close}
              >
                I understand
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
