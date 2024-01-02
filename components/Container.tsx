import { ComponentProps, ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
} & ComponentProps<"div">;

const Container = ({ children, className, ...props }: ContainerProps) => {
    return (
        <div {...props} className={`mx-auto max-w-5xl ${className}`}>
            {children}
        </div>
    );
};

export default Container;
