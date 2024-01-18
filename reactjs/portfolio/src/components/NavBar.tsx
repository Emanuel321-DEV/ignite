"use client"
import Link from "next/link";
import { Logo } from "./Logo";
import { usePathname, useRouter } from "next/navigation";
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

interface CustomLink {
    href: string;
    title: string;
    className?: string;
}

interface CustomMobileLink extends CustomLink{
    toggle: () => void;
}

const CustomLink = ({ href, title, className }: CustomLink) => {
    const pathname = usePathname();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
                h-[2px] inline-block bg-black
                absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : 'w-0'}
            `}>
                &nbsp;
            </span>
        </Link>
    )
};

const CustomMobileLink = ({ href, title, className, toggle }: CustomMobileLink) => {

    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        toggle();
        router.push(href)
    }
    return (
        <button className={`${className} relative group text-white my-2`} onClick={handleClick}>
            {title}
            <span className={`
                h-[2px] inline-block bg-white
                absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : 'w-0'}
            `}>
                &nbsp;
            </span>
        </button>
    )
};


const NavBar = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header
            className="w-full px-32 py-8 font-medium flex items-center justify-between relative"
        >
            <button className="absolute left-3 flex-col justify-center items-center hidden lg:flex " onClick={handleClick}>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    {/* <CustomLink href="/education" title="Education" className="mx-4" /> */}
                    {/* <CustomLink href="/about" title="About" className="mx-4" /> */}
                    <CustomLink href="/projects" title="Projects" className="ml-4" />
                </nav>

                <nav className="flex items-center justify-center flex-wrap">
                    <motion.a
                        href="https://www.linkedin.com/in/emanuel-henrique-5307b6144"
                        target={"_blank"}
                        className="w-6 mr-3"
                        whileHover={{
                            y: -2
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                    >
                        <FaLinkedin
                            color="#0077B5"
                            fontSize={25}
                        />
                    </motion.a>
                    <motion.a
                        href="https://github.com/Emanuel321-DEV"
                        target={"_blank"}
                        className="w-6 mx-3"
                        whileHover={{
                            y: -2
                        }}
                        whileTap={{
                            scale: 0.9
                        }}

                    >
                        <FaGithub fontSize={25} />
                    </motion.a>
                    <motion.a
                        href="https://github.com/Emanuel321-DEV"
                        target={"_blank"}
                        className="w-6 ml-3"
                        whileHover={{
                            y: -2
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                    >
                        <FaWhatsapp color="#25D366" fontSize={25} />
                    </motion.a>

                </nav>
            </div>
            {
                isOpen ? <motion.div 
                initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
                animate={{scale: 1, opacity: 1}}
                className="min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 rounded-lg backdrop-bluer-md py-32">
                    <nav className="flex items-start flex-col justify-center">
                        <CustomMobileLink href="/" title="Home"  toggle={handleClick} />
                        {/* <CustomMobileLink href="/education" title="Education"  toggle={handleClick} /> */}
                        {/* <CustomMobileLink href="/about" title="About"  toggle={handleClick} /> */}
                        <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
                    </nav>

                    <nav className="flex items-center justify-center flex-wrap mt-4">
                        <motion.a
                            href="https://www.linkedin.com/in/emanuel-henrique-5307b6144"
                            target={"_blank"}
                            className="w-6 mr-3 sm:mr-1"
                            whileHover={{
                                y: -2
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                        >
                            <FaLinkedin
                                color="#0077B5"
                                fontSize={25}
                            />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Emanuel321-DEV"
                            target={"_blank"}
                            className="w-6 mx-3 bg-white rounded-full sm:mx-1"
                            whileHover={{
                                y: -2
                            }}
                            whileTap={{
                                scale: 0.9
                            }}

                        >
                            <FaGithub fontSize={25} />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/5534999268588?text=Ol%C3%A1+Emanuel%2C+vim+pelo+seu+portf%C3%B3lio%2C+podemos+conversar+%3F"
                            target={"_blank"}
                            className="w-6 ml-3 sm:ml-1"
                            whileHover={{
                                y: -2
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                        >
                            <FaWhatsapp color="#25D366" fontSize={25} />
                        </motion.a>

                    </nav>
                </motion.div>
                    : null
            }

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo />
            </div>
        </header>
    )
}

export { NavBar };