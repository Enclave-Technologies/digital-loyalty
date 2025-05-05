import { SignInButton, UserButton } from "@clerk/clerk-react";
import {
    Authenticated,
    Unauthenticated,
    AuthLoading,
    useQuery,
} from "convex/react";

export function AuthProvider({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <main className={className}>
            <Unauthenticated>
                <SignInButton />
            </Unauthenticated>
            <Authenticated>
                <UserButton />
                {children}
            </Authenticated>
            <AuthLoading>
                <p>Still loading</p>
            </AuthLoading>
        </main>
    );
}
