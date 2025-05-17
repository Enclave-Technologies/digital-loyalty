"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import type { SerializableUser } from "@/lib/auth";

export default function OnboardingForm({
    userData,
}: {
    userData: SerializableUser;
}) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: userData.fullName || "",
        phoneNumber: "",
        location: "",
        bio: "",
    });

    const createUser = useMutation(api.users.createUser);
    const updateOnboarding = useMutation(api.users.updateOnboardingStatus);
    const existingUser = useQuery(api.users.getUserByClerkId, {
        clerkId: userData.id,
    });
    const updateUser = useMutation(api.users.updateUser);

    // If user has completed onboarding, redirect to dashboard
    if (existingUser?.onboardingComplete) {
        router.push("/dashboard");
        return null;
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Create or update user
        const userId = await createUser({
            clerkId: userData.id,
            fullName: formData.fullName,
            email: userData.email || "",
            phoneNumber: formData.phoneNumber,
            profilePictureUrl: userData.imageUrl || undefined,
            location: formData.location || undefined,
        });

        // If bio was provided, update the user
        if (formData.bio) {
            await updateUser({
                userId,
                bio: formData.bio,
            });
        }

        // Mark onboarding as complete
        await updateOnboarding({ userId, completed: true });

        // Redirect to business creation
        router.push("/business-onboarding/edit");
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Complete Your Profile</CardTitle>
                    <CardDescription>
                        Tell us a bit about yourself to get started
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullName">
                                Full Name{" "}
                                <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="focus:ring-2 focus:ring-destructive focus:ring-offset-1"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                defaultValue={userData.email || ""}
                                disabled
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phoneNumber">
                                Phone Number{" "}
                                <span className="text-destructive">*</span>
                            </Label>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                                className="focus:ring-2 focus:ring-destructive focus:ring-offset-1"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                placeholder="City, Country"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                placeholder="Tell us a bit about yourself"
                                rows={3}
                            />
                        </div>

                        <p className="text-xs text-muted-foreground mt-2">
                            <span className="text-destructive">*</span> Required
                            fields
                        </p>

                        <Button type="submit" className="w-full">
                            Continue to Business Setup
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
