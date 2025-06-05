import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

function GettingStarted() {
    return (
        <div className="client-container bg-secondary/10">
            <h3 className="text-4xl font-semibold font-serif text-primary-foreground">
                How To Get Started
            </h3>
            <ol className="flex flex-col gap-4">
                <Card className="bg-primary border-secondary-foreground py-2.5!">
                    <CardContent className="space-y-4">
                        <CardTitle className="text-xl text-background/85">
                            Take Our Online Assessment
                        </CardTitle>
                        <CardDescription className="text-base text-background/85">
                            A 15-20 minute questionnare where you can tell us
                            how you have been feeling lately
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="bg-background/90 border-primary py-2.5!">
                    <CardContent className="space-y-4">
                        <CardTitle className="text-xl text-primary">
                            Meet Your Therapist
                        </CardTitle>
                        <CardDescription className="text-base text-primary">
                            Have your first session with a therapist who
                            specializes in your needs
                        </CardDescription>
                    </CardContent>
                </Card>
                <Card className="bg-primary border-secondary-foreground py-2.5!">
                    <CardContent className="space-y-4">
                        <CardTitle className="text-xl text-background/85">
                            Customize Your Treatment Plan
                        </CardTitle>
                        <CardDescription className="text-base text-background/85">
                            From medication to frequent sessions, we will work
                            with you to create a plan that fits your needs
                        </CardDescription>
                    </CardContent>
                </Card>
            </ol>
            <Button
                size="lg"
                className="bg-background text-primary border border-primary hover:bg-background hover:text-primary-foreground"
            >
                Start Assessment
            </Button>
        </div>
    );
}

export default GettingStarted;
