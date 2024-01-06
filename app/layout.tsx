import { ThemeProvider } from "@/components/ui/theme-provider";
import "@radix-ui/themes/styles.css";
import { ReactNode } from "react";
import "./globals.css";
import { Toaster } from "sonner";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={`${font.className} `}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        storageKey="admin-theme"
      >
        <body
          suppressHydrationWarning
          className="  min-h-screen dark:bg-[url(/assets/magicdark.svg)] transition-all 
        p-6 pb-0 bg-cover bg-no-repeat   bg-[url(/assets/light-bg.svg)] pt-[calc(100px_+_2rem)]  dark:bg-transparent bg-[#3e3e3efc]
        
      "
        >
          <Toaster richColors position="top-center" />

          {children}

        </body>
      </ThemeProvider>
    </html>
  );
}
