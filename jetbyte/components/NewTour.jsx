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

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[auto,3fr,auto] min-w-full box-border">
      <p className="text-slate-50/60 text-2xl">
        Ask <span className="text-slate-50/90">Jet</span>
        <span className="text-fuchsia-500 italic">Byte</span> to generate a tour
        for you
        <span className="text-fuchsia-500 animate-ping">_</span>
      </p>
      {isPending && (
        <span className="loading loading-lg text-fuchsia-500"></span>
      )}
      <div className="mt-16">{tour ? <TourInfo tour={tour} /> : null}</div>
      <form onSubmit={handleSubmit} className="w-full lg:max-w-7xl md:mb-9">
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
      {/* <div className="mt-16">{tour ? <TourInfo tour={tour} /> : null}</div> */}
    </div>
  );
};

export default NewTour;
