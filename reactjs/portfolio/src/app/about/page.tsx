import Head from "next/head";
import { Container } from "../../components/Container";
import { AnimatedText } from "@/components/AnimatedText";
import Image from "next/image";
import profilePicture from "../../../public/images/profile/developer-pic-2.jpg";

export default function About () {
    return (
        <>
            <Head>
                <title>CodeBucks | About Page</title>
                <meta name="description" content="any description"></meta>
            </Head>        
            <main className="flex w-full flex-col items-center justify-center">
                <Container className="pt-16">
                    <>
                        <AnimatedText text="Passion Fuels Purpose" className="mb-16"/>
                        <div className="grid w-full grid-cols-8 gap-16">
                            <div className="col-span-3 flex flex-col items-start justify-start">
                                <h1 className="mb-4 text-lg font-bold uppercase text-black/75">
                                    Biography
                                </h1>
                                <p className="font-medium">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit temporibus ducimus illum dignissimos! Reiciendis ex architecto iste minus a magnam, cupiditate, fugiat aliquam deserunt provident nemo omnis voluptatem nesciunt quod.
                                </p>
                                <p className="my-4 font-medium">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit temporibus ducimus illum dignissimos! Reiciendis ex architecto iste minus a magnam, cupiditate, fugiat aliquam deserunt provident nemo omnis voluptatem nesciunt quod.
                                </p>
                                <p className="font-medium">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit temporibus ducimus illum dignissimos! Reiciendis ex architecto iste minus a magnam, cupiditate, fugiat aliquam deserunt provident nemo omnis voluptatem nesciunt quod.
                                </p>
                            </div>
                            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-slate-50 p-8">
                                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black">

                                </div>
                                <Image src={profilePicture} alt="CodBucks" className="w-full h-auto rounded-2xl">

                                </Image>
                            </div>
                            <div>
                                <div>
                                    <span>
                                        50+
                                    </span>
                                    <h2>Satisfated Clients</h2>
                                </div>
                            </div>
                        </div>
                    </>
                </Container>
            </main>
        </>
    )
}

// export default about;