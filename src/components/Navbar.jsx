const links = ["Home", "Technologies", "Projects", "About", "Contact"];

function Logo({ className = "" }) {
  return (
    <a href="#home" className={`items-center gap-2 ${className}`}>
      <span className="bg-brand w-8 h-8 rounded-lg grid place-items-center text-white text-sm font-bold">
        DS
      </span>
      <span className="font-bold text-lg">
        Dev <span className="text-brand">Stack</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <Logo className="hidden lg:flex" />
        </div>

        <div className="navbar-center">
          <Logo className="flex lg:hidden" />
          <ul className="hidden lg:flex gap-8 text-sm font-medium text-slate-600">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-pink-600">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-1 sm:gap-3">
          <button className="btn btn-ghost btn-sm">Sign In</button>
          <button className="btn btn-sm rounded-full border-0 text-white bg-pink-600 hover:bg-pink-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}