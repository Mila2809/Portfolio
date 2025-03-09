import type { Metadata } from "next";
import "./globals.css";
import { Paytone_One } from "next/font/google";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const octuple_max = localFont({
    src: [
        {
            path: "./assets/fonts/Octuple-max-demo.ttf",
            weight: "400",
            style: "normal",
        },
    ],
});

const paytone_one = Paytone_One({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${octuple_max.className} ${paytone_one.className} ${montserrat.className} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
