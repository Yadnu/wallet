import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/theme-button";

const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto border-t px-4">
      <div className="flex justify-between py-8">
        <p className="text-primary tracking-tight">
          Designed and Developed by{" "}
          <Link href={"https://yadneyajoshi-git-master-yadnus-projects.vercel.app/"} className="font-bold">
            <h1 className="bg-accent"> Yadneya</h1>
          </Link>
        </p>
      </div>
      <ModeToggle />
    </section>
  );
};

export default Footer;
