"use client"
import * as React from "react"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { LabelResponse } from "@/types";
import { CircleEllipsis, PlusCircle } from "lucide-react"

import useClickOutside from "@/helpers/hooks/use-click-outside";
import LabelForm from "@/app/(protected)/components/label-form";

interface ModalProps {
    label: LabelResponse | null
}

export default function LabelModal({
    label
} : ModalProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const icon = label ? <CircleEllipsis className="w-4 h-4" /> : <PlusCircle className="w-4 h-4" />
  const dialogRef = React.useRef(null);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  useClickOutside(dialogRef, () => setIsOpen(false));

  return (
    <>
      <div onClick={open} className="cursor-pointer">
        {icon}
      </div>
      <Dialog open={isOpen}>
        <DialogContent ref={dialogRef}>
          <LabelForm label={label} onClose={close}/>
        </DialogContent>
      </Dialog>
    </>
  );
}