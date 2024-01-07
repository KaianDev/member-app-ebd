"use client";

import { LucideSearch } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { api } from "@/api/api";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const SearchArea = () => {
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
      {/* <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
        <RadioGroup
          defaultValue={searchGender}
          onValueChange={(e) =>
            setSearchGender((prev) => (e === "M" || e === "F" ? e : prev))
          }>
          <Label>Gênero</Label>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="M" id="sGenderM"></RadioGroupItem>
            <Label htmlFor="sGenderM">Masculino</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="F" id="sGenderF"></RadioGroupItem>
            <Label htmlFor="sGenderF">Feminino</Label>
          </div>
        </RadioGroup>
        <RadioGroup
          defaultValue={searchIsTeacher}
          onValueChange={(e) =>
            setSearchHasChild(
              (prev) => (prev = e === "yes" || e === "no" ? e : prev)
            )
          }>
          <Label>Tem filho(s)?</Label>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="sHasChildYes"></RadioGroupItem>
            <Label htmlFor="sHasChildYes">Sim</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="sHasChildNo"></RadioGroupItem>
            <Label htmlFor="sHasChildNo">Não</Label>
          </div>
        </RadioGroup>
        <RadioGroup
          defaultValue={searchHasChild}
          onValueChange={(e) =>
            setSearchIsTeacher(
              (prev) => (prev = e === "yes" || e === "no" ? e : prev)
            )
          }>
          <Label>É professor(a)?</Label>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="sTeacherYes"></RadioGroupItem>
            <Label htmlFor="sTeacherYes">Sim</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="sTeacherNo"></RadioGroupItem>
            <Label htmlFor="sTeacherNo">Não</Label>
          </div>
        </RadioGroup>
      </div> */}
    </>
  );
};

export default SearchArea;
