import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950">
      <SignUp routing="hash" />
    </div>
  );
};

export default SignUpPage;
