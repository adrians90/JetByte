import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-r from-slate-950 via-slate-800 to-fuchsia-500/20">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-slate-50">
            Jet<span className="text-fuchsia-500 italic">Byte</span>
          </h1>
          <p className="py-6 text-lg leading-loose text-slate-50">
            Jet<span className="text-fuchsia-500 italic">Byte</span>:{" "}
            <span className="underline">AI-powered</span> {""}
            travel redefined. Personalised trips, real-time updates, and
            seamless experiences. Travel into the future with Jet
            <span className="text-fuchsia-500 italic">Byte</span> !
          </p>
          <Link
            href="/chat"
            className="btn border text-slate-950 font-bold transition:all hover:bg-fuchsia-400 bg-fuchsia-500"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
