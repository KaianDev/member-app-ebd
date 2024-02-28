import { Check, X } from "lucide-react";
export const showBoolean = (value: boolean) => {
  return value ? (
    <Check color="green" className="mx-auto" />
  ) : (
    <X color="red" className="mx-auto" />
  );
};
