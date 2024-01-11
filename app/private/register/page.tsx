"use client";
import { api } from "@/data/api";
import Container from "@/components/Container";
import MemberForm from "@/components/MemberForm";
import Title from "@/components/Title";
import { toast } from "@/components/ui/use-toast";
import { type FormMemberSchema, formMemberSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Page = () => {
  const router = useRouter();
  const form = useForm<FormMemberSchema>({
    resolver: zodResolver(formMemberSchema),
  });

  const handleMemberRegister = async (values: FormMemberSchema) => {
    const result = await api.createMember(values);
    if (result) {
      toast({
        title: "Novo membro adicionado!",
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

  return (
    <Container className="p-6">
      <Title>Registrar novo Membro</Title>
      <MemberForm form={form} onSubmit={handleMemberRegister} />
    </Container>
  );
};

export default Page;
