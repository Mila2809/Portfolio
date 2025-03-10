import localFont from "next/font/local";

const octuple_max = localFont({
    src: "../../app/assets/fonts/Octuple-max-demo.ttf",
});
const About = () => {
    return (
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
            <blockquote className="text-end text-xl md:text-2xl mt-16 md:mt-32 mb-28 border-l-4 rounded-xl border-pink-300 pl-6">
                "Passionate about front-end development, I'm a Full Stack Web
                Development student working to master back-end technologies and
                build complete, functional web solutions."
            </blockquote>
            <div className="w-full py-4 px-5 rounded-2xl border-white border-2 md:border-4 bg-gris shadow-xl">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-2xl font-bold mb-4">About me</h2>{" "}
                    <div className="flex flex-row justify-between">
                        <a
                            href="https://github.com/Mila2809"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex mr-5 items-center text-white hover:text-pink-300 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mila-paounov-759935291/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-white hover:text-pink-300 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <hr className="border-none h-[2px] md:h-1 bg-white -ml-5 md:-ml-6 w-44 mb-4 rounded-lg" />
                <p className="leading-relaxed">
                    I am a full-stack development student passionate about
                    creating innovative and accessible digital solutions. With a
                    strong background in web development, UX/UI design, and
                    client collaboration, I also have experience in project
                    management. Currently looking for a three-month internship
                    starting in April, I am eager to take on technical
                    challenges and continuously enhance my skills through
                    learning. Motivated and enthusiastic, I enjoy working in a
                    team and finding creative solutions to complex problems.
                </p>
            </div>
        </section>
    );
};

export default About;
