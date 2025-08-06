// src/components/header.js
"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify, Moon } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import GradualSpacing from "@/components/magicui/gradual-spacing";


export default function Header({ user, profileInfo }) {
  const { theme, setTheme } = useTheme();
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
    {
      label: "Feed",
      path: "/feed",
      show: profileInfo,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: !user,
    },
    {
      label: "Activity",
      path: "/activity",
      show: profileInfo?.role === "candidate",
    },
    {
      label: "Resume Analysis",
      path: "/analyzer",
      show: profileInfo?.role === "candidate",
    },
    {
      label: "Jobs",
      path: "/jobs",
      show: !!user,
    },
    {
      label: "Companies",
      path: "/companies",
      show: profileInfo?.role === "candidate",
    },
    {
      label: "Membership",
      path: "/membership",
      show: !!user,
    },
    {
      label: "Account",
      path: "/account",
      show: !!user,
    },
  ];

  // console.log(user)

  return (
    <div>
      <header className="flex h-16 w-full shrink-0 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <AlignJustify className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            {/* <Link className="mr-6 hidden lg:flex" href={"/"}>
            </Link> */}
            <h1 className="text-3xl font-bold">Hire Orbit</h1>

            <div className="grid gap-1 py-4">
              {menuItems.map((menuItem, index) =>
                menuItem.show ? (
                  <Link
                    key={index}
                    href={menuItem.path}
                    className="flex w-full items-center py-3 text-xl  font-semibold"
                  >
                    {menuItem.label}
                  </Link>
                ) : null
              )}
              
              <Moon
                className="cursor-pointer  mt-3 mb-6"
                fill={theme === "dark" ? "light" : "dark"}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              />
              {/* <UserButton afterSignOutUrl="/" /> */}
            </div>
          </SheetContent>
        </Sheet>
        <Link className="hidden lg:flex mr-6 text-3xl font-bold" href={"/"}>
        <GradualSpacing text="Hire Orbit"/>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-3 items-center">
          {menuItems.map((menuItem, index) =>
            menuItem.show ? (
              <Link
                key={index}
                href={menuItem.path}
                onClick={() => sessionStorage.removeItem("filterParams")}
                className="group inline-flex h-9 w-max items-center rounded-md  px-4 py-2 text-sm font-medium hover:transition ease-in-out delay-150 duration-300 hover:border-x-2 hover:border-t-2 hover:border-b-4 hover:border-gray-500"
              >
                {menuItem.label}
              </Link>
            ) : null
          )}
          <Moon
            className="cursor-pointer"
            fill={theme === "dark" ? "light" : "dark"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          <UserButton className="z-50" afterSignOutUrl="/" />
        </nav>
      </header>
    </div>
  );
}
