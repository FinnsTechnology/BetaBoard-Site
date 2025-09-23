import React from "react";
import { APPLE_LINK } from "../constants/Constants";
export default function TopBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] text-white">
      {/* animated background: only stars */}
      <div className="pointer-events-none absolute inset-0">
        {/* ⭐ Twinkling stars */}
        <span
          className="star sm top-[8%] left-[12%]"
          style={{ "--d": "2.6s", "--delay": "0.2s" }}
        />
        <span
          className="star sm top-[18%] left-[72%]"
          style={{ "--d": "3.2s", "--delay": "0.9s" }}
        />
        <span
          className="star sm top-[32%] left-[28%]"
          style={{ "--d": "2.2s", "--delay": "1.1s" }}
        />
        <span
          className="star sm top-[44%] left-[82%]"
          style={{ "--d": "3.0s", "--delay": "0.4s" }}
        />
        <span
          className="star sm top-[66%] left-[10%]"
          style={{ "--d": "2.8s", "--delay": "1.6s" }}
        />
        <span
          className="star sm top-[74%] left-[56%]"
          style={{ "--d": "2.4s", "--delay": "0.6s" }}
        />
        <span
          className="star sm top-[86%] left-[32%]"
          style={{ "--d": "2.9s", "--delay": "1.3s" }}
        />
        <span
          className="star sm top-[14%] left-[90%]"
          style={{ "--d": "3.3s", "--delay": "0.7s" }}
        />

        {/* medium stars */}
        <span
          className="star md top-[22%] left-[18%]"
          style={{ "--d": "3.6s", "--delay": "0.3s" }}
        />
        <span
          className="star md top-[38%] left-[66%]"
          style={{ "--d": "4.0s", "--delay": "1.0s" }}
        />
        <span
          className="star md top-[58%] left-[40%]"
          style={{ "--d": "3.8s", "--delay": "0.8s" }}
        />
        <span
          className="star md top-[78%] left-[78%]"
          style={{ "--d": "3.5s", "--delay": "1.5s" }}
        />

        {/* large accent stars */}
        <span
          className="star lg top-[28%] left-[84%]"
          style={{ "--d": "4.2s", "--delay": "0.5s", "--hue": "215" }}
        />
        <span
          className="star lg top-[64%] left-[24%]"
          style={{ "--d": "4.4s", "--delay": "1.2s", "--hue": "330" }}
        />
        <span
          className="star lg top-[12%] left-[46%]"
          style={{ "--d": "4.8s", "--delay": "0.1s", "--hue": "10" }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-5xl px-6 pt-16 pb-14 text-center md:pt-20 md:pb-16">
        <p className="mb-3 text-xs tracking-[0.25em] text-gray-300">
          CREATE. CONNECT. ANALYZE.
        </p>

        <h1 className="mx-auto mb-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
          <span className="bg-gradient-to-r from-[#9AE6B4] via-[#60A5FA] to-[#C084FC] bg-clip-text px-2 text-transparent">
            AI-Powered
          </span>{" "}
          Beta Testing
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-7 text-gray-300">
          Launch your beta with an AI-crafted feedback plan — transforming real
          user feedback into analytics, sentiment insights, and clear actions so
          you can improve your app faster.
        </p>

        {/* CTA */}
        <div className="mx-auto mb-6 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={APPLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#DB4437] px-6 py-3 font-semibold text-white shadow-md transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] focus:ring-[#DB4437]"
          >
            <span className="text-xl leading-none"></span>
            <span>Download on the App Store</span>
          </a>
        </div>

        {/* tiny feature bullets */}
        {/* <ul className="mx-auto flex max-w-md items-center justify-center gap-8 text-sm text-gray-300">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DB4437] flex-shrink-0" />
            AI-generated feedback plans
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DB4437] flex-shrink-0" />
            AI-powered insights
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DB4437] flex-shrink-0" />
            Real users - Real Feedback
          </li>
        </ul> */}
      </div>

      {/* local keyframes */}
      <style>{`
        /* ============ STARS ONLY ============ */
        .star {
          --d: 3s;
          --delay: 0s;
          --hue: 0;
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 60%);
          box-shadow:
            0 0 6px rgba(255,255,255,0.35),
            0 0 14px hsla(var(--hue), 80%, 60%, 0.25);
          opacity: .7;
          animation: twinkle var(--d) ease-in-out infinite var(--delay);
          will-change: transform, opacity, filter;
        }
        .star.sm { width: 2px; height: 2px; }
        .star.md { width: 3px; height: 3px; }
        .star.lg { width: 4px; height: 4px; }

        @keyframes twinkle {
          0%, 100% { opacity: .25; transform: scale(0.8); filter: blur(0.4px); }
          50%      { opacity: 1;    transform: scale(1.7); filter: blur(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .star { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
