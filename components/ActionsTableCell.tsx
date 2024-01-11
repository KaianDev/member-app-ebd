import Link from "next/link";
import { TableCell } from "./ui/table";
import { LucideEdit, LucideMoreVertical, LucideTrash } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
      <DropdownMenu>
        <DropdownMenuTrigger>
          <LucideMoreVertical size={20} />
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>{member.name.split(" ")[0]}</DropdownMenuLabel>

          <Link href={`/private/update/${member.id}`}>
            <DropdownMenuItem className="w-full justify-between">
              Editar <LucideEdit size={16} />
            </DropdownMenuItem>
          </Link>

          <Dialog>
            <DialogTrigger className="w-full">
              <DropdownMenuItem
                onSelect={(e) => e.preventDefault()}
                className="w-full justify-between">
                Apagar <LucideTrash size={16} />
              </DropdownMenuItem>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {`Gostaria de deletar o membro ${member.name}?`}
                </DialogTitle>

                <DialogDescription>
                  Essa ação não pode ser desfeita.
                </DialogDescription>
              </DialogHeader>

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
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  );
};

export default ActionsTableCell;
