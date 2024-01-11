import { ComponentProps } from "react";

const Divider = ({ className, ...props }: ComponentProps<"div">) => {
  return <div {...props} className={`w-full border-2 ${className}`}></div>;
};

export default Divider;
