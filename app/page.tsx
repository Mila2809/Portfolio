import Link from "next/link";
import About from "@/components/main/aboute";
import Skills from "@/components/main/skills";
import Projects from "@/components/main/projects";
import Contact from "@/components/main/contact";
import Header from "@/components/header/header";
import { createTable } from "@/mail";

export default async function Home() {
    await createTable();
    return (
        <div className="w-full h-screen flex flex-col items-center">
            <div className=" flex fixed  z-50 mt-4 w-72 justify-around md:mt-8 font-bold text-gris md:text-2xl md:w-[600px]">
                <Link href="#about" className="hover:text-pink-400">
                    About me
                </Link>
                <Link href="#projects" className="hover:text-pink-400">
                    Projects
                </Link>
                <Link href="#contact" className="hover:text-pink-400">
                    Contact
                </Link>
            </div>
            <Header></Header>

            <main className="z-10 pt-20 flex w-[90%] h-full flex-col text-white">
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Contact></Contact>
            </main>

            <div className="bg-white md:p-5 p-3 w-full h-full fixed pointer-events-none z-0">
                <div className="bg-gris w-full h-full rounded-[25px] flex justify-center relative bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] leading-relaxed"></div>
            </div>
        </div>
    );
}
