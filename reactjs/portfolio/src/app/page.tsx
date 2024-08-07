import { Container } from "../components/Container";
import Image from 'next/image';
import ProfilePicture from "../../public/images/profile/laptop2.jpg";
import { AnimatedText } from '../components/AnimatedText';
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex items-center text-black w-full">
      <Container className="py-0">
        <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full">
            <Image 
              src={ProfilePicture} 
              alt="Profile Picture" 
              className="w-11/12 h-auto lg:hidden md:inline-block md:w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            >
            </Image>
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText text="Criando Soluções Através do Desenvolvimento e Design de Software." className="!text-5xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl" />
            <p className="my-4 text-base font-medium">
            Habilidoso em C#, SQL, JavaScript, TypeScript, Java, C e Git, e apaixonado por algoritmos. Transformo conceitos em soluções inovadoras. Explore meus projetos mais recentes que demonstram minha expertise em React.js e desenvolvimento web.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link 
                href="/cv.pdf" 
                target={"_blank"}
                className="flex items-center bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black
                border-2 border-solid border-transparent hover:border-black transition ease duration-500"
                download={true}
              >Currículo<FaDownload className="ml-2"/> </Link>
              <Link href="mailto:emanuelcontact01@gmail.com" target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-black underline"
              >Contato</Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  )
}
