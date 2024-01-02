import { api } from "@/api/api";
import Container from "@/components/Container";
import MemberTable from "@/components/MemberTable";

async function Page() {
    const members = await api.getAllMembers();
    if (!members) return <div>Dados indisponíveis</div>;
    return (
        <Container className="p-6 ">
            <h1 className="text-center font-thin text-2xl">Lista de Membros</h1>
            {members.length > 0 && <MemberTable members={members} />}
            {members.length === 0 && "Não há dados cadastrados"}
        </Container>
    );
}

export default Page;
