"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLongRightIcon,
  XMarkIcon,
  GlobeAltIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ListItem } from "./ListItem";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 flex flex-col w-full h-14 z-50 text-2xl">
      {showTop && (
        <div
          className="flex flex-col items-center justify-center w-screen bg-[#285B52]
      text-white text-lg py-2 space-x-8 relative lg:flex-row max-lg:text-base"
        >
          <span className="max-lg:text-center max-lg:pb-2">
            Now available: Delaware Intelligence has joined the team with a
            smarter way to work
          </span>

          <Link href="/" className="flex items-center space-x-2">
            <h2 className="underline">Learn More</h2>
            <ArrowLongRightIcon className="h-6 w-6 mt-1" />
          </Link>

          <XMarkIcon
            className="h-6 w-6 absolute right-10 max-lg:bottom-2 
            cursor-pointer"
            onClick={() => setShowTop(false)}
          />
        </div>
      )}

      <div
        className={`flex items-center justify-between px-4
       ${scrolled ? "shadow-sm bg-[#E5E4E2]" : ""} max-h-[100px] xl:px-60
       transition duration-500`}
      >
        <div className="relative w-40 h-40">
          <Link href="/">
            <Image
              src="images/delaware-colored.svg"
              alt="logo"
              fill
              className="flex-shrink-0 cursor-pointer"
            />
          </Link>
        </div>

        <div className="hidden 2xl:inline-flex">
          <div className="z-50">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>

                  <NavigationMenuContent className="bg-white">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="bg-[#E5E4E2] flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Image
                              src="/images/delaware-colored.svg"
                              alt="logo"
                              width={200}
                              height={200}
                            />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Delaware
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              The Best Platform for Cross-Functional Work
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/" title="Product">
                        Learn about the project goals and how to get started.
                      </ListItem>
                      <ListItem href="/" title="Demo">
                        Check out a demo project.
                      </ListItem>
                      <ListItem href="/" title="Community">
                        Join the community and get help with your project.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/product" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Solutions
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/product" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Resources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/product" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Products
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center ml-52">
            <div className="flex items-center border-r border-black px-3">
              <GlobeAltIcon className="h-6 w-6 text-black cursor-pointer" />
            </div>

            <div
              className="flex items-center space-x-7 px-4 cursor-pointer
            whitespace-nowrap"
            >
              <Link href="/contact">
                <h2 className="text-base font-medium">Contact Sales</h2>
              </Link>
              <h2 className="text-base font-medium mx-3">Sign In</h2>
              <button
                className="bg-black text-white rounded-[3px]
              py-2 px-4 text-base font-medium hover:opacity-80
              transition duration-300 ease-out"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="2xl:hidden">
          <Sheet open={mobileMenu} onOpenChange={setMobileMenu}>
            <SheetTrigger>
              <Bars4Icon className="h-10 w-10 text-black" />
            </SheetTrigger>
            <SheetContent side={"right"} className="bg-white">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>

              <div
                className="flex flex-col mt-10 space-y-4 text-2xl
              text-black"
              >
                <Link onClick={() => setMobileMenu(false)} href="/">
                  Home
                </Link>
                <Link onClick={() => setMobileMenu(false)} href="/product">
                  Products
                </Link>
                <Link onClick={() => setMobileMenu(false)} href="/pricing">
                  Pricing
                </Link>
                <Link onClick={() => setMobileMenu(false)} href="/contact">
                  Contact
                </Link>
                <Link onClick={() => setMobileMenu(false)} href="/">
                  Sign In
                </Link>
                <Link onClick={() => setMobileMenu(false)} href="/">
                  Get Started
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
