import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const LINKS = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`glass rounded-2xl flex items-center justify-between px-4 sm:px-6 py-3 transition-all ${
            scrolled ? "shadow-glow" : ""
          }`}
        >
          <button
            onClick={() => go("home")}
            className="font-display font-bold text-lg tracking-tight"
          >
            <span className="text-gradient">MR.</span>
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {LINKS.map(([label, id]) => (
              <li key={id}>
                <button
                  onClick={() => go(id)}
                  className="px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setLight((v) => !v)}
              className="p-2 rounded-lg hover:bg-muted/40 transition"
            >
              {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-muted/40"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden glass rounded-2xl mt-2 p-2 animate-fade-in">
            {LINKS.map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted/40 text-sm"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
