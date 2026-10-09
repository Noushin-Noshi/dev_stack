import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="h-[200vh] p-10">
        <h1 className="text-4xl font-bold">
          Dev <span className="text-brand">Stack</span>
        </h1>
      </div>
    </>
  );
}