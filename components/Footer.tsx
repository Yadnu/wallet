import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ui/theme-button";

const Footer = () => {
  return (
    <section className="max-w-7xl mx-auto border-t px-4">
      <div className="flex justify-between py-8">
        <p className="text-primary tracking-tight">
          Designed and Developed by{" "}
          <Link href={"https://yadneyajoshi-git-master-yadnus-projects.vercel.app/"} className="font-bold bg-green-400">
             Yadneya
          </Link>
        </p>
      </div>
      
    </section>
  );
};

export default Footer;
