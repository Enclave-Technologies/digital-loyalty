import Link from "next/link";
import React from "react";
import {
    Card,
    // CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const ClickableCard = ({ className, href, description }: ClickableProp) => {
    return (
        <Link href={href}>
            <Card
                className={cn(
                    "flex flex-col items-center justify-center dark:text-blue-300 text-blue-500",
                    className
                )}
            >
                <CardHeader>
                    <CardTitle>
                        <Plus className="w-24 h-24" />
                    </CardTitle>
                </CardHeader>
                <hr className="w-full" />
                <CardDescription className="p-2 dark:text-blue-300 text-blue-500">
                    {description}
                </CardDescription>
            </Card>
        </Link>
    );
};

export default ClickableCard;
