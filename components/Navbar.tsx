"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const routes = [
    {path: "Home", href: "/#home"},
    {path: "Know More", href: "/#body"},
  ]

  const pathname = usePathname();

  return (
    <div className="items-center">
      <div className="bg-white flex justify-between p-2 md:p-4 md:mt-0.5">
        <div>
          <h1 className="md:ml-4">Logo</h1>
        </div>
        <div>
          <ul className="flex">
            {routes.map((route) => (
              <li key={route.path} className={`${pathname === route.href ? "border-b-2" : "" } ${route.path === 'Know More' ? "md:ml-10 ml-6 md:mr-12 mr-2" : "border-b-2" }`}>
                <Link href={route.href}>
                  {route.path}
                </Link>
              </li>
            ))}
            {/* <Link href="/#home">
              <li className="border-b-2">Home</li>
            </Link>
            <Link href="/#body">
              <li className="md:ml-10 ml-6 md:mr-12 mr-2 border-b-2">Know More</li>
            </Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
