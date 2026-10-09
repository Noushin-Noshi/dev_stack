export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm lg:sticky lg:top-24">
      <h3 className="font-bold text-lg">Your Stack</h3>
      <p className="text-sm text-slate-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-4 border border-dashed border-gray-200 rounded-xl py-8 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <ul className="mt-4 grid grid-cols-1 gap-2">
            {stack.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center gap-3 border border-gray-200 rounded-lg p-2"
              >
                <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-tight">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.category}</p>
                </div>
                <button
                  onClick={() => onRemove(tech)}
                  className="text-slate-400 hover:text-red-500 px-2"
                  aria-label={`Remove ${tech.name}`}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full py-2 rounded-lg border border-red-200 text-red-500 font-semibold hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}