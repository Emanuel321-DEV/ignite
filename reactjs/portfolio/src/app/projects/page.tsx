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

import projectIntelpet from "../../../public/images/projects/intelpet.jpg";
import projectLumenu from "../../../public/images/projects/lumenu.jpg";

import projectJava from "../../../public/images/projects/java.png";
import projectDB from "../../../public/images/projects/postgres.png";

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
                        Visualizar Projeto
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
                        Visualizar
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
                        <AnimatedText text="Código Liberta Criatividade!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
                        <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0" >
                            <div className="col-span-12">
                                <FeaturedProject
                                    title="Sinc ERP"
                                    summary="Sinc ERP é um sistema de gestão empresarial. Trabalhei auxiliando na criação, desenvolvimento e manutenção do sistema. Definindo padrões, realizando modelagem de dados, analisando requisitos, propondo e implementando melhorias no sistema."
                                    link="https://sincsuite.com.br/"
                                    type="C# | .NET | MySQL | JavaScript"
                                    img={projectSincMain}
                                    github="https://sincsuite.com.br/"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Intelpet"
                                    summary="O sistema gerencia agendamentos para pet shops. Neste projeto, implementei a capacidade de agendar vários pets em um único compromisso, responsividade e otimização em todas as telas do sistema, criação de menus para gerenciamento de estabelecimentos, integração com APIs externas, implementação de novas regras de negócios e manutenção do sistema."
                                    link="https://intelpet.com.br/"
                                    type="C# | .NET | MySQL | JavaScript"
                                    img={projectIntelpet}
                                    github="https://intelpet.com.br/"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Lumenu"
                                    summary="Neste projeto, trabalhei na implementação do fluxo de trabalho para edição de itens dentro de um pedido, melhorias na leitura de códigos QR, manutenção do sistema, implantações em ambientes de staging e produção, e manutenção do banco de dados."
                                    link="https://lumenu.digital/"
                                    type="C# | .NET | MySQL | JavaScript"
                                    img={projectLumenu}
                                    github="https://lumenu.digital/"
                                />
                            </div>



                            <div className="col-span-12">
                                <FeaturedProject
                                    title="Agência de Viagens"
                                    summary="Este projeto foi realizado durante o 4º semestre na Universidade Federal de Uberlândia, no curso de Programação Orientada a Objetos I. Consistiu na construção de um sistema que simulava a operação de uma agência de viagens para praticar conceitos de POO. Nesse sentido, criamos um sistema onde é possível cadastrar Cidades, Hotéis, Atrações, Aeroportos, Usuários, entre outras entidades. Além disso, os usuários podem fazer login e agendar suas viagens."
                                    link="https://github.com/Emanuel321-DEV/Java/tree/main/projeto-agencia-de-viagens"
                                    type="Java | Files | POO | Git"
                                    img={projectJava}
                                    github="https://github.com/Emanuel321-DEV/Java/tree/main/projeto-agencia-de-viagens"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="RMI"
                                    summary="Este projeto em Java utiliza RMI (Remote Method Invocation) para facilitar a comunicação entre sistemas distribuídos. RMI é uma API Java que permite que um programa Java invoque métodos em um objeto que está sendo executado em outra Máquina Virtual Java (JVM), possivelmente em uma máquina física diferente. O projeto demonstra como o RMI pode ser utilizado para construir aplicações distribuídas, onde objetos podem interagir de forma transparente através de limites de rede. Ao utilizar RMI, os desenvolvedores podem criar sistemas escaláveis e distribuídos, permitindo que os componentes se comuniquem e colaborem de maneira eficiente pela rede. Este projeto destaca o poder do RMI em viabilizar chamadas de procedimentos remotos e construir aplicações Java distribuídas."
                                    link="https://github.com/Emanuel321-DEV/Java/tree/main/RMI"
                                    type="Java | RMI | POO | Git"
                                    img={projectJava}
                                    github="https://github.com/Emanuel321-DEV/Java/tree/main/RMI"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Quick Sort Threading"
                                    summary="Este programa em Java implementa o algoritmo quicksort utilizando multithreading. O quicksort é um algoritmo de ordenação amplamente utilizado, conhecido por sua eficiência na ordenação de grandes conjuntos de dados. Ao aproveitar threads, o programa paraleliza o processo de ordenação, melhorando o desempenho geral ao utilizar múltiplos núcleos ou processadores simultaneamente. Essa abordagem aprimora a escalabilidade do algoritmo de ordenação, tornando-o adequado para lidar com conjuntos de dados massivos de forma eficiente. O programa demonstra como a utilização de threads pode ser aplicada para otimizar algoritmos de ordenação, evidenciando o poder da concorrência em tarefas computacionais."
                                    link="https://github.com/Emanuel321-DEV/Java/tree/main/quickSortThread"
                                    type="Java | Threads | POO | Git"
                                    img={projectJava}
                                    github="https://github.com/Emanuel321-DEV/Java/tree/main/quickSortThread"
                                />
                            </div>



                            <div className="col-span-12">
                                <FeaturedProject
                                    title="Car Rental Company"
                                    summary="Este projeto foi desenvolvido ao longo do meu curso de Sistemas de Informação e teve como objetivo modelar um sistema de banco de dados para uma agência de viagens, realizando a modelagem, criação de tabelas e relacionamentos, e a escrita de consultas, atualizações e inserções de dados."
                                    link="./"
                                    type="Model Data | SQL | Postgres | DDL"
                                    img={projectDB}
                                    github="./"
                                />
                            </div>


                            
                            
                            <div className="col-span-12">
                                <FeaturedProject
                                    title="Landing Page HubLocal"
                                    summary="Projeto desenvolvido usando React, é uma landing page que lista as vantagens de se tornar cliente da empresa HubLocal."
                                    link="https://project-bolsa-hubdev.vercel.app/"
                                    type="React | Typescript | Styled-Components"
                                    img={projectHubLocal}
                                    github="https://github.com/Emanuel321-DEV"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Project WorldTrip"
                                    summary="Site moderno de viagens que apresenta os principais continentes do mundo e suas principais cidades turísticas, bem como o país onde essas cidades estão localizadas. O site é responsivo e foi desenvolvido principalmente com Next.js e Chakra-UI."
                                    link="https://react-js-worldtrip.vercel.app"
                                    type="NextJS | React | Typescript | Chakra-UI"
                                    img={projectWorldTrip}
                                    github="https://github.com/Emanuel321-DEV/ReactJS/tree/main/06-reactjs-interface-chakraUi"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Ignews"
                                    summary="Blog de notícias onde usuários com assinatura ao sistema têm acesso a todo o conteúdo dos posts, enquanto usuários não registrados têm acesso apenas parcial às publicações. O sistema possui integração com métodos de pagamento, PrismicCMS, OAuth do GitHub e FaunaDB."
                                    link="https://ignews-five-peach.vercel.app/"
                                    type="NextJS | ReactJS | Typescript | Chakra-UI"
                                    img={projectIgnews}
                                    github="https://github.com/Emanuel321-DEV/ReactJS/tree/main/05-reactjs-ignews"
                                />
                            </div>

                            <div className="col-span-12">
                                <FeaturedProject
                                    title="Image Upload"
                                    summary="Este projeto é uma API construída com Node.js e Express que permite o upload de imagens para um servidor. Além disso, o projeto se conecta a um banco de dados MongoDB, salvando o nome fornecido na solicitação junto com o caminho da imagem no servidor."
                                    link="https://github.com/Emanuel321-DEV/NodeJS/tree/main/06-nodejs-api-upload-imagens"
                                    type="Nodejs | Mongoose | Express | Yarn"
                                    img={projectNodeMain}
                                    github="https://github.com/Emanuel321-DEV/NodeJS/tree/main/06-nodejs-api-upload-imagens"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Node Concepts"
                                    summary="Esta é uma aplicação para gerenciar tarefas. No desafio, algumas funcionalidades precisavam ser implementadas, como criar um novo todo, listar todos os todos, alterar o título e o prazo de um todo existente, marcar um todo como concluído e excluir um todo."
                                    link="https://github.com/Emanuel321-DEV/NodeJS/tree/main/01-nodejs-conceitos"
                                    type="NodeJS | Typescript | Express | Nodemon"
                                    img={projectNode}
                                    github="https://github.com/Emanuel321-DEV/NodeJS/tree/main/01-nodejs-conceitos"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-12">
                                <Project
                                    title="Database Queries"
                                    summary="Neste desafio, foi proposto realizar consultas em um banco de dados Postgres utilizando TypeORM. As consultas deveriam ser feitas usando ORM, Query Builder e consultas em raw query. Além disso, o desafio inclui alguns testes que devem ser atendidos."
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
