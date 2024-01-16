"use client";

import React, { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ProductBox from "@/components/ProductBox";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const options = [
  {
    index: 0,
    title: "Marketing",
    description:
      "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
    action: "Explore Marketing ",
    image: "/images/tab-3.webp",
  },
  {
    index: 1,
    title: "Operations",
    description:
      "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
    action: "Explore Operations ",
    image: "/images/tab-2.webp",
  },
  {
    index: 2,
    title: "IT",
    description:
      "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
    action: "Explore IT  ",
    image: "/images/tab-3.webp",
  },
  {
    index: 3,
    title: "Product",
    description:
      "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
    action: "Explore Product ",
    image: "/images/tab-1.webp",
  },
  {
    index: 4,
    title: "Sales",
    description:
      "Plan and execute your campaigns with Timeline view. Align your team on top priorities and deliver fast results.",
    action: "Explore Sales ",
    image: "/images/tab-2.webp",
  },
];

export default function Page() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleAccordionChange = (value: any) => {
    const selected = options.find((option) => option.title === value);
    if (selected) {
      setSelectedOption(selected);
    }
  };

  return (
    <main className="mt-28 overflow-x-hidden">
      <section
        className="items-center justify-center py-20 space-y-10
  md:flex md:space-y-20"
      >
        <div className="flex flex-col px-10 space-y-10 md:w-1/3">
          <h1 className="text-6xl">
            The #1 software in project and product management
          </h1>

          <h2 className="text-2xl">
            Delaware connects company-wide goals to the work needed to achieve
            them—across teams and functions.
          </h2>

          <div className="flex space-x-4">
            <button className="bg-black p-4 text-white text-xl rounded-[5px]">
              Get Started
            </button>

            <button className="border border-black p-4 text-black text-xl rounded-[5px]">
              View Demo
            </button>
          </div>
        </div>

        <Image
          src="/images/tab-6.webp"
          alt="Image"
          width={700}
          height={700}
          className="px-10"
        />
      </section>

      <section className="flex flex-col items-center justify-center py-10 space-y-10">
        <h2 className="text-5xl">Why Delaware?</h2>
        <p className="text-2xl text-center">
          According to JDA, Delaware improves employee productivity by 45%.
        </p>

        <div className="text-xl space-y-10 md:flex md:space-y-0 md:space-x-20">
          <ProductBox
            image="/images/icons/lightbulb.png"
            colour="yellow-400"
            percentage={82}
            text="Increased creativity"
          />

          <ProductBox
            image="/images/icons/clock.png"
            colour="red-400"
            percentage={37}
            text="Increased on-time completion"
          />

          <ProductBox
            image="/images/icons/refresh.png"
            colour="blue-400"
            percentage={24}
            text="Increased productivity and efficiency"
          />

          <ProductBox
            image="/images/icons/checkmark.png"
            colour="green-500"
            percentage={999}
            text="Happy clients"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center py-10 space-y-10">
        <h2 className="text-4xl text-center">
          Built to support any team and any workflow
        </h2>

        <div className="flex space-x-10 px-10 items-center justify-center">
          <div className="">
            {options.map((option, index) => (
              <Accordion key={index} type="single" defaultValue="Marketing">
                <AccordionItem key={index} value={option.title}>
                  <AccordionTrigger
                    className="w-96 text-3xl"
                    value={option.title}
                  >
                    {option.title}
                  </AccordionTrigger>
                  <AccordionContent className="border-b border-blue-500">
                    <div className="md:flex  items-center space-x-20">
                      <div className="md:w-1/2 px-10">
                        <div className="text-xl pt-4">{option.description}</div>
                        <div className="flex text-blue-400 pt-4">
                          <div className="text-lg">{option.action}</div>
                          <ArrowRight className="h-6 w-6 ml-4" />
                        </div>
                      </div>
                      <div className="">
                        <Image
                          src={option.image}
                          alt="Image"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section className="md:py-20 py-0 space-y-20 items-center justify-center">
        <h2 className="mx-2 text-4xl text-center md:mx-0">
          The best platform for cross-team work
        </h2>

        <div className="md:flex md:space-x-28 items-center px-10 justify-center ">
          <div
            className="
          bg-gradient-to-r from-gray-400 to-gray-100
          items-center justify-center rounded-md
          flex p-10"
          >
            <Image
              src="/images/tab-1.webp"
              width={530}
              height={500}
              alt="logo"
              className="rounded-md
            w-80 h-60 md:w-96 md:h-80"
            />
          </div>

          <div className="flex items-center justify-center py-6 md:w-1/2">
            <div className="text-4xl  flex md:space-y-20 space-y-10 flex-col">
              <div>Quickly connect complex work across teams</div>

              <div className="text-2xl">
                Decrease duplicate work and increase cross-team visibility. Add
                the same task to multiple projects and see it update
                automatically.
              </div>
              <div
                className=" p-6 border border-gray-400 w-40 rounded-xl text-xl
              cursor-pointer"
              >
                Get started
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-10 items-center justify-center md:flex">
        <div className="items-center md:w-1/2 pb-20 md:pb-0 space-y-20 justify-center">
          <h2 className="text-4xl">The best platform for cross-team work</h2>

          <div className="text-2xl md:w-5/6 ">
            Get more work done across teams with unlimited monthly actions, the
            ability to track hundreds of projects in one place, and by reporting
            against your entire organization.
          </div>
          <div
            className="p-6 border border-gray-400 w-40 rounded-xl text-xl
          cursor-pointer"
          >
            Get started
          </div>
        </div>

        <div
          className="bg-gradient-to-r from-gray-400 to-gray-100
          items-center justify-center rounded-md flex p-6"
        >
          <Image
            src="/images/tab-3.webp"
            width={500}
            height={500}
            alt="logo"
            className="rounded-md w-80 h-60 md:w-96 md:h-80"
          />
        </div>
      </section>

      <section className="py-20 md:space-y-20 items-center justify-center flex flex-col">
        <h2 className="text-4xl text-center">
          80% of Fortune 100 companies use Delaware
        </h2>

        <div className="md:flex md:space-x-20 items-center justify-center">
          <div className="border-b md:border-r md:border-b-0 md:w-80">
            <Image
              src="/images/logo/logo-6.svg"
              width={250}
              height={250}
              alt="logo"
              className="h-40"
            />
          </div>
          <div className="border-b md:border-r md:border-b-0 md:w-80">
            <Image
              src="/images/logo/logo-8.svg"
              width={250}
              height={250}
              alt="logo"
              className="h-40"
            />
          </div>
          <div className="border-b md:border-r md:border-b-0 md:w-80">
            <Image
              src="/images/logo/logo-5.svg"
              width={250}
              height={250}
              alt="logo"
              className="h-40"
            />
          </div>
          <div className="border-b md:border-r md:border-b-0 md:w-80">
            <Image
              src="/images/logo/logo-9.svg"
              width={250}
              height={250}
              alt="logo"
              className="h-40"
            />
          </div>
        </div>
      </section>

      <section className="py-20 space-y-20 px-10 items-center justify-center flex flex-col bg-[#E5E4E2]">
        <h2 className="text-4xl md:w-2/5 text-center">
          Robust features to achieve any business objective as your company
          grows
        </h2>

        <div className="space-y-10 md:space-x-40 md:flex md:space-y-0">
          <div className="flex-col w-96 space-y-4 flex ">
            <Image
              src="/images/icons/gears.png"
              width={300}
              height={300}
              alt="logo"
              className="h-20 w-20"
            />
            <h2 className="text-2xl font-semibold">
              Drive cross-team efficiency
            </h2>
            <div className="ml-6 space-y-4">
              <h3 className="text-xl">
                {" "}
                • Connect teams and automate work to improve productivity.
              </h3>
              <h3 className="text-xl">
                {" "}
                • Gain clarity on bottlenecks and allocate work with Workload
              </h3>
              <h3 className="text-xl">
                {" "}
                • Manage resourcing for teams with messaging, comments, and
                unique views
              </h3>
            </div>
          </div>
          <div className="flex-col w-96 space-y-4 flex">
            <Image
              src="/images/icons/puzzle.png"
              width={300}
              height={300}
              alt="logo"
              className="h-20 w-20"
            />
            <h2 className="text-2xl font-semibold">Automate processes</h2>
            <div className="ml-6 space-y-4">
              <h3 className="text-xl">
                {" "}
                • Systemize intakes with Workflow Builder and Forms
              </h3>
              <h3 className="text-xl">
                {" "}
                • Reduce manual work with custom Rules like assigning tasks and
                updating statuses
              </h3>
              <h3 className="text-xl">
                {" "}
                • Automate work in one place with 200+ integrations
              </h3>
            </div>
          </div>
          <div className="flex-col w-96 space-y-4 flex">
            <Image
              src="/images/icons/refresh-2.png"
              width={500}
              height={500}
              alt="logo"
              className="h-20 w-20"
            />
            <h2 className="text-2xl font-semibold">Get real-time insights</h2>
            <div className="ml-6 space-y-4">
              <h3 className="text-xl">
                {" "}
                • Monitor progress across teams, without manual work
              </h3>
              <h3 className="text-xl">
                {" "}
                • Build personalized visualizations with Custom Fields and
                Charts
              </h3>
              <h3 className="text-xl">
                {" "}
                • Save time on creating reports with a robust Charts template
                library
              </h3>
            </div>
          </div>
        </div>

        <div className="space-y-10 md:space-x-40 md:flex md:space-y-0">
          <div className="flex-col w-96 space-y-4 flex">
            <Image
              src="/images/icons/lock.png"
              width={300}
              height={300}
              alt="logo"
              className="h-20 w-20"
            />
            <h2 className="text-2xl font-semibold">Protect sensitive data</h2>

            <div className="ml-6 space-y-4">
              <h3 className="text-xl">
                {" "}
                • Connect teams and automate work to improve productivity.
              </h3>
              <h3 className="text-xl">
                {" "}
                • Gain clarity on bottlenecks and allocate work with Workload
              </h3>
              <h3 className="text-xl">
                {" "}
                • Manage resourcing for teams with messaging, comments, and
                unique views
              </h3>
            </div>
          </div>

          <div className="flex-col w-96 space-y-4 flex">
            <Image
              src="/images/icons/contacts.png"
              width={300}
              height={300}
              alt="logo"
              className="h-20 w-20"
            />
            <h2 className="text-2xl font-semibold">
              Manage permissions and settings
            </h2>
            <div className="ml-6 space-y-4">
              <h3 className="text-xl">
                {" "}
                • Control permissions, privacy settings, security requirements
                and more from a centralized admin console
              </h3>
              <h3 className="text-xl">
                {" "}
                • Reduce manual work with custom Rules like assigning tasks and
                updating statuses
              </h3>
            </div>
          </div>

          <div className="flex-col w-96 space-y-4 flex">
            <Image
              src="/images/icons/menu.png"
              width={500}
              height={500}
              alt="logo"
              className="h-20 w-20"
            />
            <h2 className="text-2xl font-semibold">
              Set goals and drive alignment
            </h2>
            <div className="ml-6 space-y-4">
              <h3 className="text-xl">
                {" "}
                • Align your organization and inspire ownership with Goals
              </h3>
              <h3 className="text-xl">
                {" "}
                • Track all of your team&apos;s projects in a single view with
                Portfolios
              </h3>
              <h3 className="text-xl">
                {" "}
                • Save time on creating reports with a robust Charts template
                library
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
