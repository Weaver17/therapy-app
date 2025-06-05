import Insurance from "@/components/main/insurance";
import Welcome from "@/components/main/welcome";

export default function Home() {
    return (
        <div className="font-mono background-banner ">
            <div className="client-section w-full">
                <Welcome />
                <Insurance />
            </div>
        </div>
    );
}
