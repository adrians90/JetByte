import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-950">
      <SignUp />
      <Link
        className="mt-14 btn border text-slate-950 font-bold transition:all hover:bg-fuchsia-400 bg-fuchsia-500"
        href="/"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default SignUpPage;
