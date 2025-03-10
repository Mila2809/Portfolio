import { sendMail } from "@/mail";
import localFont from "next/font/local";

const octuple_max = localFont({
    src: "../../app/assets/fonts/Octuple-max-demo.ttf",
});

const Contact = () => {
    return (
        <section
            id="contact"
            className=" justify-center items-center flex flex-col"
        >
            <div className="md:h-[700px] mt-40 w-96 md:w-[900px] justify-center items-center flex flex-col">
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
                    <form
                        action={sendMail}
                        className="md:w-[750px] flex flex-col justify-center items-center relative"
                    >
                        <input
                            maxLength={50}
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="md:p-3 px-2 py-1 mb-2 md:mb-5 bg-gris w-80 border-2 rounded-lg md:border-4 md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 md:w-full"
                        />
                        <input
                            maxLength={50}
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="md:p-3 px-2 py-1 mb-2 md:mb-5 bg-gris w-80 border-2 rounded-lg md:border-4 md:rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-400 md:w-full"
                        />
                        <div className="flex justify-start items-start">
                            <textarea
                                name="message"
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
                            <button
                                type="submit"
                                className="absolute text-sm mt-[65px] ml-[275px] md:mt-[156px] z-20 md:ml-[652px] bg-pink-300 hover:bg-pink-400 md:px-6 px-1 py-1 md:py-4 md:font-bold md:text-2xl rounded-md md:rounded-lg transition-colors"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
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
    );
};

export default Contact;
