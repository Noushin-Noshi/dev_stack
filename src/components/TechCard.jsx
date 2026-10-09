export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-pink-100 text-pink-600">
          {badge}
        </span>
      </div>

      <h3 className="mt-3 font-bold">{name}</h3>
      <p className="mt-1 text-sm text-slate-500 flex-1">{description}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span className="px-2 py-1 rounded bg-gray-100 text-slate-600">{category}</span>
        <span className="text-slate-500">{difficulty}</span>
        <span className="ml-auto font-medium text-slate-700">
          <span className="text-yellow-400">★</span> {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className="btn btn-sm mt-4 w-full bg-slate-900 text-white border-0 hover:bg-slate-700 disabled:bg-slate-300 disabled:text-slate-500"
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}