import type { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import { ConvexClientProvider } from "@/providers/ConvexClientProviders";
import {
    ClerkProvider,
    // SignInButton,
    // SignUpButton,
    // SignedIn,
    // SignedOut,
    // UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "NBHD",
    description: "The next gen loyalty program for your business.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning className="h-full">
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-screen-2xl mx-auto`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <main className="flex flex-col min-h-screen">
                            <div className="flex-grow flex-1">
                                <ConvexClientProvider>
                                    {children}
                                </ConvexClientProvider>
                            </div>
                        </main>
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
