import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-950">
      <SignUp routing="hash" />
      <Link
        className="mt-14 btn border hover:text-lime-400 transition:all border-lime-500 text-lime-500 bg-slate-950"
        href="/"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default SignUpPage;
