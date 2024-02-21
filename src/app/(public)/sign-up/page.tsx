import { metaObject } from "@/config/site.config";
import SignUpForm from "./sign-up-form";

export const metadata = {
  ...metaObject("Sign In 2"),
};

export default function SignIn() {
  return <SignUpForm />;
}
