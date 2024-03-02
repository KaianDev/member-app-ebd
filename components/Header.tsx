"use client";
import Image from "next/image";
import Container from "./Container";
import LogoEBD from "@/public/logo.png";
import Link from "next/link";
import SignOutButton from "./SignOutButton";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { LucideMenu } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const path = usePathname();
  return (
    <header className="shadow-md bg-gradient-to-t from-slate-100 via-slate-100 to-neutral-500 dark:from-zinc-800">
      <Container className="py-3 px-6 flex justify-between items-center">
        <Link href="/private" replace={true}>
          <Image
            src={LogoEBD}
            alt="Logo EBD"
            sizes="100vw"
            width={0}
            height={0}
            className="w-auto h-12 sm:h-24 dark:invert"
          />
        </Link>
        <div className="hidden sm:flex gap-2 ">
          <ThemeToggle />
          {path === "/private" && (
            <Link href="/private/register" className={cn(buttonVariants())}>
              Registrar Membro
            </Link>
          )}
          <SignOutButton />
        </div>
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger>
              <LucideMenu size={40} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>EBD - IPRAB Ebenézer</SheetTitle>
              </SheetHeader>
              <SheetDescription className="space-y-5">
                <div className="flex justify-center items-center">
                  <ThemeToggle />
                </div>
                <Link href="/private">
                  <SheetClose className="w-full font-semibold mt-4 p-6 text-center border-b uppercase hover:bg-zinc-200 dark:hover:bg-zinc-800 ease-in duration-300">
                    Home
                  </SheetClose>
                </Link>
                <Link href="/private/register">
                  <SheetClose className="w-full font-semibold p-6 text-center border-b uppercase hover:bg-zinc-200 dark:hover:bg-zinc-800 ease-in duration-300">
                    Registra novo membro
                  </SheetClose>
                </Link>
              </SheetDescription>
              <SheetFooter className="mt-4 pb-6">
                <SignOutButton />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
};

export default Header;
