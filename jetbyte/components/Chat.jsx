"use client";

import {
  fetchUserTokensById,
  generateChatResponse,
  subtractTokens,
} from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { SiOpenaigym } from "react-icons/si";

const Chat = () => {
  const { userId } = useAuth();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (query) => {
      const currentTokens = await fetchUserTokensById(userId);

      if (currentTokens < 300) {
        toast.error("Token balance too low...");
        return;
      }
      const response = await generateChatResponse([...messages, query]);
      if (!response) {
        toast.error("An error occurred. Please try again.");
        return;
      }
      setMessages((prev) => [...prev, response.message]);
      const newTokens = await subtractTokens(userId, response.tokens);
      toast.success(`${newTokens} tokens remaining...`);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };
  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto] min-w-full box-border">
      <div>
        {messages.length === 0 && (
          <p className="text-2xl text-slate-50/60">
            Start a conversation with{" "}
            <span className="text-slate-50/90">Jet</span>
            <span className="text-fuchsia-500 italic">Byte</span>
            <span className="text-fuchsia-500 animate-ping">_</span>
          </p>
        )}
        {messages.map(({ role, content }, index) => {
          const avatar = role == "user" ? "👤" : <SiOpenaigym />;
          const bcg = role === "user" ? "bg-slate-900" : "bg-slate-950";
          return (
            <div
              key={index}
              className={`${bcg} flex text-slate-50/70 hover:text-slate-50/90 items-center py-6 px-5 w-full text-xl leading-loose border-b rounded-xl border-slate-900`}
            >
              <div className="mr-4">{avatar}</div>
              <p className="max-w-3xl text-slate-50/70 hover:text-slate-50/90">
                {content}
              </p>
            </div>
          );
        })}
        {isPending ? (
          <span className="loading text-fuchsia-500 loading-lg"></span>
        ) : null}
      </div>
      <form onSubmit={handleSubmit} className="pt-12">
        <div className="join md:mb-9 w-full lg:max-w-7xl">
          <input
            type="text"
            placeholder="Message JetByte..."
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn text-slate-950 font-bold transition:all hover:bg-fuchsia-400 bg-fuchsia-500 join-item"
            type="submit"
            disabled={isPending}
          >
            {isPending ? "Please wait..." : "Ask Question"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
