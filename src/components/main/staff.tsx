import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { STAFF } from "@/lib/constants";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import Image from "next/image";

function Staff() {
    return (
        <div className="bg-muted/50 w-full h-[560px]">
            <div className="max-w-[1440px] mx-auto w-full flex py-6 px-2">
                <div className="w-1/2 flex flex-col justify-center items-center gap-4">
                    <h2 className="text-center font-serif text-3xl text-primary-foreground ">
                        Meet Our Staff
                    </h2>
                    <p className="text-center text-xl text-foreground/70">
                        Dedicated professionals ready to support you
                    </p>
                </div>
                <div className="w-1/2 ">
                    <Carousel className="w-[400px] ">
                        <CarouselContent className="w-[400px] mx-auto ">
                            {STAFF.map((staff) => (
                                <CarouselItem className="" key={staff.id}>
                                    <Card className="w-[360px] h-[516px] mx-auto p-0!  bg-secondary/50 overflow-hidden border-primary-foreground">
                                        <CardContent className="flex flex-col relative ">
                                            <CardHeader className="absolute top-0 -left-6 w-[420px] h-[330px] bg-accent overflow-visible">
                                                <div className="flex gap-4">
                                                    <Image
                                                        src={staff.image}
                                                        alt={staff.name}
                                                        width={220}
                                                        height={330}
                                                        objectFit="cover"
                                                        className="aspect-w-16 aspect-h-9"
                                                    />
                                                    <ul className="justify-self-center self-center space-y-5">
                                                        <p className="text-base text-primary">
                                                            Specialties:
                                                        </p>
                                                        {staff.specialties.map(
                                                            (
                                                                specialty,
                                                                index
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        index +
                                                                        1
                                                                    }
                                                                    className="text-sm text-primary-foreground"
                                                                >
                                                                    {specialty}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </CardHeader>
                                            <div className="mt-[344px] space-y-4">
                                                <CardTitle className="text-center font-semibold text-2xl text-primary-foreground">
                                                    {staff.name}
                                                </CardTitle>
                                                <p className="text-center">
                                                    {staff.title}
                                                </p>
                                                <CardDescription className="text-center text-sm text-foreground/70 mt-2">
                                                    {staff.description}
                                                </CardDescription>
                                                <CardFooter></CardFooter>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Staff;
