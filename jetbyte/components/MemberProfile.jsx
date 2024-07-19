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
    <div className="px-4 flex flex-col items-center gap-2 p-8">
      <div className="flex justify-center gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <p className="text-slate-50/60">
          {user?.emailAddresses[0].emailAddress}
        </p>
      </div>

      <SignOutButton className="btn text-slate-950 font-bold transition:all hover:bg-fuchsia-400 bg-fuchsia-500" />
    </div>
  );
};

export default MemberProfile;
