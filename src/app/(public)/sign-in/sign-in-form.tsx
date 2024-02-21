"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button, Password } from "rizzui";

export default function SignInForm() {
  const router = useRouter();
  return (
    <>
      <div className="w-full gap-10 lg:grid lg:min-h-[600px] lg:grid-cols-2 lg:gap-0 xl:min-h-[600px]">
        <div className="items-center justify-center p-6 lg:flex lg:bg-gray-100 lg:p-10 dark:lg:bg-gray-800">
          <div className="mx-auto grid max-w-[350px] gap-3 lg:max-w-[500px]">
            <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
              “The customer service I received was exceptional. The support team
              went above and beyond to address my concerns.“
            </blockquote>
            <div>
              <div className="font-semibold">Jules Winnfield</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                CEO, Acme Inc
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 xl:p-10">
          <div className="mx-auto w-[350px] space-y-6">
            <div className="space-y-2 text-center">
              <Link href={"/"} aria-label="Site Logo">
                <Image
                  className="w-40 mx-auto"
                  width={100}
                  height={100}
                  src={"/logo.jpg"}
                  alt="logo"
                />
              </Link>

              <h1 className="text-3xl font-bold">Sign in to your account</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Input
                  id="email"
                  label="Email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  defaultValue={"admin@gmail.com"}
                />
              </div>
              <div className="space-y-2">
                <Password
                  defaultValue={"12345678"}
                  label="Password"
                  id="password"
                  required
                />
              </div>
              <Button
                onClick={() => router.push("/dashboard")}
                className="w-full"
                type="submit"
              >
                Sign in
              </Button>
            </div>
            <div className="text-center text-sm">
              Don&apos;t have an account?
              <Link className="underline" href="/sign-up">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
