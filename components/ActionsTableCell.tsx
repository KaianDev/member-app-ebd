import Link from "next/link";
import { TableCell } from "./ui/table";
import { LucideEdit, LucideTrash } from "lucide-react";
import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Member } from "@/types/Member";

type ActionsTableCellProps = {
  member: Member;
  onDeleteMember: (id: number) => void;
};

const ActionsTableCell = ({
  member,
  onDeleteMember,
}: ActionsTableCellProps) => {
  return (
    <TableCell>
      <div className="flex gap-2 justify-end">
        <Link
          className={cn(buttonVariants())}
          href={`/private/update/${member.id}`}>
          <LucideEdit size={16} />
        </Link>
        <Dialog>
          <DialogTrigger
            className={cn(buttonVariants({ variant: "destructive" }))}>
            <LucideTrash size={16} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {`Gostaria de deletar o membro ${member.name}?`}
              </DialogTitle>
              <DialogDescription>
                Essa ação não pode ser desfeita.
              </DialogDescription>
              <DialogFooter>
                <DialogClose
                  onClick={() => onDeleteMember(member.id)}
                  className={cn(buttonVariants({ variant: "destructive" }))}>
                  Deletar
                </DialogClose>
                <DialogClose className={cn(buttonVariants())}>
                  Cancelar
                </DialogClose>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </TableCell>
  );
};

export default ActionsTableCell;
