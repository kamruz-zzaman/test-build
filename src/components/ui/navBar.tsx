"use client";

import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <div>
      <header className="flex items-center h-14 px-4 border-b lg:h-20 md:px-6">
        <Link className="mr-4" href="/">
          <Image
            className="w-60"
            width={100}
            height={100}
            src={"/logo.jpg"}
            alt="logo"
          />
        </Link>
        <nav className="ml-auto flex items-center space-x-4 text-sm font-medium lg:space-x-6">
          <Link
            className="text-gray-900 transition-colors hover:text-gray-900-50 dark:text-gray-50 dark:hover:text-gray-900/50"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-900 transition-colors hover:text-gray-900-50 dark:text-gray-50 dark:hover:text-gray-900/50"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-gray-900 transition-colors hover:text-gray-900-50 dark:text-gray-50 dark:hover:text-gray-900/50"
            href="#"
          >
            Subscription
          </Link>
          <Link
            className="text-gray-900 transition-colors hover:text-gray-900-50 dark:text-gray-50 dark:hover:text-gray-900/50"
            href="/sign-in"
          >
            Sign In
          </Link>
          <Link
            className="font-semibold text-gray-900 transition-colors hover:text-gray-900-50 dark:text-gray-50 dark:hover:text-gray-900/50"
            href="/sign-up"
          >
            Sign Up
          </Link>
        </nav>
      </header>
    </div>
  );
}
