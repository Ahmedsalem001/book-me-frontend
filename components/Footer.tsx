"use client"
import Image from "next/image";
import logo from "@/public/logo2.svg";
import { navLinks, contacts } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  return  (
    <div className="h-[50vh] w-screen bg-[#BA94D1] flex flex-col justify-between max-sm:px-6 px-16 pt-8 pb-5 max-sm:w-full max-sm:h-fit max-sm:gap-7 max-sm:items-center ">
      <div className="flex max-sm:flex-col max-sm:gap-7">
        <div className="flex-1">
          <Image src={logo} alt="logo" />
          <p className=" text-white text-2xl mt-3 max-sm:text-base max-sm:text-center ">
            amet mauris ultricies <br />
            quis amealiquet <br />
            scelerisque suspendisse <br />
            scelerisque massa.
          </p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col items-center gap-5 font-bold text-[#756AB6] w-fit">
            <h1 className="text-3xl text-white max-sm:text-lg">Quick links</h1>
            {navLinks.map((link) => (
              <Link href={link.route}>{link.label}</Link>
            ))}
          </div>
          <div className="flex flex-col items-center gap-5 font-bold text-[#756AB6]  w-fit">
            <h1 className="text-3xl text-white max-sm:text-lg">Contacts</h1>
            {contacts.map((link) => (
              <h1>{link.label}</h1>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-end items-center max-sm:justify-center">
            <h1 className="text-4xl text-white max-sm:text-lg  max-sm:text-center"> Visit us to see our <br /> website</h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-white text-xl max-sm:text-lg"><h1>Copyright © 2023 All rights reserved</h1></div>
        <div className="text-white text-xl flex justify-between gap-10 max-sm:text-lg max-sm:gap-1"><h1>terms & condition</h1><h1>privacy policy</h1></div>
      </div>
    </div>
  );
};

export default Footer;
