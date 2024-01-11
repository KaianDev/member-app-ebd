"use client";
import Container from "@/components/Container";
import LoadingData from "@/components/LoadingData";
import MemberTable from "@/components/MemberTable";
import SearchArea from "@/components/SearchArea";
import Title from "@/components/Title";
import { useMemberList } from "@/data/queries";
import { type FilteredMembers } from "@/types/FilteredMembers";
import { LucideAlertTriangle } from "lucide-react";
import { useState } from "react";

function Page() {
  const [filteredMembers, setFilteredMembers] = useState<FilteredMembers>({
    status: false,
    members: [],
  });
  const { data: members, isFetching } = useMemberList();

  if (isFetching) {
    return <LoadingData />;
  }

  if (!members)
    return (
      <div className="p-6">
        <Title className="flex items-center justify-center gap-1">
          <LucideAlertTriangle size={25} /> Dados Indisponíveis
        </Title>
        <p className="text-center text-slate-600">
          Tente novamente mais tarde!
        </p>
      </div>
    );

  return (
    <Container className="p-6 flex flex-col gap-6">
      {(members.length > 0 || filteredMembers.members.length > 0) && (
        <SearchArea
          setMembers={setFilteredMembers}
          hasFilter={filteredMembers.status}
        />
      )}
      {members.length > 0 && !filteredMembers.status && (
        <MemberTable members={members} />
      )}
      {filteredMembers.status && filteredMembers.members.length > 0 && (
        <MemberTable members={filteredMembers.members} />
      )}

      {members.length === 0 && (
        <div>
          <Title>Não há dados cadastrados</Title>
          <p className="text-center">
            Vamos começar? Clique em{" "}
            <a
              href="/private/register"
              className="duration-300 hover:underline">
              Registrar Membro
            </a>
          </p>
        </div>
      )}

      {filteredMembers.members.length === 0 && (
        <div>
          <Title>Nenhum resultado foi encontrado para essa consulta</Title>
          <p className="text-center text-slate-600">
            Clique em limpar filtros e tente novamente!
          </p>
        </div>
      )}
    </Container>
  );
}

export default Page;
