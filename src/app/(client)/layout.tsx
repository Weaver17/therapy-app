import Header from "@/components/header/header";
import React from "react";

function ClientLayout({
    children,
}: Readonly<{
    children?: React.ReactNode;
}>): React.JSX.Element {
    return (
        <main className="client-main">
            <Header />
            {children}
        </main>
    );
}

export default ClientLayout;
