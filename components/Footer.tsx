import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer
      className="flex flex-col py-20 items-center justify-center 
  bg-[#28282B]"
    >
      <div className="flex flex-col items-center justify-center text-center md:pb-20">
        <Image
          src="/images/invert-white.svg"
          alt="footer logo"
          width={200}
          height={200}
          className="mb-3 mx-auto"
        />

        <h1 className="flex justify-center text-6xl text-white pb-20 w-2/3 md:px-20">
          Try the #1 software in project and product management
        </h1>
        <button
          className="flex text-xl bg-white p-6 rounded-[5px] w-40 
        items-center justify-center"
        >
          Get started
        </button>
      </div>

      <div className="hidden pt-40 space-x-20 border-t lg:grid lg:grid-cols-6">
        <Link href="/">
          <Image
            src="/images/invert-white.svg"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </Link>

        <div className="flex flex-col space-y-6 text-gray-200">
          <h2 className="text-xl pb-10">Invert</h2>
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Product</p>
          <p className="cursor-pointer">What&apos;s New</p>
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">Premium</p>
        </div>

        <div className="flex flex-col space-y-6 text-gray-200">
          <h2 className="text-xl pb-10">About Us</h2>
          <p className="cursor-pointer">Company</p>
          <p className="cursor-pointer">Leadership</p>
          <p className="cursor-pointer">Customers</p>
          <p className="cursor-pointer">Diversity</p>
        </div>

        <div className="flex flex-col space-y-6 text-gray-200">
          <h2 className="text-xl pb-10">Workflow Solutions</h2>
          <p className="cursor-pointer">Project Management</p>
          <p className="cursor-pointer">Goal Management</p>
          <p className="cursor-pointer">Increase Productivity</p>
          <p className="cursor-pointer">Work Management</p>
          <p className="cursor-pointer">Project Planning</p>
        </div>

        <div className="flex flex-col space-y-6 text-gray-200">
          <h2 className="text-xl pb-10">Resources</h2>
          <p className="cursor-pointer">Help Center</p>
          <p className="cursor-pointer">Forum</p>
          <p className="cursor-pointer">Support</p>
          <p className="cursor-pointer">App Directory</p>
          <p className="cursor-pointer">Developers & API</p>
        </div>

        <div className="flex flex-col space-y-6 text-gray-200">
          <h2 className="text-xl pb-10">Learn</h2>
          <p className="cursor-pointer">11 Leadership Styles</p>
          <p className="cursor-pointer">What are OKRs?</p>
          <p className="cursor-pointer">SMART GOALS</p>
        </div>
      </div>
    </footer>
  );
}
