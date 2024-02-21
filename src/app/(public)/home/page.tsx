"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Input } from "rizzui";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { NavBar } from "@/components/ui/navBar";

export default function Component() {
  return (
    <div>
      <NavBar />
      <section className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              width={100}
              height={100}
              src={"/images/slider1.jpg"}
              alt="logo"
              className="w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={100}
              height={100}
              src={"/images/slider2.jpg"}
              alt="logo"
              className="w-full"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="w-full py-6 md:py-12 lg:py-16">
        <div className="container flex flex-col gap-10 px-4 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
              About Us
            </h2>
            <p className="max-w-3xl text-gray-500 md:text-xl dark:text-gray-400">
              We are a team of designers and developers who are passionate about
              creating the best tools for the web. Our mission is to empower
              everyone to build beautiful and accessible web experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Our Vision</h3>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                We believe in a web that is open, inclusive, and user-centric.
                Our tools are designed to help you bring your ideas to life
                while prioritizing performance, accessibility, and
                maintainability.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">
                Meet the Team
              </h3>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                Our team is made up of industry experts with years of experience
                in web development, design, and developer experience. We are
                dedicated to pushing the boundaries of what&apos;s possible on
                the web and sharing our knowledge with the community.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white p-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
          Pricing
        </h2>
        <h1 className="mt-2 text-3xl font-bold">
          Choose a plan that’s right for you and your team
        </h1>
        <p className="mt-4 text-gray-600">
          Whether you are a solo entrepreneur, a growing start-up, or a thriving
          enterprise, there is a perfect plan for you. Start your unlimited
          30-day trial today, no credit card is required.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border p-6">
            <h3 className="text-4xl font-bold">
              $9,99 <span className="text-lg">/mth</span>
            </h3>
            <p className="mt-2 text-xl font-semibold">Basic plan</p>
            <p className="mt-4 text-gray-600">Billed annually.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>All essential features</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Some basic integration</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Great security and support</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Up to 10 individual users</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>20GB individual data each user</span>
              </li>
            </ul>
            <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white">
              Try for free
            </Button>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-4xl font-bold">
              $19,99 <span className="text-lg">/mth</span>
            </h3>
            <p className="mt-2 text-xl font-semibold">Business plan</p>
            <p className="mt-4 text-gray-600">Billed annually.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Everything in Basic plan, and:</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Advanced features</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>API Access</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Up to 20 individual users</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>40GB individual data each user</span>
              </li>
            </ul>
            <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white">
              Try for free
            </Button>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-4xl font-bold">
              $39,99 <span className="text-lg">/mth</span>
            </h3>
            <p className="mt-2 text-xl font-semibold">Enterprise plan</p>
            <p className="mt-4 text-gray-600">Billed annually.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Everything in Business plan, and:</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Advanced security</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Access management</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Unlimited individual data</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckIcon className="text-green-500" />
                <span>Personalised+priority service</span>
              </li>
            </ul>
            <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white">
              Try for free
            </Button>
          </div>
        </div>
      </div>
      <footer>
        <div className="container py-12 md:py-24 flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-4xl">
              Ready to get started?
            </h3>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Contact us to learn more about how we can help your team ship
              better, faster.
            </p>
          </div>
          <form className="flex gap-4 md:gap-2 max-w-sm w-full">
            <Input placeholder="Enter your email" required type="email" />
            <Button type="submit">Contact Sales</Button>
          </form>
        </div>
        <div className="border-t border-gray-200 py-4 dark:border-gray-800">
          <div className="container flex items-center justify-between text-sm px-4 md:px-6">
            <p className="text-gray-500 dark:text-gray-400">
              © 2023 Fin Brill. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                className="text-gray-600 hover:underline dark:text-gray-400"
                href="#"
              >
                Terms
              </Link>
              <Link
                className="text-gray-600 hover:underline dark:text-gray-400"
                href="#"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FlagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
