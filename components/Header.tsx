import Image from "next/image";
import Container from "./Container";
import LogoEBD from "@/public/logo.png";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Header = () => {
    return (
        <header className="shadow-md bg-gradient-to-t from-slate-100 via-slate-100 to-neutral-500">
            <Container className="py-3 px-6 flex justify-between items-center">
                <Link href="/private/members">
                    <Image
                        src={LogoEBD}
                        alt="Logo EBD"
                        sizes="100vw"
                        width={0}
                        height={0}
                        className="w-auto h-24"
                    />
                </Link>
                <div className="flex gap-2">
                    <Link
                        href="/private/members/register"
                        className={cn(buttonVariants())}>
                        Registrar Membro
                    </Link>
                    <SignOutButton />
                </div>
            </Container>
        </header>
    );
};

export default Header;
