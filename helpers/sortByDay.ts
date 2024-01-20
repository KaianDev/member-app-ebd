import { Member } from "@/types/Member";
import { getDateToFormInput } from "./getDateToFormInput";

export const sortByDay = (members: Member[]) => {
  members.sort((a, b) => {
    const dateA = getDateToFormInput(a.birthDate);
    const dateB = getDateToFormInput(b.birthDate);
    const dayA = parseInt(dateA.split("-")[2]);
    const dayB = parseInt(dateB.split("-")[2]);
    if (dayA > dayB) {
      return 1;
    } else {
      return -1;
    }
  });
};
