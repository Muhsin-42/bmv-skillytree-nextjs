"use client";
import { LINKS } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ButtonPrimary from "../buttons/button-primary";
import clsx from "clsx";

const Header = () => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <header className="z-[999] flex h-[66px] items-center justify-between px-14 shadow-lg">
      <Image
        src={"/assets/logo2.png"}
        className="max-h-[50px]"
        height={50}
        width={208}
        alt="logo"
      />
      <nav>
        <ul className="flex h-full gap-14">
          <Image src={"/icons/search.svg"} height={18} width={18} alt="logo" />
          {LINKS.map((link) => (
            <li key={link.hash} className="flex flex-col items-start ">
              <Link
                href={link.hash}
                className={clsx("text-nav", {
                  "text-nav-active": activeSection === link.name,
                  "text-gray-1": activeSection !== link.name,
                })}
                onClick={() => setActiveSection(link.name)}
              >
                {link.name}
              </Link>
              {activeSection === link.name && (
                <div className="relative top-[1px] h-[3px] w-7/12 bg-pink-1"></div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-14">
        <div className="flex items-center justify-center gap-2  ">
          <Image
            src={"/icons/login.svg"}
            className="h-fit"
            height={18}
            width={18}
            alt="logo"
          />
          <span className="flex h-fit text-nav-active">Log in</span>
        </div>
        <ButtonPrimary text="Join as Tutor" />
      </div>
    </header>
  );
};

export default Header;
