"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { User } from "@clerk/nextjs/server";

export default function OnboardingForm({ user }: { user: User }) {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const createUser = useMutation(api.users.createUser);
  const updateOnboarding = useMutation(api.users.updateOnboardingStatus);
  const existingUser = useQuery(api.users.getUserByClerkId, { 
    clerkId: user.id 
  });

  // If user has completed onboarding, redirect to dashboard
  if (existingUser?.onboardingComplete) {
    router.push("/dashboard");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create or update user
    const userId = await createUser({
      clerkId: user.id,
      fullName: user.fullName || "",
      email: user.primaryEmailAddress?.emailAddress || "",
      phoneNumber,
    });
    
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
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input 
                id="fullName" 
                defaultValue={user.fullName || ""} 
                disabled 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                defaultValue={user.primaryEmailAddress?.emailAddress || ""} 
                disabled 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input 
                id="phoneNumber" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                placeholder="Enter your phone number" 
                required 
              />
            </div>
            
            <Button type="submit" className="w-full">
              Continue to Business Setup
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}