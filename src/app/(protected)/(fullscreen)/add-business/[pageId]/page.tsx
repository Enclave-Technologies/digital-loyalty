import React from "react";

const AddBusiness = async ({ params }: AddBusinessProps) => {
    const pageId = (await params).pageId;

    return <div>AddBusiness - {pageId}</div>;
};

export default AddBusiness;
