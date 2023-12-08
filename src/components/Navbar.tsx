import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 z-10 flex h-14 items-center border-b border-gray-200 bg-white/75 backdrop-blur-lg">
      <div className="custom-container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">
          <span>Quildoc.</span>
        </Link>
        <ul className="hidden items-center gap-4 sm:flex">
          <li>
            <Link
              href="/pricing"
              className={buttonVariants({ size: "sm", variant: "ghost" })}
            >
              Pricing
            </Link>
          </li>
          <li>
            <LoginLink
              className={buttonVariants({ size: "sm", variant: "ghost" })}
            >
              Sign in
            </LoginLink>
          </li>
          <li>
            <RegisterLink className={buttonVariants({ size: "sm" })}>
              Get Started <ArrowRight className="ml-1.5 h-5 w-5" />
            </RegisterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
