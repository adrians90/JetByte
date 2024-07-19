"use client";

import { generateChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { SiOpenaigym } from "react-icons/si";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("An error occurred. Please try again.");
        return;
      }
      setMessages((prev) => [...prev, data]);
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
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto] max-w-7xl relative">
      <div>
        {messages.length === 0 && (
          <p className="text-2xl text-slate-50/60">
            Start a conversation with{" "}
            <span className="text-slate-50/90">Jet</span>
            <span className="text-fuchsia-500 italic">Byte</span>
            <span className="text-fuchsia-500 animate-ping">__</span>
          </p>
        )}
        {messages.map(({ role, content }, index) => {
          const avatar = role == "user" ? "👤" : <SiOpenaigym />;
          const bcg = role === "user" ? "bg-slate-900" : "bg-slate-950";
          return (
            <div
              key={index}
              className={`${bcg} flex text-slate-50/70 hover:text-slate-50/90 items-center py-6 -mx-8 px-5 text-xl leading-loose border-b rounded-xl border-slate-900`}
            >
              <div className="mr-4">{avatar}</div>
              <p className="max-w-3xl text-slate-50/70 hover:text-slate-50/90">
                {content}
              </p>
            </div>
          );
        })}
        {isPending ? (
          <span className="loading text-slate-50/90 text-3xl"></span>
        ) : null}
      </div>
      <form onSubmit={handleSubmit} className="w-full pt-12">
        <div className="join md:mb-9 w-full">
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
