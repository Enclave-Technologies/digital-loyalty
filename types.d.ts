interface FirebaseAuthError extends Error {
    code?: string;
}

type BusinessCardProp = {
    uid: string;
    name: string;
    className?: string;
};

type ClickableProp = {
    className?: string;
    href: string;
    description: string;
};

type AddBusinessProps = {
    params: Promise<{
        pageId: string;
    }>;
};

type DashboardParams = {
    params: Promise<{
        id: string;
    }>;
};
