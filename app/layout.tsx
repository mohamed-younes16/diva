import { ReactNode } from "react";
import "./globals.css";
import { Toaster } from "sonner";
import { Urbanist } from "next/font/google";
import NavBar from "@/components/NavBar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "DIVA design",
  description: "Diva design",
};
export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${font.className} `}>
      <body className="  min-h-screen text-white bg-[#1E1414] ">
        <Toaster richColors position="top-center" />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
