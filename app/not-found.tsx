import Link from "next/link";
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

            <main className="z-10 flex h-full w-full justify-center items-center flex-col text-white">
                <p className=" text-9xl font-bold">404</p>
                <p className="text-3xl mb-5 mt-10 text-pink-300 font-bold">
                    Oops, page introuvable !
                </p>
                <p className="text-2xl md:w-[550px] w-[300px] text-center">
                    Si tu restes ici trop longtemps, tu risques de finir comme
                    lui... errant pour l&apos;éternité sur cette page 404 !
                </p>
                <svg
                    className="mt-10 w-80 md:w-11/12"
                    height="60"
                    viewBox="0 0 1138 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M109.991 27H1136.01"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="20 20"
                    />
                    <circle cx="30" cy="30" r="30" fill="white" />
                    <path
                        d="M30 0H84C86.7614 0 89 2.23858 89 5V54C89 57.3137 86.3137 60 83 60H30V0Z"
                        fill="white"
                    />
                    <rect
                        x="80"
                        y="36"
                        width="30"
                        height="12"
                        rx="6"
                        fill="#2F2F2F"
                    />
                    <rect
                        x="80"
                        y="12"
                        width="30"
                        height="12"
                        rx="6"
                        fill="#2F2F2F"
                    />
                    <rect
                        x="64"
                        y="24"
                        width="34"
                        height="12"
                        rx="6"
                        fill="white"
                    />
                    <rect x="64" width="34" height="12" rx="6" fill="white" />
                    <rect
                        x="64"
                        y="48"
                        width="34"
                        height="12"
                        rx="6"
                        fill="white"
                    />
                    <rect
                        x="54"
                        y="25"
                        width="10"
                        height="10"
                        rx="5"
                        fill="#2F2F2F"
                    />
                    <rect
                        x="25"
                        y="14"
                        width="18"
                        height="10"
                        rx="5"
                        fill="#2F2F2F"
                    />
                    <rect
                        x="25"
                        y="37"
                        width="18"
                        height="10"
                        rx="5"
                        fill="#2F2F2F"
                    />
                </svg>
            </main>

            <div className="bg-white md:p-5 p-3 w-full h-full fixed pointer-events-none z-0">
                <div className="bg-gris w-full h-full rounded-[25px] flex justify-center relative bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] leading-relaxed"></div>
            </div>
        </div>
    );
}
