// import Image from "next/image";
// import React from "react";

// const BusinessesPage = () => {
//     return (
//         <div className="w-full">
//             <div className="text-sm font-bold m-2 p-2">NBHD</div>
//             <div className="w-full mx-auto m-2 p-2">
//                 <Image
//                     src={"/business-banner.jpeg"}
//                     alt="top banner"
//                     width={1920}
//                     height={50}
//                     className="w-full h-auto object-cover rounded-xl"
//                 />
//             </div>
//             BusinessesPage
//         </div>
//     );
// };

// export default BusinessesPage;

import { BusinessCard } from "@/components/businesses/card";
import ClickableCard from "@/components/businesses/clickableCard";
import { get_all_businesses } from "@/server/business_fns";
import Image from "next/image";
import React from "react";

const BusinessesPage = async () => {
    // get all business needs to accept logged in user id
    const all_businesses = await get_all_businesses();

    return (
        <div className="w-full min-h-screen p-4">
            <div className="text-sm font-bold mb-2">NBHD</div>
            {/* <div className="text-lg font-bold mb-4">All Businesses</div> */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
                <div className="w-full  mb-4">
                    <Image
                        src={"/business-banner.jpeg"}
                        alt="top banner"
                        width={1920}
                        height={50}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                <div className="p-4 rounded-lg ">
                    <h3 className="text-lg font-semibold mb-2">
                        Register a business
                    </h3>
                    <ClickableCard
                        href="/add-business/0"
                        description="Add a business"
                    />
                </div>
                {/* Placeholder for more cards */}
            </div>

            <div className="text-lg font-bold mb-4">
                All registered businesses
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Example Project Cards */}

                {all_businesses.map((business) => (
                    <BusinessCard
                        key={business.uid}
                        name={business.name}
                        uid={business.uid}
                    />
                ))}
            </div>
        </div>
    );
};

export default BusinessesPage;
