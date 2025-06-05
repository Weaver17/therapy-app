import { CircleCheckBig } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function Welcome() {
    return (
        <div className="client-container  ">
            <div className="flex flex-col justify-center items-center gap-4 border-b pt-32 pb-4 px-4 border-secondary">
                <h2 className="text-center font-serif text-5xl text-primary-foreground">
                    Therapy for <strong className="italic">Everyone</strong>
                </h2>
                <p className="text-center text-xl text-foreground/70">
                    In person and virtual visits covered by insurance
                </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <ul className="grid grid-cols-2 gap-4">
                    <li className="flex items-center gap-2">
                        <CircleCheckBig className="text-secondary-foreground" />
                        In Person Visits
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheckBig className="text-secondary-foreground" />
                        Virtual Visits
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheckBig className="text-secondary-foreground" />
                        Covered by Insurance
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheckBig className="text-secondary-foreground" />
                        Therapists Who Care
                    </li>
                </ul>
                <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-foreground"
                >
                    Take A Quick Assessment
                </Button>
            </div>
        </div>
    );
}

export default Welcome;
