"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

interface CustomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode; 
}

export function CustomDialog({ open, onOpenChange, children}: CustomDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}
