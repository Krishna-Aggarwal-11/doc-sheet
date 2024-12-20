"use client";

import { Id } from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface RenameDialogProps {
  documentId: Id<"documents">;
  initialTilte: string;
  children: React.ReactNode;
}

export const RenameDialog = ({
  documentId,
  initialTilte,
  children,
}: RenameDialogProps) => {
  const update = useMutation(api.documents.updateById);
  const [isUpdating, setIsUpdating] = useState(false);

  const [title, setTitle] = useState(initialTilte);
  const [open, setOpen] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdating(true);
    update({
      id: documentId,
      title: title.trim() || "Untitled document",
    }).catch(() => toast.error("Something went wrong")).then(()=>toast.success("Document renamed ")).finally(() => {
      setIsUpdating(false);
      setOpen(false);
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form onSubmit={onSubmit}>
          <DialogHeader>
            <DialogTitle>Rename Document</DialogTitle>
            <DialogDescription>
              Enter a new name for your document.
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Document Title"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant={"ghost"}
              disabled={isUpdating}
              onClick={(e) => {
                e.stopPropagation(), setOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button disabled={isUpdating} type="submit" onClick={(e) => e.stopPropagation()}>Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
