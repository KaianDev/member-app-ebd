import Header from "@/components/Header";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

type LayoutPros = {
    children: ReactNode;
};

const Layout = async ({ children }: LayoutPros) => {
    const session = await getServerSession(authOptions);
    if (session?.user) {
        return (
            <>
                <Header />
                {children}
            </>
        );
    } else {
        redirect("/");
    }
};

export default Layout;
