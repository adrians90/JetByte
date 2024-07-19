"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  getExistingTour,
  generateTourResponse,
  createNewTour,
} from "@/utils/actions";

import TourInfo from "@/components/TourInfo";
import toast from "react-hot-toast";

const NewTour = () => {
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationFn: async (destination) => {
      const newTour = await generateTourResponse(destination);

      if (newTour) {
        return newTour;
      }
      toast.error("No matching city found...");
      return null;
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };

  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4 font-bold text-slate-50/90">
          Ask JetByte to generate a tour for you
          <span className="text-fuchsia-500 animate-ping transition">__</span>
        </h2>

        <div className="join min-w-full mt-auto">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="City"
            name="city"
            required
          ></input>
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="Country"
            name="country"
            required
          ></input>
          <button
            type="submit"
            disabled={isPending}
            className="btn text-slate-950 font-bold transition:all hover:bg-fuchsia-400 bg-fuchsia-500 join-item"
          >
            {isPending ? "Please wait..." : "Generate Tour"}
          </button>
        </div>
      </form>
      <div className="mt-16">{tour ? <TourInfo tour={tour} /> : null}</div>
    </>
  );
};

export default NewTour;
