import Head from "next/head";
import { Container } from "../../components/Container";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import project1 from "../../../public/images/profile/developer-pic-1.png";
import projectHubLocal from "../../../public/images/projects/project-hublocal.png";
import projectWorldTrip from "../../../public/images/projects/project-worldtrip.png";
import projectIgnews from "../../../public/images/projects/project-ignews.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid bg-white shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl sm:px-4">
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden round-lg">
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg-w-full lg:pl-0 lg:pt-6 lg:w-full">
                <span className="text-pink-500 font-medium text-xl xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-black">{summary}</p>
                <div className="mt-2 flex items-center">
                    <Link
                        href={github}
                        target="_blank"
                        className="w-10 "
                    >
                        <FaGithub fontSize={30}/>
                    </Link>
                    <Link
                        href={link}
                        target="_blank"
                        className="ml-4 rounded-lg bg-black text-white p-2 px-6 text-lg font-semibold sm:px-4 sm-text-base"
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
};

const Project = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center  border border-solid bg-white relative h-[100%]">
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden ">
                <Image src={img} alt={title} className="h-52 bg-cover" />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4 p-6">
                <span className="text-pink-500 font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-black">{summary}</p>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline"
                    >
                        Visit
                    </Link>
                    <Link
                        href={github}
                        target="_blank"
                        className="w-8"
                    >
                        <FaGithub fontSize={30} />
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default function Projects() {
    return (
        <>
            <Head>
                <title>Emanuel Henrique | Projects Page</title>
                <meta name="description" content="any description"></meta>
            </Head>
            <main className="flex w-full flex-col items-center justify-center">
                <Container className="w-full pt-16 flex flex-col items-center justify-center">
                    <>
                        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0" >
                            <div className="col-span-12">
                                <FeaturedProject
                                    title="Landing Page HubLocal"
                                    summary="Project made using React, it is a landing page that lists the advantages you will have by becoming a customer of the company HubLocal"
                                    link="https://project-bolsa-hubdev.vercel.app/"
                                    type="React | Typescript | Styled-Components"
                                    img={projectHubLocal}
                                    github="https://github.com/Emanuel321-DEV"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Project WorldTrip"
                                    summary="Modern travel website showcasing the world's major continents and
                                    its main tourist cities, as well as the country in which these cities are located
                                    locate. The site is responsive, and was made mainly using Nextjs and Chakra-UI"
                                    link="https://react-js-worldtrip.vercel.app"
                                    type="NextJS | React | Typescript | Chakra-UI"
                                    img={projectWorldTrip}
                                    github="https://github.com/Emanuel321-DEV/ReactJS/tree/main/06-reactjs-interface-chakraUi"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Ignews"
                                    summary="News blog, users who have a subscription to
                                    system can consume all the content of the posts, on the other hand,
                                    Unregistered users only have partial access to publications. O
                                    System has integration with payment method, PrismicCMS, GitHub
                                    OAuth and FaunaDB"
                                    link="/"
                                    type="NextJS | ReactJS | Typescript | Chakra-UI"
                                    img={projectIgnews}
                                    github="https://github.com/Emanuel321-DEV/ReactJS/tree/main/05-reactjs-ignews"
                                />
                            </div>
                        </div>
                    </>
                </Container>
            </main>
        </>
    )
}