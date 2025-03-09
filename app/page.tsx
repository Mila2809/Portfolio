import Link from "next/link";
import localFont from "next/font/local";

const octuple_max = localFont({ src: "./assets/fonts/Octuple-max-demo.ttf" });

export default function Home() {
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
            <header className="w-full h-full fixed flex justify-center pointer-events-none z-20">
                <svg
                    className="fixed md:mt-0 -mt-5"
                    width="100%"
                    height="90"
                    viewBox="0 0 898 90"
                    preserveAspectRatio="xMidYMid meet"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 9.3921C1 3.6527 5.6527 -1 11.3921 -1H887.108C892.847 -1 897.5 3.6527 897.5 9.3921C897.5 15.1315 892.847 19.7842 887.108 19.7842H810.155C800.182 19.7842 790.84 24.6593 785.136 32.8395L755.003 76.0558C749.486 83.9678 740.45 88.683 730.804 88.683H169.698C160.053 88.683 151.017 83.968 145.5 76.0565L115.364 32.8388C109.66 24.659 100.318 19.7842 90.3459 19.7842H11.3921C5.6527 19.7842 1 15.1315 1 9.3921Z"
                        fill="white"
                        stroke="white"
                    />
                </svg>
                <div className="relative md:border-[20px] border-[10px] pointer-events-none border-white text-black flex justify-center w-full"></div>
            </header>

            <main className="z-10 mt-20 flex w-[90%] h-full flex-col text-white">
                <section
                    id="about"
                    className="md:my-16 transition-all duration-1000 delay-300"
                >
                    <h1
                        className={`${octuple_max.className} text-wrap text-5xl md:text-9xl`}
                    >
                        Mila PAOUNOV
                    </h1>
                    <p className="text-xl md:text-3xl mt-2">
                        Web Dev Student Full Stack
                    </p>
                    <blockquote className="text-end text-xl md:text-2xl mt-16 md:mt-32 mb-8 border-l-4 rounded-xl border-pink-300 pl-6">
                        "Passionate about front-end development, I'm a Full
                        Stack Web Development student working to master back-end
                        technologies and build complete, functional web
                        solutions."
                    </blockquote>
                    <div className="w-full py-4 px-5 rounded-2xl border-white border-2 md:border-4 bg-gris shadow-xl">
                        <h2 className="text-2xl font-bold mb-4">About me</h2>
                        <hr className="border-none h-[2px] md:h-1 bg-white -ml-5 md:-ml-6 w-44 mb-4 rounded-lg" />
                        <p className="leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </section>
                <section
                    id="skills"
                    className="my-16 transition-all duration-1000 delay-400"
                >
                    <h2 className="text-4xl mb-8">Mes Compétences</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gray-800/70 rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-1 group">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-pink-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                Frontend
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm">HTML</span>
                                        <span className="text-sm text-pink-400">
                                            90%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse"
                                            style={{ width: "90%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm">CSS</span>
                                        <span className="text-sm text-pink-400">
                                            85%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse"
                                            style={{ width: "85%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm">
                                            JavaScript
                                        </span>
                                        <span className="text-sm text-pink-400">
                                            75%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse"
                                            style={{ width: "75%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-1 group">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-pink-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                                Styling & Design
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm">SCSS</span>
                                        <span className="text-sm text-pink-400">
                                            80%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse"
                                            style={{ width: "80%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm">
                                            Tailwind
                                        </span>
                                        <span className="text-sm text-pink-400">
                                            85%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse"
                                            style={{ width: "85%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm">Figma</span>
                                        <span className="text-sm text-pink-400">
                                            70%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse"
                                            style={{ width: "70%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/70 rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-pink-500/30 transition-all hover:-translate-y-1 group">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2 text-pink-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                    />
                                </svg>
                                Backend & Tools
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm">PHP</span>
                                        <span className="text-sm text-pink-400">
                                            65%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse"
                                            style={{ width: "65%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm">
                                            Illustrator
                                        </span>
                                        <span className="text-sm text-pink-400">
                                            60%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse"
                                            style={{ width: "60%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm">GitHub</span>
                                        <span className="text-sm text-pink-400">
                                            75%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:animate-pulse"
                                            style={{ width: "75%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-6">
                        {[
                            "HTML",
                            "CSS",
                            "JavaScript",
                            "SCSS",
                            "Tailwind",
                            "PHP",
                            "Illustrator",
                            "Figma",
                            "GitHub",
                        ].map((skill) => (
                            <div
                                key={skill}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-800/70 border border-white/20 flex items-center justify-center hover:border-pink-400 transition-all hover:scale-110 cursor-pointer">
                                    <span className="text-2xl text-pink-400 group-hover:animate-bounce">
                                        {skill.charAt(0)}
                                    </span>
                                </div>
                                <span className="mt-2 text-sm">{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>
                {/* <section
                    id="projects"
                    className="my-16 transition-all duration-1000 delay-500"
                >
                    <h2 className="text-4xl mb-8">Mes Projets</h2>
                    <div className="w-full flex flex-row items-center justify-center">
                        <button className="">
                            <svg
                                width="79"
                                height="38"
                                viewBox="0 0 79 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M76.4427 34.7607C77.4781 36.0723 76.5439 38 74.8729 38H50.9692C50.3571 38 49.7787 37.7197 49.3994 37.2393L35.9784 20.2393C35.4047 19.5127 35.4047 18.4873 35.9784 17.7607L49.3994 0.760712C49.7787 0.280289 50.3571 0 50.9692 0H74.8729C76.5439 0 77.4781 1.92774 76.4427 3.23929L64.9784 17.7607C64.4047 18.4873 64.4047 19.5127 64.9784 20.2393L76.4427 34.7607Z"
                                    fill="white"
                                />
                                <path
                                    d="M39.4427 34.7607C40.4781 36.0723 39.5439 38 37.8729 38H30.9692C30.3571 38 29.7787 37.7197 29.3994 37.2393L15.9784 20.2393C15.4047 19.5127 15.4047 18.4873 15.9784 17.7607L29.3994 0.760712C29.7787 0.280289 30.3571 0 30.9692 0H37.8729C39.5439 0 40.4781 1.92773 39.4427 3.23929L27.9784 17.7607C27.4047 18.4873 27.4047 19.5127 27.9784 20.2393L39.4427 34.7607Z"
                                    fill="white"
                                />
                                <path
                                    d="M19.4427 34.7607C20.4781 36.0723 19.5439 38 17.8729 38H15.9692C15.3571 38 14.7787 37.7197 14.3994 37.2393L0.978384 20.2393C0.404739 19.5127 0.404739 18.4873 0.978386 17.7607L14.3994 0.760712C14.7787 0.280289 15.3571 0 15.9692 0H17.8729C19.5439 0 20.4781 1.92774 19.4427 3.23929L7.97838 17.7607C7.40474 18.4873 7.40474 19.5127 7.97839 20.2393L19.4427 34.7607Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                        <img
                            className="relative w-[950px] h-[550px]"
                            src="./S.png"
                            alt=""
                        />
                        <svg
                            className="absolute h-[600px]"
                            width="987"
                            height="589"
                            viewBox="0 0 987 589"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 0H986.5V589H0L28.5 556L45 568H232.5H424L466.5 537.5H526L567.5 568H945.5L963 552V464.5L956 453L939 443L929 428.5V193L961.5 164.5V105.5L945 91.5H365.5L351 84.5L298 28.5L288 21.5H47.5L35 28L26.5 39V294.5L37.5 306L50.5 312L61.5 328V478.5L48.5 495.5L28.5 509.5L25.5 532L28.5 556L0 589V0Z"
                                fill="#2F2F2F"
                            />
                            <path
                                d="M416.445 568.5H53C37.8122 568.5 25.5 556.188 25.5 541V521.889C25.5 511.636 31.9768 502.502 41.6522 499.109C53.3317 495.014 61.15 483.988 61.15 471.611V333.513C61.15 321.445 53.1194 310.852 41.5002 307.593C32.0391 304.939 25.5 296.313 25.5 286.487V49C25.5 33.8122 37.8122 21.5 53 21.5H189.5H279.832C287.525 21.5 294.866 24.7221 300.074 30.3841L345.246 79.5006C351.401 86.1921 360.076 90 369.168 90H484H936C951.188 90 963.5 102.312 963.5 117.5V152.757C963.5 163.375 957.068 172.934 947.233 176.934C935.514 181.701 927.85 193.091 927.85 205.743V417.307C927.85 429.703 934.901 441.019 946.029 446.481L948.118 447.507C957.534 452.129 963.5 461.704 963.5 472.193V541C963.5 556.188 951.188 568.5 936 568.5H575.736C569.178 568.5 562.836 566.156 557.854 561.892L537.898 544.81C532.01 539.77 524.514 537 516.764 537H474.805C466.879 537 459.225 539.897 453.285 545.145L434.654 561.608C429.628 566.049 423.152 568.5 416.445 568.5Z"
                                stroke="white"
                                strokeWidth="5"
                            />
                            <path
                                d="M318.562 27.018C316.81 25.0909 318.177 22 320.782 22H659.673C660.518 22 661.324 22.3566 661.893 22.982L706.438 71.982C708.19 73.9091 706.823 77 704.218 77H365.327C364.482 77 363.676 76.6434 363.107 76.018L318.562 27.018Z"
                                fill="#F69FCB"
                            />
                            <path
                                d="M675.562 27.018C673.81 25.0909 675.177 22 677.782 22H715.673C716.518 22 717.324 22.3566 717.893 22.982L762.438 71.982C764.19 73.9091 762.823 77 760.218 77H722.327C721.482 77 720.676 76.6434 720.107 76.018L675.562 27.018Z"
                                fill="#F69FCB"
                            />
                            <path
                                d="M731.562 27.018C729.81 25.0909 731.177 22 733.782 22H756.673C757.518 22 758.324 22.3566 758.893 22.982L803.438 71.982C805.19 73.9091 803.823 77 801.218 77H778.327C777.482 77 776.676 76.6434 776.107 76.018L731.562 27.018Z"
                                fill="#F69FCB"
                            />
                        </svg>
                        <button>
                            <svg
                                width="79"
                                height="38"
                                viewBox="0 0 79 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.55733 3.23929C1.52189 1.92773 2.45608 0 4.1271 0H28.0308C28.6429 0 29.2213 0.28029 29.6006 0.760711L43.0216 17.7607C43.5953 18.4873 43.5953 19.5127 43.0216 20.2393L29.6006 37.2393C29.2213 37.7197 28.6429 38 28.0308 38H4.1271C2.45608 38 1.5219 36.0723 2.55733 34.7607L14.0216 20.2393C14.5953 19.5127 14.5953 18.4873 14.0216 17.7607L2.55733 3.23929Z"
                                    fill="white"
                                />
                                <path
                                    d="M39.5573 3.23929C38.5219 1.92773 39.4561 0 41.1271 0H48.0308C48.6429 0 49.2213 0.28029 49.6006 0.760711L63.0216 17.7607C63.5953 18.4873 63.5953 19.5127 63.0216 20.2393L49.6006 37.2393C49.2213 37.7197 48.6429 38 48.0308 38H41.1271C39.4561 38 38.5219 36.0723 39.5573 34.7607L51.0216 20.2393C51.5953 19.5127 51.5953 18.4873 51.0216 17.7607L39.5573 3.23929Z"
                                    fill="white"
                                />
                                <path
                                    d="M59.5573 3.23929C58.5219 1.92773 59.4561 0 61.1271 0H63.0308C63.6429 0 64.2213 0.28029 64.6006 0.760711L78.0216 17.7607C78.5953 18.4873 78.5953 19.5127 78.0216 20.2393L64.6006 37.2393C64.2213 37.7197 63.6429 38 63.0308 38H61.1271C59.4561 38 58.5219 36.0723 59.5573 34.7607L71.0216 20.2393C71.5953 19.5127 71.5953 18.4873 71.0216 17.7607L59.5573 3.23929Z"
                                    fill="white"
                                />
                            </svg>
                        </button>
                    </div>
                </section> */}
                <section
                    id="contact"
                    className=" justify-center items-center flex flex-col"
                >
                    <div className="md:h-[700px] mt-16 w-96 md:w-[900px] justify-center items-center flex flex-col">
                        <svg
                            className="w-[375px] md:w-[900px]"
                            viewBox="0 0 943 532"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M393.445 529.5H30C14.8122 529.5 2.5 517.188 2.5 502V482.889C2.5 472.636 8.97677 463.502 18.6522 460.109C30.3317 456.014 38.15 444.988 38.15 432.611V294.513C38.15 282.445 30.1194 271.852 18.5002 268.593C9.03909 265.939 2.5 257.313 2.5 247.487V30C2.5 14.8122 14.8122 2.5 30 2.5H263.517C269.57 2.5 275.455 4.49728 280.257 8.18211L283.649 10.7848C289.325 15.1396 296.279 17.5 303.433 17.5H426.817C433.971 17.5 440.925 15.1396 446.601 10.7848L449.993 8.18212C454.795 4.49728 460.68 2.5 466.733 2.5H913C928.188 2.5 940.5 14.8122 940.5 30V113.757C940.5 124.375 934.068 133.934 924.233 137.934C912.514 142.701 904.85 154.091 904.85 166.743V378.307C904.85 390.703 911.901 402.019 923.029 407.481L925.118 408.507C934.534 413.129 940.5 422.704 940.5 433.193V502C940.5 517.188 928.188 529.5 913 529.5H552.736C546.178 529.5 539.836 527.156 534.854 522.892L514.898 505.81C509.01 500.77 501.514 498 493.764 498H451.805C443.879 498 436.225 500.897 430.285 506.145L411.654 522.608C406.628 527.049 400.152 529.5 393.445 529.5Z"
                                fill="#2F2F2F"
                                stroke="white"
                                strokeWidth="4"
                            />
                        </svg>
                        <div className="md:w-[900px] md:mb-0 mb-14 w-96 absolute justify-center items-center flex flex-col">
                            <p
                                className={`${octuple_max.className} md:mb-3 mb-8 text-2xl md:text-6xl`}
                            >
                                Contact me
                            </p>
                            <div className="md:w-[750px] flex flex-col justify-center items-center relative">
                                <input
                                    maxLength={50}
                                    type="text"
                                    placeholder="Name"
                                    className="md:p-3 px-2 py-1 mb-2 md:mb-5 bg-gris w-80 border-2 rounded-lg md:border-4 md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 md:w-full"
                                />
                                <input
                                    maxLength={50}
                                    type="email"
                                    placeholder="Email"
                                    className="md:p-3 px-2 py-1 mb-2 md:mb-5 bg-gris w-80 border-2 rounded-lg md:border-4 md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 md:w-full"
                                />
                                <div className="flex justify-start items-start">
                                    <textarea
                                        maxLength={300}
                                        placeholder="Message"
                                        className="absolute resize-none w-80 focus:outline-none text-start z-20 md:p-3 px-2 py-1 bg-transparent md:w-full md:h-32 "
                                    />
                                    <svg
                                        className="relative md:w-[750px] w-80 z-10 focus:ring-2 focus:ring-pink-400"
                                        viewBox="0 0 774 215"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M20 2.5H754C763.665 2.5 771.5 10.335 771.5 20V118.5C771.5 128.165 763.665 136 754 136H668.5C656.074 136 646 146.074 646 158.5V195C646 204.665 638.165 212.5 628.5 212.5H500.898C496.721 212.5 492.681 211.006 489.51 208.287L455.244 178.917C451.166 175.421 445.973 173.5 440.602 173.5H337.932C332.88 173.5 327.976 175.2 324.008 178.326L285.398 208.746C282.312 211.178 278.497 212.5 274.568 212.5H20C10.335 212.5 2.5 204.665 2.5 195V20C2.5 10.335 10.335 2.5 20 2.5Z"
                                            stroke="white"
                                            strokeWidth="4"
                                        />
                                    </svg>
                                    <button className="absolute text-sm mt-[65px] ml-[275px] md:mt-[156px] z-20 md:ml-[652px] bg-pink-300 hover:bg-pink-400 md:px-6 px-1 py-1 md:py-4 md:font-bold md:text-2xl rounded-md md:rounded-lg transition-colors">
                                        Envoyer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg
                        className="md:-mt-20 -mt-7 w-7 md:w-40 md:mb-20"
                        width="60"
                        height="110"
                        viewBox="0 0 60 110"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="30"
                            cy="30"
                            r="30"
                            transform="rotate(90 30 30)"
                            fill="white"
                        />
                        <path
                            d="M60 30L60 84C60 86.7614 57.7614 89 55 89H6C2.68629 89 0 86.3137 0 83L0 30L60 30Z"
                            fill="white"
                        />
                        <rect
                            x="24"
                            y="80"
                            width="30"
                            height="12"
                            rx="6"
                            transform="rotate(90 24 80)"
                            fill="#2F2F2F"
                        />
                        <rect
                            x="48"
                            y="80"
                            width="30"
                            height="12"
                            rx="6"
                            transform="rotate(90 48 80)"
                            fill="#2F2F2F"
                        />
                        <rect
                            x="36"
                            y="64"
                            width="34"
                            height="12"
                            rx="6"
                            transform="rotate(90 36 64)"
                            fill="white"
                        />
                        <rect
                            x="60"
                            y="64"
                            width="34"
                            height="12"
                            rx="6"
                            transform="rotate(90 60 64)"
                            fill="white"
                        />
                        <rect
                            x="12"
                            y="64"
                            width="34"
                            height="12"
                            rx="6"
                            transform="rotate(90 12 64)"
                            fill="white"
                        />
                        <rect
                            x="35"
                            y="54"
                            width="10"
                            height="10"
                            rx="5"
                            transform="rotate(90 35 54)"
                            fill="#2F2F2F"
                        />
                        <rect
                            x="46"
                            y="25"
                            width="18"
                            height="10"
                            rx="5"
                            transform="rotate(90 46 25)"
                            fill="#2F2F2F"
                        />
                        <rect
                            x="23"
                            y="25"
                            width="18"
                            height="10"
                            rx="5"
                            transform="rotate(90 23 25)"
                            fill="#2F2F2F"
                        />
                    </svg>
                </section>
            </main>

            <footer className="w-full"></footer>
            <div className="bg-white md:p-5 p-3 w-full h-full fixed pointer-events-none z-0">
                <div className="bg-gris w-full h-full rounded-[25px] flex justify-center relative bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] leading-relaxed"></div>
            </div>
        </div>
    );
}
