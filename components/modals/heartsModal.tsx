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
import { useHeartsModal } from "@/store/use-hearts-modal";

export default function HeartsModal() {
  const router = useRouter();
  const [isclient, issetClient] = useState(false);
  const { isOpen, close } = useHeartsModal();
  useEffect(() => issetClient(true), []);

  const onClick = () => {
    close();
    router.push("/store");
  };

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
            You are out of hearts!
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Upgrade to premium to get unlimited hearts or purchase more hearts
            from the store.
          </DialogDescription>
          <DialogFooter className="mb-4">
            <div className="flex flex-col gap-y-4 w-full">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={onClick}
              >
                Get Unlimited hearts
              </Button>
              <Button
                variant="primaryOutline"
                size="lg"
                className="w-full"
                onClick={close}
              >
                No thanks
              </Button>
            </div>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
