import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <UserButton afterSignOutUrl="/" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">
                        Total Customers
                    </h2>
                    <p className="text-3xl font-bold">0</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">
                        Active Programs
                    </h2>
                    <p className="text-3xl font-bold">0</p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-2">
                        Rewards Claimed
                    </h2>
                    <p className="text-3xl font-bold">0</p>
                </div>
            </div>
        </div>
    );
}
