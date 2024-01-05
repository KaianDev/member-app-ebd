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
        redirect("/private");
    } else {
        return <>{children}</>;
    }
};

export default Layout;
