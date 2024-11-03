import { CircleUser } from "lucide-react";
import Link from "next/link";
import { SignUpForm } from "./components/SignUpForm";

export default function SignUp() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="py-16 w-1/3 rounded-xl flex flex-col justify-center items-center gap-y-10 shadow-xl">
          <div className="flex flex-col gap-y-2 items-center justify-center">
            <div>
              <CircleUser size={64} />
            </div>
            <h1 className="text-3xl font-medium text-center">
              Let&apos;s create your{" "}
              <span className="text-blue-600">Account</span>
            </h1>
          </div>
          <SignUpForm />
          <div className="text-center">
            <p className="text-xs text-gray-400 text-center">
              Already have an account?{" "}
              <Link href="/" className="text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
