import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
    redirect("/businesses");

    return <div>Redirecting ... </div>;
};

export default Page;
