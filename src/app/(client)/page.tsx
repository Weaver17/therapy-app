import Feedback from "@/components/main/feedback";
import GettingStarted from "@/components/main/getting-started";
import Insurance from "@/components/main/insurance";
import Specialties from "@/components/main/specialties";
import Staff from "@/components/main/staff";
import Welcome from "@/components/main/welcome";

export default function Home() {
    return (
        <div className="font-mono ">
            <div className="mt-24 background-banner">
                <div className="client-section w-full">
                    <Welcome />
                    <Insurance />
                </div>
            </div>
            <Staff />
            <div className="client-section w-full">
                <Feedback />
            </div>
            <GettingStarted />
            <Specialties />
        </div>
    );
}
