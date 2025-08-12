import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { motion, useReducedMotion } from "framer-motion";
import confetti from "canvas-confetti";

export default function SuccessLayout({ title, subtitle, children }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const end = Date.now() + 800;
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, [reduceMotion]);

  return (
    // grow to fill <main> and center with CSS grid
    <div className="w-full flex-1 grid place-items-center px-6 py-16 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="max-w-xl w-full bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-8 text-center"
      >
        <div className="mx-auto mb-4 h-14 w-14 grid place-items-center rounded-full bg-green-50">
          <CheckCircleIcon className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-gray-600 mt-2 mb-6 leading-relaxed">{subtitle}</p>
        )}
        <div className="space-y-3">{children}</div>
      </motion.div>
    </div>
  );
}
