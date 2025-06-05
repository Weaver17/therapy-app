import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";
import { SPECIALTIES } from "@/lib/constants";
import { Button } from "../ui/button";

function Specialties() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 p-1 pb-16">
            <h3 className="text-center font-serif text-3xl text-primary-foreground">
                Our Specialties
            </h3>
            <Accordion
                type="single"
                collapsible
                className="w-1/2 mx-auto px-10 rounded-2xl"
            >
                {SPECIALTIES.map((specialty) => (
                    <AccordionItem
                        key={specialty.id}
                        value={specialty.id.toString()}
                        className="px-4 py-2 my-1 bg-secondary border-none rounded-xl"
                    >
                        <AccordionTrigger className="text-xl font-semibold cursor-pointer text-primary-foreground">
                            {specialty.name}
                        </AccordionTrigger>
                        <AccordionContent className="text-base flex flex-col gap-2">
                            {specialty.description}
                            <Button className="w-1/3 ml-auto">More Info</Button>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default Specialties;
