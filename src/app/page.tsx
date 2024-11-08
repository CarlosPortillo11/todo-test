import { CircleUser } from "lucide-react";
import { SignInForm } from "./(auth)/signin/components/SignInForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-screen flex justify-center items-center">
        <div className="py-16 w-1/3 rounded-xl flex flex-col justify-center items-center gap-y-10 shadow-xl">
          <div className="flex flex-col gap-y-2 items-center justify-center">
            <div>
              <CircleUser size={64} />
            </div>
            <h1 className="text-3xl font-medium text-center">
              Welcome to your <span className="text-blue-600">To-Do App</span>
            </h1>
          </div>
          <SignInForm />
          <div className="text-center">
            <p className="text-xs text-gray-400 text-center">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
