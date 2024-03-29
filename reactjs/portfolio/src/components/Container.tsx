import { ReactElement } from "react";

interface ContainerProps {
    children: ReactElement;
    className ?: string;
}

const Container = ({ children, className=""} : ContainerProps) => {
    return (
        <div className={`w-full h-full inline-block z-0 p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>
            {children}
        </div>
    )
}

export { Container };