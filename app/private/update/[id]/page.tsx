"use client";
import Container from "@/components/Container";
import LoadingData from "@/components/LoadingData";
import Title from "@/components/Title";
import { UpdateFormArea } from "@/components/UpdateFormArea";
import { buttonVariants } from "@/components/ui/button";
import { useOneMember } from "@/data/queries";
import { cn } from "@/lib/utils";
import Link from "next/link";

type PageProps = {
  params: {
    id: string;
  };
};

function Page({ params }: PageProps) {
  const { data: member, isFetching, isError } = useOneMember(params.id);

  if (isFetching && !isError) {
    return <LoadingData />;
  }

  if (isError && !isFetching) {
    return (
      <Container className="p-6 flex flex-col items-center justify-center gap-8">
        <Title>Erro ao carregar dados do membro</Title>
        <Link className={cn(buttonVariants())} href="/private">
          Voltar
        </Link>
      </Container>
    );
  }

  if (member) {
    return (
      <Container className="p-6">
        <Title>Atualizar Membro</Title>
        {member && <UpdateFormArea member={member} />}
      </Container>
    );
  }
}

export default Page;
