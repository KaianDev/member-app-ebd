import { Member } from "@/types/Member";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";
import { getAge } from "@/helpers/getAge";
import { showBoolean } from "@/helpers/showBoolean";
import { getBirthDate } from "@/helpers/getBirthDate";
import { getClass } from "@/helpers/getClass";
import { getGender } from "@/helpers/getGender";
import { Button, buttonVariants } from "./ui/button";
import { LucideEdit, LucideTrash } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
type MemberTableProps = {
    members: Member[];
};
const MemberTable = ({ members }: MemberTableProps) => {
    return (
        <div className="py-3">
            <small className="block text-right">
                Quantidade:{members.length}
            </small>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Membro</TableHead>
                        <TableHead className="truncate text-center">
                            Data de Nascimento
                        </TableHead>
                        <TableHead className="truncate text-center">
                            Tem Filhos?
                        </TableHead>
                        <TableHead className="truncate text-center">
                            É professor?
                        </TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {members.map((member) => (
                        <TableRow key={member.id}>
                            <TableCell>
                                <div className="flex flex-col">
                                    <div className="w-max font-semibold">
                                        <span>{getGender(member.sex)}</span>
                                        <span> {member.name}</span>
                                    </div>
                                    <small>
                                        Turma:{" "}
                                        {getClass(
                                            member.birthDate,
                                            member.isMarried
                                        )}
                                    </small>
                                    <small>
                                        {getAge(member.birthDate)} anos
                                    </small>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {getBirthDate(member.birthDate)}
                            </TableCell>
                            <TableCell className="text-center text-lg">
                                {showBoolean(member.hasChild)}
                            </TableCell>
                            <TableCell className="text-center text-lg">
                                {showBoolean(member.isTeacher)}
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-2 justify-end">
                                    <Link
                                        className={cn(buttonVariants())}
                                        href={`/private/members/update/${member.id}`}>
                                        <LucideEdit size={16} />
                                    </Link>
                                    <Button variant="destructive">
                                        <LucideTrash size={16} />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default MemberTable;
