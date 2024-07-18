import {
  SignedOut,
  SignInButton,
  UserButton,
  SignedIn,
  SignOutButton,
} from "@clerk/nextjs";

import { currentUser } from "@clerk/nextjs/server";

const MemberProfile = async () => {
  const user = await currentUser();
  //   const { userId } = auth();
  return (
    <div className="px-4 flex flex-col items-center gap-2 border rounded-md border-slate-800 p-8">
      <div className="flex justify-center gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <p>{user?.emailAddresses[0].emailAddress}</p>
      </div>
      <button className="btn border hover:text-lime-400 transition:all border-lime-500 text-lime-500 bg-slate-900">
        <SignOutButton />
      </button>
    </div>
  );
};

export default MemberProfile;
