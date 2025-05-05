import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";

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
            <header className="flex justify-end items-center p-4 gap-4 h-16">
                <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </header>
            {children}
            <Toaster />
        </div>
    );
}
