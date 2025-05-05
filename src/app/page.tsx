import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/theme-switcher";
import { Gift } from "lucide-react";

export default async function Home() {
    return (
        <>
            {/* Navbar */}
            <nav className="border-b py-4 px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Gift className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl">Perkz</span>
                </div>
                <div className="flex items-center gap-4">

                    <ModeToggle />
                </div>
            </nav>
            {/* Hero Section */}
            <div className="py-20 mx-auto text-center flex flex-col items-center max-w-5xl">
                {/* Hero Section */}
                <div className="flex flex-col items-center mb-12">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                        Reward your customers with{" "}
                        <span className="text-primary">Perkz</span>
                    </h1>
                    <p className="mt-6 text-xl max-w-2xl text-muted-foreground">
                        Launch your digital loyalty program in minutes, not
                        months. Boost retention and turn customers into
                        advocates.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Link
                            href="/register"
                            className={`${buttonVariants({ size: "lg" })}`}
                        >
                            Start for free
                        </Link>
                        <Link
                            href="/login"
                            className={`${buttonVariants({ variant: "outline", size: "lg" })}`}
                        >
                            Sign in
                        </Link>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16">
                    <div className="flex flex-col items-center p-6 rounded-xl bg-muted/50">
                        <div className="rounded-full bg-primary/10 p-4 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary h-6 w-6"
                            >
                                <path d="M12 8c-2.8 0-5 2.2-5 5 0 2.3 1.5 4.3 3.6 4.8.6.2 1.4.2 1.9 0 2.2-.5 3.6-2.5 3.6-4.8 0-2.8-2.2-5-5-5z"></path>
                                <path d="m15 5-2-3-2 3"></path>
                                <path d="m15 19-2 3-2-3"></path>
                                <path d="M19 12h3"></path>
                                <path d="M2 12h3"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Easy Setup
                        </h3>
                        <p className="text-center text-muted-foreground">
                            Get your loyalty program up and running in just 10
                            minutes with our intuitive dashboard.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-xl bg-muted/50">
                        <div className="rounded-full bg-primary/10 p-4 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary h-6 w-6"
                            >
                                <path d="M3 3v18h18"></path>
                                <path d="m19 9-5 5-4-4-3 3"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Customer Insights
                        </h3>
                        <p className="text-center text-muted-foreground">
                            Gain valuable data on customer behavior and
                            preferences to optimize your business.
                        </p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-xl bg-muted/50">
                        <div className="rounded-full bg-primary/10 p-4 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary h-6 w-6"
                            >
                                <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.95 1 4.8a.2.2 0 0 1-.2.2H2"></path>
                                <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"></path>
                                <path d="M17 15a3.5 3.5 0 0 0-.025-4.975"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                            Boost Retention
                        </h3>
                        <p className="text-center text-muted-foreground">
                            Increase repeat visits and customer lifetime value
                            with personalized rewards.
                        </p>
                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="mt-20 bg-muted/30 p-8 rounded-2xl w-full">
                    <h2 className="text-3xl font-bold mb-8">
                        Trusted by businesses like yours
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <div className="bg-background p-6 rounded-xl shadow-sm max-w-md">
                            <p className="italic mb-4">
                                Perkz helped us increase customer retention by
                                40% in just three months. The platform is
                                incredibly easy to use.
                            </p>
                            <p className="font-semibold">
                                — Sarah Johnson, Cafe Owner
                            </p>
                        </div>
                        <div className="bg-background p-6 rounded-xl shadow-sm max-w-md">
                            <p className="italic mb-4">
                                Our customers love collecting points and
                                redeeming rewards. It&quot;s been a game-changer
                                for our business.
                            </p>
                            <p className="font-semibold">
                                — Michael Chen, Retail Manager
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 mb-10">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to grow your business?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join thousands of businesses using Perkz to boost
                        customer loyalty
                    </p>
                    <Link
                        href="/register"
                        className={`${buttonVariants({ size: "lg" })}`}
                    >
                        Get started today
                    </Link>
                </div>
            </div>
        </>
    );
}
