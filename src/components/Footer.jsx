import React from "react";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="grid md:flex w-full px-10 py-20 md:p-20">
      <div className="w-1/2 text-lg text-[#6e6f6f] mb-20">
        <img src={logo} alt="logo" className="w-60" />
        <p className="pt-4">Built by Nikolai Bain.</p>
        <p className="pb-4">Powered by Webflow.</p>
        <p>© 2022 Memberbase. All Rights Reserved.</p>
      </div>
      <div className="flex flex-wrap w-full md:w-1/2 gap-x-28 gap-y-10">
        <div className="leading-9 text-xl text-[#6e6f6f]">
          <p className="text-[#9ca7b2] font-semibold text-lg pb-3">WEBSITE</p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Home
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Resources
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Contact
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Ebook (CMS)
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Term & Conditions
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Privacy Policy
          </p>
        </div>
        <div className="leading-9 text-xl text-[#6e6f6f]">
          <p className="text-[#9ca7b2] font-semibold text-lg pb-3">
            MEMBERSHIP
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Sign In
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Sign Up
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            User Account
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Reset Password
          </p>
        </div>
        <div className="leading-9 text-xl text-[#6e6f6f]">
          <p className="text-[#9ca7b2] font-semibold text-lg pb-3">ADMIN</p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Style Guide
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Licenses
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Instructions
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            Password
          </p>
          <p className="hover:text-[#1d1d1d] cursor-pointer duration-300">
            404
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
