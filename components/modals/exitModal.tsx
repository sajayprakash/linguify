"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
import { useExitModal } from "@/store/use-exit-modal";
export default function ExitModal() {
  const router = useRouter();
  const [isclient, issetClient] = useState(false);
  const { isOpen, close } = useExitModal();
  useEffect(() => issetClient(true), []);

  if (!isclient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/mascot.jpg"
              alt="mascot"
              width={80}
              height={80}
              className="rounded-full border-green-600 border-2"
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">
            Leaving already?
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            You are about to exit the lesson. Are you sure?
          </DialogDescription>
          <DialogFooter className="mb-4">
            <div className="flex flex-col gap-y-4 w-full">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={close}
              >
                Keep Learning
              </Button>
              <Button
                variant="dangerOutline"
                size="lg"
                className="w-full"
                onClick={() => {
                  close();
                  router.push("/learn");
                }}
              >
                End Session
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
