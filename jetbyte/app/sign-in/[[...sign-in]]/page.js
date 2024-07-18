import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-950">
      <SignIn routing="hash" />
    </div>
  );
};

export default SignInPage;
