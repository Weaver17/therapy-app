import Link from "next/link";
import React from "react";

import {
    FaFacebook,
    FaLinkedin,
    FaTiktok,
    FaInstagramSquare,
} from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-muted/50 border-t border-primary">
            <div className="mx-auto flex px-12 py-8 w-full max-w-[1100px] border-b border-muted">
                <div className="w-1/3 p-4 border-r border-muted">
                    <h4 className="font-bold text-xl text-primary-foreground">
                        <Link href="/">Therapy-4-All</Link>
                    </h4>
                </div>
                <div className="w-2/3 px-8 py-10 flex justify-between items-start">
                    <ul className="flex flex-col gap-3 text-foreground/70">
                        <li className="hover:text-foreground">
                            <Link href="/">Insurance</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">Treatments</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">Our Staff</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">Help</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">Refer A Patient</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3 text-foreground/70">
                        <li className="hover:text-foreground">
                            <Link href="/">FAQ</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">Mental Health Tests</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">In Person Screenings</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">Blog</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3 text-foreground/70">
                        <li className="hover:text-foreground">
                            <Link href="/">About</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">Locations</Link>
                        </li>
                        <li>
                            <Link href="/">Careers</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">Reviews</Link>
                        </li>
                        <li className="hover:text-foreground">
                            <Link href="/">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mx-auto flex px-12 py-8 w-full max-w-[1100px] border-b border-muted">
                <div className="mx-auto flex gap-12 items-center">
                    <p className="text-sm text-center text-foreground/70 ">
                        © 2023 Therapy-4-All. All rights reserved.
                    </p>
                    <ul className="flex justify-center items-center gap-4">
                        <li>
                            <FaFacebook className="text-3xl text-foreground/70 hover:text-foreground cursor-pointer" />
                        </li>
                        <li>
                            <FaLinkedin className="text-3xl text-foreground/70 hover:text-foreground cursor-pointer" />
                        </li>
                        <li>
                            <FaTiktok className="text-3xl text-foreground/70 hover:text-foreground cursor-pointer" />
                        </li>
                        <li>
                            <FaInstagramSquare className="text-3xl text-foreground/70 hover:text-foreground cursor-pointer" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
