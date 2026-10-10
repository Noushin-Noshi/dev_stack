import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

export default function App() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then((data) => {
        setTechs(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies");
        setLoading(false);
      });
  }, []);

  const handleAdd = (tech) => {
    if (stack.some((t) => t.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const handleRemove = (tech) => {
    setStack(stack.filter((t) => t.id !== tech.id));
    toast.info(`${tech.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed");
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

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}