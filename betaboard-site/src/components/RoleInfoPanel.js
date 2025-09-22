import React, { useMemo, useRef, useEffect, useState } from "react";
import {
  UsersIcon, // Both
} from "@heroicons/react/24/solid";
import {
  UserIcon, // Testers
  BriefcaseIcon, // Builders
} from "@heroicons/react/24/outline";

const BRAND_RED = "#DB4437";

/** Small helper that animates height to the content’s natural height */
function AutoHeight({ activeKey, children, className = "" }) {
  const ref = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // temporarily set height to 'auto' to measure, then animate to that px value
    el.style.height = "auto";
    const target = el.scrollHeight;
    el.style.height = height; // reset to previous height to start transition
    // next frame -> set to measured height
    requestAnimationFrame(() => {
      setHeight(`${target}px`);
    });
    // re-run when the active tab changes or content changes
  }, [activeKey, children]); // eslint-disable-line

  return (
    <div
      className={className}
      style={{
        height,
        transition: "height 380ms ease",
        overflow: "hidden",
      }}
    >
      <div ref={ref}>{children}</div>
    </div>
  );
}

const ROLES = [
  {
    key: "both",
    label: "Both",
    icon: UsersIcon,
    blurb: "Run betas, test apps, and keep everything in one place.",
    points: [
      "Launch a beta with an AI-crafted feedback plan.",
      "Join other builders’ tests to earn rewards.",
      "Get analytics, sentiment, and clear actions to improve faster.",
    ],
  },
  {
    key: "testers",
    label: "Testers",
    icon: UserIcon,
    blurb: "Discover new apps, test builds, and get rewarded.",
    points: [
      "Receive a tailored, AI-generated feedback plan from each builder.",
      "Submit structured feedback and bug reports in minutes.",
      "See sentiment/analytics rolled up from real users — including you.",
    ],
  },
  {
    key: "builders",
    label: "Builders",
    icon: BriefcaseIcon,
    blurb: "Ship better builds with real user insight.",
    points: [
      "Launch your beta and automatically give testers a feedback plan.",
      "AI turns real feedback into analytics, sentiment, and action items.",
      "Track progress and iterate faster with clear next steps.",
    ],
  },
];

export default function RoleInfoPanel() {
  const [active, setActive] = useState("both");
  const activeData = useMemo(
    () => ROLES.find((r) => r.key === active) || ROLES[0],
    [active],
  );

  return (
    <section className="bg-[#0A0A0A] text-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-sm text-gray-400 mb-2">Choose your view</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#9AE6B4] via-[#60A5FA] to-[#C084FC] bg-clip-text text-transparent">
              Builders & Testers
            </span>
          </h2>
        </div>

        {/* Pills */}
        <div className="mx-auto mb-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {ROLES.map(({ key, label, icon: Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={[
                  "group inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold",
                  "ring-1 ring-white/10 transition",
                  isActive ? "bg-white/10" : "hover:bg-white/5",
                ].join(" ")}
                aria-pressed={isActive}
              >
                <span
                  className={[
                    "inline-flex h-8 w-8 items-center justify-center rounded-xl ring-1 ring-white/10",
                    isActive ? "bg-white/20" : "bg-white/10",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4 text-white" />
                </span>
                <span className={isActive ? "text-white" : "text-white/90"}>
                  {label}
                </span>
                {isActive && (
                  <span
                    className="ml-1 inline-block h-1 w-5 rounded-full"
                    style={{ background: BRAND_RED }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Sliding panel */}
        <AutoHeight activeKey={active} className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
            <div className="mb-2 text-xs uppercase tracking-wide text-gray-400">
              {activeData.label}
            </div>

            <h3 className="text-2xl font-semibold mb-2">
              <span className="bg-gradient-to-r from-[#9AE6B4] via-[#60A5FA] to-[#C084FC] bg-clip-text text-transparent">
                {activeData.blurb}
              </span>
            </h3>

            <ul className="mt-3 space-y-2 text-gray-300">
              {activeData.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: BRAND_RED }}
                  />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium text-white shadow-sm transition hover:shadow"
                style={{ background: BRAND_RED }}
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium text-white/90 ring-1 ring-white/10 hover:bg-white/5 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </AutoHeight>
      </div>
    </section>
  );
}
