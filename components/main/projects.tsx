import Image from "next/image";

const Projects = () => {
    return (
        <section
            id="projects"
            className="my-8 md:my-16 transition-all duration-1000 delay-500 px-4"
        >
            <div className="flex flex-col lg:flex-row justify-center mb-16 md:mb-24 lg:mb-32 max-w-7xl mx-auto">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                    <div className="flex flex-col space-y-4">
                        <Image
                            className="p-2 md:p-3 w-full rounded-xl md:rounded-3xl object-cover h-32 md:h-48"
                            src="./TP-2.png"
                            alt="Todo List Preview 1"
                        />
                        <Image
                            className="p-2 md:p-3 w-full rounded-xl md:rounded-3xl object-cover h-64 md:h-96"
                            src="./TP-1.png"
                            alt="Todo List Preview 2"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="p-2 md:p-3 flex flex-col justify-between h-32 md:h-48 mb-36 md:mb-4">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-2xl md:text-4xl font-bold">
                                TO DO LIST
                            </p>
                            <svg
                                className="w-36 md:w-48 lg:w-64 h-auto"
                                viewBox="0 0 302 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="82"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="white"
                                />
                                <rect
                                    x="172"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="#CD6161"
                                />
                                <rect
                                    x="262"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="#3D2A48"
                                />
                                <rect
                                    x="127"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="#DBD0D5"
                                />
                                <rect
                                    x="217"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="#602B45"
                                />
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="18.5"
                                    stroke="white"
                                    strokeWidth="3"
                                />
                                <circle
                                    cx="37"
                                    cy="20"
                                    r="18.5"
                                    fill="#2F2F2F"
                                    stroke="white"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M44 22.2321C45.3333 21.4623 45.3333 19.5378 44 18.7679L35.75 14.0048C34.4167 13.235 32.75 14.1973 32.75 15.7369V25.2631C32.75 26.8027 34.4167 27.765 35.75 26.9952L44 22.2321Z"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                        <p className="text-justify text-sm md:text-base mt-2">
                            This project is a task management application
                            developed in TypeScript. Designed to be simple and
                            intuitive, it allows users to add, edit, delete, and
                            mark tasks as completed, helping them stay organized
                            and productive. The application features a clean,
                            user-friendly interface for a seamless task
                            management experience. Built with efficiency and
                            responsiveness in mind, it is a reliable tool for
                            tracking daily tasks.
                        </p>
                    </div>
                    <Image
                        className="p-2 md:p-3 w-full rounded-xl md:rounded-3xl object-cover h-64 md:h-96"
                        src="./TP-3.png"
                        alt="Todo List Preview 3"
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center max-w-7xl mx-auto">
                <div className="w-full lg:w-1/2 order-2 lg:order-1 mt-6 lg:mt-0">
                    <Image
                        className="p-2 md:p-3 w-full rounded-xl md:rounded-3xl object-cover h-64 md:h-96 mb-4"
                        src="./P-3.png"
                        alt="Harry Potter Exchange Preview 1"
                    />
                    <div className="p-2 md:p-3 flex flex-col justify-between h-32 md:h-48">
                        <div className="flex flex-row justify-between items-center">
                            <p className="text-xl md:text-3xl lg:text-4xl font-bold">
                                HARRY POTTER EXCHANGE CARD
                            </p>
                            <svg
                                width="302"
                                height="40"
                                viewBox="0 0 302 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="82"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="white"
                                />
                                <rect
                                    x="172"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="#839FCD"
                                />
                                <rect
                                    x="262"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="#2D4757"
                                />
                                <rect
                                    x="127"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="#95BE92"
                                />
                                <rect
                                    x="217"
                                    width="40"
                                    height="40"
                                    rx="5"
                                    fill="#617C94"
                                />
                                <circle
                                    cx="20"
                                    cy="20"
                                    r="18.5"
                                    stroke="white"
                                    strokeWidth="3"
                                />
                                <circle
                                    cx="37"
                                    cy="20"
                                    r="18.5"
                                    fill="#2F2F2F"
                                    stroke="white"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M44 22.2321C45.3333 21.4623 45.3333 19.5378 44 18.7679L35.75 14.0048C34.4167 13.235 32.75 14.1973 32.75 15.7369V25.2631C32.75 26.8027 34.4167 27.765 35.75 26.9952L44 22.2321Z"
                                    stroke="white"
                                    strokeWidth="2"
                                />
                            </svg>
                        </div>
                        <p className="text-justify text-sm md:text-base mt-2">
                            Step into the magical world of Harry Potter with
                            this card exchange platform! This website allows
                            fans to collect, trade, and open booster packs
                            filled with unique wizarding cards. Whether
                            you&apos;re looking to complete your collection or
                            swap rare cards with other enthusiasts, this
                            platform offers a fun and interactive experience.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <Image
                        className="p-2 md:p-3 w-full rounded-xl md:rounded-3xl object-cover h-40 md:h-48 mb-4"
                        src="./P-2.png"
                        alt="Harry Potter Exchange Preview 2"
                    />
                    <div className="flex flex-row w-full h-auto">
                        <div className="w-1/3 pr-2">
                            <Image
                                className="p-2 md:p-3 w-full h-full rounded-xl md:rounded-3xl object-cover"
                                src="./P-4.png"
                                alt="Harry Potter Exchange Preview 3"
                            />
                        </div>
                        <div className="w-2/3 pl-2">
                            <Image
                                className="p-2 md:p-3 w-full h-full rounded-xl md:rounded-3xl object-cover"
                                src="./P-1.png"
                                alt="Harry Potter Exchange Preview 4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
