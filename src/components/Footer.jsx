const linkGroups = {
  Product: ["Home", "Technologies", "Projects"],
  Company: ["About", "Contact", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-brand w-8 h-8 rounded-lg grid place-items-center text-white text-sm font-bold">
              DS
            </span>
            <span className="font-bold text-lg">
              Dev <span className="text-brand">Stack</span>
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-500 max-w-xs">
            Curated technologies, tools, and resources for developers building modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm font-medium text-slate-600">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-600">LinkedIn</a>
          </div>
        </div>

        {Object.entries(linkGroups).map(([title, items]) => (
          <div key={title}>
            <h4 className="font-semibold text-sm">{title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-pink-600">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-600">Privacy</a>
            <a href="#" className="hover:text-pink-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}