"use client";
import { Member } from "@/types/Member";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormMemberSchema, formMemberSchema } from "@/lib/schemas";
import { booleanToString } from "@/helpers/booleanToString";
import { getDateToFormInput } from "@/helpers/getDateToFormInput";
import MemberForm from "./MemberForm";
import { request } from "@/data/request";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

type UpdateFormAreaProps = {
  member: Member;
};

export const UpdateFormArea = ({ member }: UpdateFormAreaProps) => {
  const router = useRouter();
  const form = useForm<FormMemberSchema>({
    resolver: zodResolver(formMemberSchema),
    defaultValues: {
      name: member.name,
      birthDate: getDateToFormInput(member.birthDate),
      sex: member.sex,
      isMarried: booleanToString(member.isMarried),
      isTeacher: booleanToString(member.isTeacher),
      hasChild: booleanToString(member.hasChild),
    },
  });

  const handleMemberUpdate = async (values: FormMemberSchema) => {
    const result = await request.updateMember(member.id, values);
    if (result) {
      toast({
        title: "Membro atualizado com sucesso!",
        duration: 500,
      });
      router.replace("/private");
    } else {
      toast({
        title: "Ocorreu um erro, tente novamente mais tarde",
        variant: "destructive",
        duration: 500,
      });
    }
  };

  return <MemberForm form={form} onSubmit={handleMemberUpdate} />;
};
