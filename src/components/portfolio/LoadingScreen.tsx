import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="relative size-16">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
              <div className="absolute inset-0 rounded-full border-2 border-t-primary border-r-accent animate-spin" />
            </div>
            <div className="font-display font-bold text-xl text-gradient">Mohamed Ridhwan</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
