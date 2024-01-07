"use client";
import Container from "@/components/Container";
import LoadingData from "@/components/LoadingData";
import MemberTable from "@/components/MemberTable";
import SearchArea from "@/components/SearchArea";
import Title from "@/components/Title";
import { useMemberList } from "@/api/queries";

function Page() {
  const { data: members, isFetching } = useMemberList();

  if (isFetching) {
    return <LoadingData />;
  }

  if (!members) return <div>Dados indisponíveis</div>;

  return (
    <Container className="p-6 flex flex-col gap-6">
      <SearchArea />
      <Title>Lista de Membros</Title>
      {members.length > 0 && <MemberTable members={members} />}
      {members.length === 0 && (
        <p className="text-center">Não há dados cadastrados</p>
      )}
    </Container>
  );
}

export default Page;
