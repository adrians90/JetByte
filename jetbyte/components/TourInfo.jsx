const TourInfo = ({ tour }) => {
  const { title, description, stops } = tour;
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-semibold mb-4 text-slate-50/90">{title}:</h1>
      <p className="leading-loose text-lg mb-6 text-slate-50/90">
        {description}
      </p>
      <ul>
        {stops.map((stop) => {
          return (
            <li
              key={stop}
              className="mb-4 hover:text-slate-50/90 bg-slate-900 px-2 rounded-xl text-slate-50/70 py-3"
            >
              <p>{stop}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TourInfo;
