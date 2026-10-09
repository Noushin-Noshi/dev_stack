import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center"
    >
      <div>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
          Build Your Ideal <br />
          <span className="text-brand">Development Stack</span>
        </h1>
        <p className="mt-4 text-slate-500 max-w-md">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#technologies" className="btn border-0 text-white bg-brand">
            Explore Technologies
          </a>
          <a
            href="#about"
            className="btn bg-white border border-gray-200 text-slate-600 hover:bg-gray-50"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={heroImg}
          alt="Isometric development stack illustration"
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
}