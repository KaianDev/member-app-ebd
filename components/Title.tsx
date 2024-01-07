import { ComponentProps } from "react";

type TitleProps = ComponentProps<"h1">;

const Title = ({ children, className, ...props }: TitleProps) => {
    return (
        <h1
            {...props}
            className={`text-center font-light text-2xl ${className}`}>
            {children}
        </h1>
    );
};

export default Title;
