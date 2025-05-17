import { requireAuth } from "@/lib/auth";
import OnboardingForm from "./OnboardingForm";

export default async function OnboardingPage() {
    const user = await requireAuth();

    return <OnboardingForm user={user} />;
}
