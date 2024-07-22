import Link from "next/link";

const TourCard = ({ tour }) => {
  const { city, id, country } = tour;
  return (
    <Link
      href={`/tours/${id}`}
      className="card card-compact rounded-xl bg-fuchsia-500/10 hover:bg-fuchsia-500/40 hover:transform hover:scale-110"
    >
      <div className="card-body items-center text-center">
        <h2 className="card-title text-center text-slate-50/90 hover:text-slate-50">
          {city}, {country}
        </h2>
      </div>
    </Link>
  );
};

export default TourCard;
