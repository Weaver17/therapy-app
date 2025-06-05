"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { CUSTOMER_FEEDBACK } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import Autoplay from "embla-carousel-autoplay";

function Feedback() {
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(CUSTOMER_FEEDBACK.length);
    const [api, setApi] = useState<any>(); // Use the correct type if available from embla-carousel-react

    useEffect(() => {
        const totalFeedback = CUSTOMER_FEEDBACK.length;
        setCount(totalFeedback);
        if (totalFeedback > 0) {
            setCurrent(0); // Initialize current to the first feedback
            if (!api) {
                return;
            }
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", onSelect);

        // Cleanup
        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    return (
        <div className="flex h-[600px] items-center">
            <div className="w-1/2 p-4">
                <Image
                    src="https://images.unsplash.com/photo-1600427652630-f97cc4db10cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Therapy Session"
                    width={300}
                    height={300}
                    className="w-full object-cover rounded-lg border border-primary"
                />
            </div>
            <div className="w-1/2 p-4 flex flex-col items-center ">
                <h3 className="text-center font-serif text-3xl text-primary-foreground">
                    See what our customers say
                </h3>
                <Carousel
                    setApi={setApi}
                    className="w-full h-full mt-4"
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                >
                    <CarouselContent className="">
                        {CUSTOMER_FEEDBACK.map((feedback) => (
                            <CarouselItem key={feedback.id}>
                                <Card className="w-2/3 mx-auto h-[280px] border-none bg-accent/20">
                                    <CardContent className="flex flex-col h-full justify-center items-center gap-4">
                                        <CardTitle className="text-center font-semibold text-2xl text-primary-foreground">
                                            {feedback.name}
                                        </CardTitle>
                                        <CardDescription className="text-center text-sm text-foreground">
                                            {feedback.feedback}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <p className="text-muted-foreground text-center text-xs">
                        {current + 1}/{count}
                    </p>
                </Carousel>
            </div>
        </div>
    );
}

export default Feedback;
