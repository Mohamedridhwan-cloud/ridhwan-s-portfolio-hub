import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f);
    f();
    return () => window.removeEventListener("scroll", f);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 size-12 grid place-items-center rounded-full bg-primary text-primary-foreground btn-glow"
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
