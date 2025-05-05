import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
    title: "NBHD Authentication",
    description: "Authentication for next generation loyalty programs",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={` antialiased`}>
            {children}
            <Toaster />
        </div>
    );
}
