import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
    title: "Perkz",
    description: "",
};

export default function ProtectedLayout({
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
