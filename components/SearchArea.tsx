"use client";

import { LucideFilter, LucideSearch } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { api } from "@/data/api";
import { useState } from "react";
import { FilteredMembers } from "@/types/FilteredMembers";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Divider from "./Divider";

type SearchAreaProps = {
  setMembers: (filteredMembers: FilteredMembers) => void;
  hasFilter: boolean;
};

const SearchArea = ({ setMembers, hasFilter }: SearchAreaProps) => {
  const [searchName, setSearchName] = useState("");
  const [searchGender, setSearchGender] = useState<"F" | "M">();
  const [searchIsTeacher, setSearchIsTeacher] = useState<"yes" | "no">();
  const [searchHasChild, setSearchHasChild] = useState<"yes" | "no">();

  const handleSearch = async () => {
    const results = await api.searchMember({
      name: searchName,
      sex: searchGender,
      isTeacher: searchIsTeacher,
      hasChild: searchHasChild,
    });
    console.log(results);
    if (results) {
      setMembers({ members: results, status: true });
    }
  };

  const handleClearFilter = () => {
    setSearchGender(undefined);
    setSearchHasChild(undefined);
    setSearchIsTeacher(undefined);
    setMembers({ status: false, members: [] });
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <Input
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          type="search"
          placeholder="Informe o nome do membro aqui"
        />
        <Button onClick={handleSearch}>
          <LucideSearch size={20} />
        </Button>
      </div>
      <div className="flex justify-between">
        <Sheet>
          <SheetTrigger className={cn(buttonVariants())}>
            <LucideFilter size={16} />
            <span className="ml-2">Filtros</span>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <SheetTitle>Filtros</SheetTitle>
            <RadioGroup
              defaultValue={searchGender}
              value={searchGender}
              onValueChange={(e) =>
                setSearchGender((prev) => (e === "M" || e === "F" ? e : prev))
              }>
              <Label>Gênero</Label>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="M"
                    checked={!!searchGender && searchGender === "M"}
                    id="sGenderM"></RadioGroupItem>
                  <Label htmlFor="sGenderM">Masculino</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    checked={!!searchGender && searchGender === "F"}
                    value="F"
                    id="sGenderF"></RadioGroupItem>
                  <Label htmlFor="sGenderF">Feminino</Label>
                </div>
              </div>
            </RadioGroup>

            <Divider />

            <RadioGroup
              defaultValue={searchHasChild}
              onValueChange={(e) =>
                setSearchHasChild(
                  (prev) => (prev = e === "yes" || e === "no" ? e : prev)
                )
              }>
              <Label>Tem filho(s)?</Label>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    checked={!!searchHasChild && searchHasChild === "yes"}
                    value="yes"
                    id="sHasChildYes"></RadioGroupItem>
                  <Label htmlFor="sHasChildYes">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    checked={!!searchHasChild && searchHasChild === "no"}
                    value="no"
                    id="sHasChildNo"></RadioGroupItem>
                  <Label htmlFor="sHasChildNo">Não</Label>
                </div>
              </div>
            </RadioGroup>

            <Divider />

            <RadioGroup
              defaultValue={searchIsTeacher}
              onValueChange={(e) =>
                setSearchIsTeacher(
                  (prev) => (prev = e === "yes" || e === "no" ? e : prev)
                )
              }>
              <Label>É professor(a)?</Label>
              <div className="grid grid-cols-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="yes"
                    id="sTeacherYes"
                    checked={
                      !!searchIsTeacher && searchIsTeacher === "yes"
                    }></RadioGroupItem>
                  <Label htmlFor="sTeacherYes">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="no"
                    id="sTeacherNo"
                    checked={
                      !!searchIsTeacher && searchIsTeacher === "no"
                    }></RadioGroupItem>
                  <Label htmlFor="sTeacherNo">Não</Label>
                </div>
              </div>
            </RadioGroup>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <SheetClose
                className={cn(buttonVariants())}
                onClick={handleSearch}>
                Filtrar
              </SheetClose>
              <Button onClick={handleClearFilter} variant="outline">
                Limpar Filtros
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {hasFilter && (
          <Button onClick={handleClearFilter} variant="outline">
            Limpar filtros
          </Button>
        )}
      </div>
    </>
  );
};

export default SearchArea;
