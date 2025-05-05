"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Image from "next/image";
import Link from "next/link";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SignUpError {
    errors?: { message: string }[];
}

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const { signUp, isLoaded, setActive } = useSignUp();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isLoaded) return;

        try {
            setIsLoading(true);
            setError("");

            const result = await signUp.create({
                firstName,
                lastName,
                emailAddress: email,
                password,
            });

            // Start the email verification process
            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });

            // If successful, redirect to verification page
            router.push("/verify-email");
        } catch (err) {
            console.error("Error during sign up:", err);

            const errorObj = err as SignUpError;
            const errorMessage =
                errorObj &&
                typeof errorObj === "object" &&
                "errors" in errorObj &&
                Array.isArray(errorObj.errors) &&
                errorObj.errors.length > 0
                    ? errorObj.errors[0].message
                    : "Failed to sign up. Please try again.";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form onSubmit={handleSubmit} className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">
                                    Create an account
                                </h1>
                                <p className="text-balance text-muted-foreground">
                                    Enter your information to get started
                                </p>
                            </div>
                            {error && (
                                <div className="bg-destructive/15 text-destructive text-sm p-3 rounded-md">
                                    {error}
                                </div>
                            )}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="firstName">
                                        First name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) =>
                                            setFirstName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input
                                        id="lastName"
                                        value={lastName}
                                        onChange={(e) =>
                                            setLastName(e.target.value)
                                        }
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <Button type="submit" disabled={isLoading}>
                                {isLoading
                                    ? "Creating account..."
                                    : "Create account"}
                            </Button>
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="text-primary hover:underline"
                                >
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div className="hidden md:block bg-muted">
                        <div className="relative w-full h-full min-h-[350px]">
                            <Image
                                src="/images/auth-image.jpg"
                                alt="Authentication"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
