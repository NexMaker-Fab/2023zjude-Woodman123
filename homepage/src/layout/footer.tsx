import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
    <footer className="flex flex-wrap py-8">
        <div
            className="w-100 md:w-1/2 flex items-center text-center md:text-left justify-center md:justify-start p-2 text-sm opacity-80">
            &copy; Woodman 123 Team {new Date().getFullYear()}. All rights reserved.
        </div>
        <div className="w-100 md:w-1/2 p-2 flex justify-center md:justify-end items-center">
            <Link href="mailto:dmz@zju.edu.cn" passHref>
                <a className="mr-4">
                    <Image alt="Email Address" src="/icons/mail.svg" width={24} height={24}/>
                </a>
            </Link>
            <Link href="https://github.com/Littleor" passHref>
                <a className="mr-4">
                    <Image alt="GitHub" src="/icons/github.svg" width={22} height={22}/>
                </a>
            </Link>
        </div>
    </footer>
);

export default Footer;
