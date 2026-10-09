import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";

export default function App() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleAdd = (tech) => {
    if (stack.some((t) => t.id === tech.id)) return;
    setStack([...stack, tech]);
  };

  const handleRemove = (tech) => {
    setStack(stack.filter((t) => t.id !== tech.id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />
      <Hero />

      <section id="technologies" className="max-w-7xl mx-auto px-4 pt-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Explore the <span className="text-brand">Technologies</span>
        </h2>
        <p className="mt-1 text-slate-500 text-sm">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_300px] items-start">
          {loading ? (
            <div className="flex justify-center items-center py-20 gap-3 text-slate-500">
              <span className="loading loading-spinner loading-lg"></span>
              <span>Loading technologies...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {techs.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((t) => t.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          )}

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </section>
    </>
  );
}