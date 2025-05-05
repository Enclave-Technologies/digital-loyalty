export default function FullscreenLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="max-w-full overflow-x-hidden">{children}</div>;
}
