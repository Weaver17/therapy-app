import React from "react";

function Insurance() {
    return (
        <div className="client-container">
            <h3 className="text-center font-serif text-3xl text-primary-foreground border-b pb-4 px-8 border-secondary">
                We Take Insurance
            </h3>
            <div>
                <ul className="flex flex-nowrap gap-16 justify-center items-center">
                    <li className="text-xl text-blue-800 border border-red-600 rounded-2xl p-4 bg-red-200">
                        Company 1
                    </li>
                    <li className="text-xl font-serif text-green-800 border border-blue-600 rounded-full p-4 bg-green-200">
                        Company 2
                    </li>
                    <li className="text-xl font-serif text-amber-500 p-4">
                        Company 3
                    </li>
                    <li className="text-xl font-serif text-cyan-600 bg-cyan-200 p-4 rounded-4xl">
                        Company 4
                    </li>
                    <li className="text-xl text-muted-foreground">
                        ...And More
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Insurance;
