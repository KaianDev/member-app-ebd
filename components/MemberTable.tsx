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
import { toast } from "./ui/use-toast";
import ActionsTableCell from "./ActionsTableCell";
import { useDelMember } from "@/data/mutations";
import Title from "./Title";

type MemberTableProps = {
  members: Member[];
  filtered?: boolean;
};

const MemberTable = ({ members, filtered }: MemberTableProps) => {
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
      <Title className="mb-2">Lista de Membros</Title>
      <div className="flex justify-between">
        {filtered && <small>Resultados</small>}
        <small className="ml-auto">Quantidade:{members.length}</small>
      </div>
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
            <TableRow
              className="dark:even:bg-zinc-800 even:bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-700"
              key={member.id}
            >
              <TableCell>
                <div className="flex flex-col">
                  <div className="flex gap-1 font-semibold">
                    <span>{getGender(member.sex)}</span>
                    <span className="truncate text-sm">{member.name}</span>
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
