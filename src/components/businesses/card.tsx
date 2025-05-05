import {
    Card,
    // CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export async function BusinessCard({ className, uid, name }: BusinessCardProp) {
    return (
        <Card className={cn("", className)}>
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>Business ID: {uid}</CardDescription>
            </CardHeader>
            {/* <CardContent>
                <p>Card Content</p>
            </CardContent> */}
            <hr />
            <Link href={`/dashboard/${uid}`}>
                <CardFooter className="p-2">
                    <p>Manage Business</p>
                </CardFooter>
            </Link>
        </Card>
    );
}
