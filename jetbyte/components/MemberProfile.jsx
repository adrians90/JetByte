import { fetchOrGenerateTokens } from "@/utils/actions";
import {
  SignedOut,
  SignInButton,
  UserButton,
  SignedIn,
  SignOutButton,
} from "@clerk/nextjs";

import { auth, currentUser } from "@clerk/nextjs/server";

const MemberProfile = async () => {
  const user = await currentUser();
  const { userId } = auth();

  await fetchOrGenerateTokens(userId);
  return (
    <section className="px-4 flex flex-col items-center gap-2 p-8">
      <div className="flex justify-center gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <p className="text-slate-50/60 hover:text-slate-50">
          {user?.emailAddresses[0]?.emailAddress}
        </p>
      </div>

      <SignOutButton className="font-bold transition:all text-slate-50/60 hover:text-slate-50" />
    </section>
  );
};

export default MemberProfile;
