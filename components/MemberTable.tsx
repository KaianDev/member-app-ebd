"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import { Member } from "@/types/Member";
import { getAge } from "@/helpers/getAge";
import { showBoolean } from "@/helpers/showBoolean";
import { getBirthDate } from "@/helpers/getBirthDate";
import { getClass } from "@/helpers/getClass";
import { getGender } from "@/helpers/getGender";
import { api } from "@/api/api";
import { toast } from "./ui/use-toast";
import ActionsTableCell from "./ActionsTableCell";
import { useRouter } from "next/navigation";
import { useDelMember } from "@/api/mutations";

type MemberTableProps = {
  members: Member[];
};

const MemberTable = ({ members }: MemberTableProps) => {
  const member = useDelMember();

  const handleDeleteMember = async (id: number) => {
    await member.mutateAsync(id, {
      onSuccess() {
        toast({ title: "Membro deletado com sucesso!", duration: 500 });
      },
      onError() {
        toast({
          title: "Ocorreu um erro!",
          variant: "destructive",
          duration: 500,
        });
      },
    });
  };

  return (
    <div className="py-3">
      <small className="block text-right">Quantidade:{members.length}</small>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Membro</TableHead>
            <TableHead className="truncate text-center">
              Data de Nascimento
            </TableHead>
            <TableHead className="truncate text-center">Tem Filhos?</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <div className="flex flex-col">
                  <div className=" font-semibold">
                    <span>{getGender(member.sex)}</span>
                    <span className="truncate"> {member.name}</span>
                  </div>
                  <strong className="text-xs">
                    {member.isTeacher && "Professor(a)"}
                  </strong>
                  <small>
                    Turma: {getClass(member.birthDate, member.isMarried)}
                  </small>
                  <small>{getAge(member.birthDate)} anos</small>
                </div>
              </TableCell>
              <TableCell className="text-center">
                {getBirthDate(member.birthDate)}
              </TableCell>
              <TableCell className="text-center text-lg">
                {showBoolean(member.hasChild)}
              </TableCell>
              <ActionsTableCell
                member={member}
                onDeleteMember={handleDeleteMember}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MemberTable;
