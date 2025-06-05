import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Header() {
    return (
        <header className="fixed z-50 flex flex-col px-4 w-full shadow-lg h-24">
            <div className="w-full bg-secondary">
                <div className="mx-auto flex items-center justify-end px-12 py-2 w-full max-w-[1380px]">
                    <Link href="/">Patient Log In</Link>
                </div>
            </div>
            <div className="w-full h-full bg-background">
                <div className="mx-auto flex items-center justify-between px-12 py-2 w-full max-w-[1380px]">
                    <h1 className="font-bold text-2xl text-primary-foreground">
                        <Link href="/">Therapy-4-All</Link>
                    </h1>
                    <nav>
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <Link href="/">Insurance</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        Treatment
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[200px] gap-4">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">ADHD</Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        Anxiety
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        Bipolar Disorder
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        Child & Teen Care
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">
                                                        Depression
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">OCD</Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link href="#">PTSD</Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <Link href="/">Our Psychiatrists</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <Link href="/">Refer A Patient</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink
                                        asChild
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        <Button className="hover:bg-primary-foreground!">
                                            <Link href="/">Get Started</Link>
                                        </Button>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
