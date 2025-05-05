import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
    return (
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                Launch your digital loyalty program in{" "}
                <span className="text-primary">10 minutes!</span>
            </h1>
            <p className="mt-6 text-lg max-w-prose text-muted-foreground">
                Welcome to Neighbourhood. Your gateway to customer insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link href="/register" className={`${buttonVariants()}`}>
                    Signup
                </Link>
                <Link
                    href="/login"
                    className={`${buttonVariants({ variant: "outline" })}`}
                >
                    Sign in
                </Link>
            </div>
            {/* TODO : Product showcase */}
        </div>
    );
}
