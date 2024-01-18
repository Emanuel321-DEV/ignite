import Head from "next/head";
import { Container } from "../../components/Container";
import { AnimatedText } from "@/components/AnimatedText";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa";
import projectHubLocal from "../../../public/images/projects/project-hublocal.png";
import projectWorldTrip from "../../../public/images/projects/project-worldtrip.png";
import projectIgnews from "../../../public/images/projects/project-ignews.png";
import projectNode from "../../../public/images/projects/nodejs.jpg";
import projectNodeMain from "../../../public/images/projects/nodejs-main.jpg";
import projectSincMain from "../../../public/images/projects/sync-logo.png";

interface ProjectType {
    type: string;
    title: string;
    summary: string;
    img: StaticImageData;
    link: string;
    github: string;
}

const FeaturedProject = ({ type, title, summary, img, link, github }: ProjectType) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid bg-white shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl sm:px-4">
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden round-lg">
                <Image src={img} alt={title} className="w-full h-auto object-cover" />
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

const Project = ({ type, title, summary, img, link, github } : ProjectType) => {
    return (
        <article className="w-full flex flex-col items-center justify-center  border border-solid bg-white relative h-[100%]">
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden ">
                <Image src={img} alt={title} className="w-full object-cover" />
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
                        <AnimatedText text="Code Unleashes Creativity!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
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
                                    link="https://ignews-five-peach.vercel.app/"
                                    type="NextJS | ReactJS | Typescript | Chakra-UI"
                                    img={projectIgnews}
                                    github="https://github.com/Emanuel321-DEV/ReactJS/tree/main/05-reactjs-ignews"
                                />
                            </div>

                            <div className="col-span-12">
                                <FeaturedProject
                                    title="Sinc ERP"
                                    summary="Sinc ERP is a business management system. I worked assisting in the creation, development and maintenance of the system. Defining standards, performing data modeling, analyzing requirements, proposing and implementing improvements to the system."
                                    link="https://sincsuite.com.br/"
                                    type="C# | .NET | MySql | JavaScript"
                                    img={projectSincMain}
                                    github="https://sincsuite.com.br/"
                                />
                            </div>

                            <div className="col-span-12">
                                <FeaturedProject
                                    title="Image Upload"
                                    summary="This project is an API built with Node.js + Express that enables image uploads to a server. Additionally, the project connects to a MongoDB database, saving the name provided in the request along with the image's path within the server."
                                    link="https://github.com/Emanuel321-DEV/NodeJS/tree/main/06-nodejs-api-upload-imagens"
                                    type="Nodejs | Mongoose | Express | Yarn"
                                    img={projectNodeMain}
                                    github="https://github.com/Emanuel321-DEV/NodeJS/tree/main/06-nodejs-api-upload-imagens"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Node Concepts"
                                    summary="This is an application to manage tasks In this challenge, some functionalities had to be implemented, such as creating a new todo, listing all todos, changing the title and deadline of an existing todo, marking a todo as done, deleting a todo."
                                    link="https://github.com/Emanuel321-DEV/NodeJS/tree/main/01-nodejs-conceitos"
                                    type="NodeJS | Typescript | Express | Nodemon"
                                    img={projectNode}
                                    github="https://github.com/Emanuel321-DEV/NodeJS/tree/main/01-nodejs-conceitos"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Database Queries"
                                    summary="In this challenge it was proposed to perform queries in the Postgres database using Typeorm, these should be done using ORM, using the Query Builder, using raw query. Additionally, this challenge has some tests that should be met"
                                    link="https://github.com/Emanuel321-DEV/NodeJS/tree/main/03-nodejs-desafio-database_queries"
                                    type="Nodejs | Typescript | TypeOrm | Postgres"
                                    img={projectNode}
                                    github="https://github.com/Emanuel321-DEV/NodeJS/tree/main/03-nodejs-desafio-database_queries"
                                />
                            </div>

                        </div>
                    </>
                </Container>
            </main>
        </>
    )
}
