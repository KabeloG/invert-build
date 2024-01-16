"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImageCard from "@/components/ImageCard";
import Slider from "react-infinite-logo-slider";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const tabs = [
    {
      name: "Marketing Teams",
      title: "Deliver impactful marketing strategies",
      feature1: "Campaign planning",
      feature2:
        "Help teams quickly refocus and reprioritize work as goals change.",
      feature3: "Automate processes for approvals",
      image: "/images/tab-1.webp",
    },
    {
      name: "IT Teams",
      title: "Automate and streamline IT requests",
      feature1: "Reduce digital friction for better team velocity",
      feature2: "Track and manage work across teams",
      feature3: "Automate processes for approvals",
      image: "/images/tab-2.webp",
    },

    {
      name: "Operations Teams",
      title: "Drive operational efficiency",
      feature1: "Track work and see progress in real time",
      feature2: "Standardize and automate processes",
      feature3: "Unblock teams to hit revenue goals",
      image: "/images/tab-3.webp",
    },
    {
      name: "Project Management",
      title: "Manage projects more efficiently",
      feature1: "Track work and see progress in real time",
      feature2: "Standardize and automate processes",
      feature3: "Track resources, goals and progress in one place",
      image: "/images/tab-4.webp",
    },
    {
      name: "Strategic Planning",
      title: "Align teams to execute winning strategies",
      feature1: "Track work and see progress in real time",
      feature2: "Set annual plans to deliver results",
      feature3: "See real-time insights to stay on track and on budget",
      image: "/images/tab-5.webp",
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <main className="flex flex-col overflow-x-hidden">
      <section className="py-44 md:py-40">
        <div className="mx-auto text-center md:w-1/2">
          <h1 className="text-6xl justify-center pb-10 px-4 md:px-20">
            The Best Platform for Cross-Functional Work
          </h1>

          <p className="text-lg md:text-xl mb-10 px-4">
            Want more efficiency in your organization? Delaware is easy for all
            teams to use, so you can deliver quality work, faster
          </p>

          <div className="justify-center space-x-3">
            <button
              className="bg-black text-white rounded-[3px]
              py-2 px-4 text-base font-medium hover:opacity-80
              transition duration-300 ease-out"
            >
              Get Started
            </button>

            <button
              className="bg-gray-500 text-white rounded-[3px]
              py-2 px-4 text-base font-medium hover:opacity-80
              transition duration-300 ease-out"
            >
              See how it works
            </button>
          </div>
        </div>

        <div
          className="mt-10 items-center space-y-10 justify-center md:flex md:mx-auto
        md:space-x-10 md:pt-10 md:px-5"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <Image
              src="/images/tab-1.webp"
              alt="illustration"
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <Image
              src="/images/tab-2.webp"
              alt="illustration"
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-10 md:px-0"
          >
            <Image
              src="/images/tab-3.webp"
              alt="illustration"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </section>

      <section
        ref={ref}
        className="flex flex-col bg-white items-center justify-center
      py-10 space-y-6"
      >
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease-in-out",
          }}
          className="flex flex-col w-3/4 border-b border-gray-300 
          md:flex-row md:justify-between"
        >
          <div className="space-y-2">
            <h2 className="text-2xl">
              80% of Fortune 500 companies use Delaware
            </h2>

            <div className="flex items-center">
              <h3 className="text-xl">See how customers use Delaware</h3>
              <ArrowRight className="h-6 w-6 text-black ml-2" />
            </div>
          </div>

          <div className="flex space-x-2 my-5 md:mt-0">
            <Image
              src="/images/logo/logo-2.svg"
              alt="logo"
              width={100}
              height={100}
            />

            <Image
              src="/images/logo/logo-3.svg"
              alt="logo"
              width={100}
              height={100}
            />

            <Image
              src="/images/logo/logo-4.svg"
              alt="logo"
              width={100}
              height={100}
            />

            <Image
              src="/images/logo/logo-11.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="pt-10 hidden md:block"
        >
          <h2
            className="text-4xl
          text-center md:text-6xl"
          >
            See how teams use Delaware
          </h2>

          <div className="hidden md:flex space-x-5 md:pt-10">
            {tabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => setActiveTabIndex(index)}
                className={`flex items-center justify-center 
              w-60 cursor-pointer transition-colors duration-300 ${
                activeTabIndex === index
                  ? "border-b-4 pt-2 border-gray-500 text-gray-800"
                  : "text-muted-foreground"
              }`}
              >
                <div className="flex items-center h-20 w-20 justify-center">
                  <h3 className="text-3xl text-center">{tab.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 space-x-1 mt-10">
            <div className="bg-gray-300 px-8 py-14 rounded-[3px]">
              <h2 className="text-3xl font-medium underline">
                {tabs[activeTabIndex].title}
              </h2>

              <div className="mt-8 space-y-11">
                <div className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-600" />
                  <p>{tabs[activeTabIndex].feature1}</p>
                </div>

                <div className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-600" />
                  <p>{tabs[activeTabIndex].feature2}</p>
                </div>

                <div className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-600" />
                  <p>{tabs[activeTabIndex].feature3}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-400 to-gray-100 rounded-[3px]">
              <div className="mx-28 my-11">
                <Image
                  src={tabs[activeTabIndex].image}
                  alt="tab image"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-screen bg-[#097969]">
        <motion.div
          ref={ref}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col space-y-10
          py-10 md:pt-20 md:pb-10 text-white items-center"
        >
          <h2 className="text-center text-4xl md:text-6xl">
            Why companies use Delaware
          </h2>

          <div className="mx-auto md:w-3/4 px-10">
            <div
              className="flex space-x-10 text-2xl py-10 border-t border-b 
            md:space-x-20"
            >
              <CheckCircle2 className="h-10 w-10 md:h-20 md:w-20" />

              <h3 className="w-72 md:w-80 md:text-3xl">
                The only platform with goals built in
              </h3>

              <p className="hidden md:block md:w-1/2">
                See related tasks, collaborators and progress to quickly achieve
                business goals.
              </p>
            </div>

            <div
              className="flex space-x-10 text-2xl py-10 border-t border-b 
            md:space-x-20"
            >
              <CheckCircle2 className="h-10 w-10 md:h-20 md:w-20" />

              <h3 className="w-72 md:w-80 md:text-3xl">
                Rated best for cross-team collaboration
              </h3>

              <p className="hidden md:block md:w-1/2">
                Delaware is rated as a leader in work management by industry
                experts.
              </p>
            </div>

            <div
              className="flex space-x-10 text-2xl py-10 border-t border-b 
            md:space-x-20"
            >
              <CheckCircle2 className="h-10 w-10 md:h-20 md:w-20" />

              <h3 className="w-72 md:w-80 md:text-3xl">
                Simple adoption, with less downtime
              </h3>

              <p className="hidden md:block md:w-1/2">
                Get tailored support to help your teams easily migrate existing
                data and adopt Delaware.
              </p>
            </div>
          </div>

          <button
            className="bg-white text-black py-5 px-8 
          w-52 rounded-[5px]"
          >
            See how it works
          </button>
        </motion.div>
      </section>

      <section
        className="flex flex-col space-y-10 items-center
      justify-center px-20 bg-white"
      >
        <div className="flex py-20">
          <div className="flex flex-col space-y-6">
            <h3 className="text-gray-800 text-xl px-10">
              DRIVE EFFICIENCY ACROSS TEAMS
            </h3>

            <h2 className="text-4xl w-96 px-10">Manage complex work easily</h2>
            <p className="text-xl text-gray-600 px-10">
              Connect what needs to get done, who is responsible and how to get
              it done.
            </p>

            <div className="items-center space-y-10 p-10 md:flex md:space-x-60">
              <div>
                <Image
                  src="/images/tab-1.webp"
                  alt="image"
                  width={700}
                  height={700}
                />
              </div>

              <div className="space-y-10 border-b border-black pb-1">
                <h2 className="text-3xl">Timeline</h2>
                <p className="w-96 text-xl text-gray-600">
                  See how work maps out over time. Manage dependent,
                  overlapping, and unscheduled tasks—and create plans your team
                  can count on.
                </p>

                <div className="flex cursor-pointer">
                  <h2>Get Started</h2>
                  <ArrowRight className="h-6 w-6 ml-4" />
                </div>
              </div>
            </div>

            <div className="items-center space-y-10 p-10 md:flex md:space-x-60">
              <div>
                <Image
                  src="/images/tab-2.webp"
                  alt="image"
                  width={700}
                  height={700}
                />
              </div>

              <div className="space-y-10 border-b border-black pb-1">
                <h2 className="text-3xl">Boards</h2>
                <p className="w-96 text-xl text-gray-600">
                  Make it easy for your team to focus on tasks currently at
                  hand. Define each stage of work to see what is important and
                  where things are getting stuck.
                </p>

                <div className="flex cursor-pointer">
                  <h2>Get Started</h2>
                  <ArrowRight className="h-6 w-6 ml-4" />
                </div>
              </div>
            </div>

            <div className="items-center space-y-10 p-10 md:flex md:space-x-60">
              <div>
                <Image
                  src="/images/tab-3.webp"
                  alt="image"
                  width={700}
                  height={700}
                />
              </div>

              <div className="space-y-10 border-b border-black pb-1">
                <h2 className="text-3xl">Timeline</h2>
                <p className="w-96 text-xl text-gray-600">
                  See how work maps out over time. Manage dependent,
                  overlapping, and unscheduled tasks—and create plans your team
                  can count on.
                </p>

                <div className="flex cursor-pointer">
                  <h2>Get Started</h2>
                  <ArrowRight className="h-6 w-6 ml-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#28282B]">
        <div className="flex flex-col justify-center md:flex-row md:space-x-10 md:py-10">
          <div className="space-y-4 p-10">
            <h3 className="text-white text-xl">
              STREAMLINE YOUR WORK AND PROCESSES
            </h3>

            <h2 className="text-white text-4xl">
              Prioritize revenue-driving work
            </h2>
            <h3 className="text-white text-xl">
              Connect what needs to get done, who is responsible, and how to get
              it done.
            </h3>

            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-blue-400">
                  Automate your workflows
                </AccordionTrigger>
                <AccordionContent className="text-white border-b">
                  Put tasks on autopilot like assigning work, setting due dates,
                  and more.
                  <div className="flex text-blue-400 pt-4">
                    <h3 className="cursor-pointer">Get Started</h3>
                    <ArrowRight className="h-6 w-6 ml-4" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-yellow-400">
                  Streamline your reports
                </AccordionTrigger>
                <AccordionContent className="text-white border-b">
                  Get real-time insights into progress for any workstream.
                  <div className="flex text-yellow-400 pt-4">
                    <h3 className="cursor-pointer">Get Started</h3>
                    <ArrowRight className="h-6 w-6 ml-4" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-green-500">
                  Mange your intakes
                </AccordionTrigger>
                <AccordionContent className="text-white border-b">
                  Make it easy to collect information and triage incoming
                  requests. and more.
                  <div className="flex text-green-500 pt-4">
                    <h3 className="cursor-pointer">Get Started</h3>
                    <ArrowRight className="h-6 w-6 ml-4" />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-red-400">
                  Connect work to purpose
                </AccordionTrigger>
                <AccordionContent className="text-white border-b">
                  Manage risks and dependencies on company goals for better
                  collaboration with leadership.
                  <div className="flex text-red-400 pt-4">
                    <h3 className="cursor-pointer">Get Started</h3>
                    <ArrowRight className="h-6 w-6 ml-4" />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Image
            src="/images/tab-6.webp"
            alt="Image"
            width={700}
            height={700}
            className="p-10"
          />
        </div>
      </section>

      <section className="w-screen min-h-[200px] bg-white">
        <div className="py-20">
          <Slider width="200px" duration={40} blurBorders={true}>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-15.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-13.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-16.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-17.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-18.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-19.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-14.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-6.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-9.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-5.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-12.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
            <Slider.Slide>
              <Image
                src="/images/logo/logo-7.svg"
                alt="Facebook"
                width={100}
                height={100}
                className="w-20 h-20"
              />
            </Slider.Slide>
          </Slider>
        </div>
      </section>

      <section className="flex flex-col md:py-20 md:p-40 p-10">
        <div className="space-y-4">
          <h3 className="text-gray-800 text-xl px-10">Get started easily</h3>

          <h2 className="text-4xl w-96 px-10">Manage complex work easily</h2>
          <p className="text-xl text-gray-600 px-10">
            Connect what needs to get done, who is responsible and how to get it
            done.
          </p>
        </div>

        <div className="flex flex-col mt-8 mx-10 space-y-4 md:flex-row md:space-x-8 md:[&>*:first-child]:mt-4">
          <ImageCard
            image="/images/tab-1.webp"
            title="Start with a template"
            actionText="View Templates"
          />

          <ImageCard
            image="/images/tab-2.webp"
            title="See Delaware in action"
            actionText="View Demo"
          />
          <ImageCard
            image="/images/tab-3.webp"
            title="Talk to our sales team"
            actionText="Contact Sales"
          />
        </div>
      </section>
    </main>
  );
}
