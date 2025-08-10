// src/components/HowItWorks.js
import { useState } from "react";
import {
  UserPlusIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const PRIMARY = "#DB4437";

const STEPS = [
  {
    id: 1,
    title: "Create or Join a beta",
    icon: UserPlusIcon,
    eyebrow: "Step 1",
    body: "Sign up in seconds, choose your interests, and land on Discover — your hub for exploring betas and test runs tailored to you.",
  },

  {
    id: 2,
    title: "Try the build",
    icon: BeakerIcon,
    eyebrow: "Step 2",
    body: "Download and Install the beta through TestFlight, explore features, and follow any tasks the builder shares.",
  },
  {
    id: 3,
    title: "Share feedback",
    icon: ChatBubbleLeftRightIcon,
    eyebrow: "Step 3",
    body: "Submit structured feedback, give a rating, and report bugs or ideas. Earn rewards for helping builders improve their apps.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(1);
  const current = STEPS.find((s) => s.id === active);

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-2">Simple 3-step flow</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            How it <span style={{ color: PRIMARY }}>works</span>
          </h2>
        </div>

        {/* Layout: left list, right details */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left: steps list */}
          <ul className="lg:col-span-2 space-y-3">
            {STEPS.map((s) => {
              const Icon = s.icon;
              const isActive = s.id === active;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => setActive(s.id)}
                    className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ring-1 ring-white/10
                      ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}
                  >
                    <span
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/10 ${
                        isActive ? "bg-white/20" : "bg-white/10"
                      }`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wide text-gray-400">
                        {`Step ${s.id}`}
                      </div>
                      <div
                        className={`text-base sm:text-lg font-semibold ${
                          isActive ? "text-white" : "text-white/90"
                        }`}
                      >
                        {s.title}
                      </div>
                    </div>
                    {/* Active indicator */}
                    <span
                      className={`ml-2 h-2 w-2 rounded-full ${
                        isActive ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right: active details */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
              <div className="mb-2 text-sm text-white">{current.eyebrow}</div>
              <h3 className="text-2xl font-semibold mb-3">
                {current.title.split(" & ").map((chunk, idx, arr) => (
                  <span key={idx}>
                    <span className={idx % 2 === 1 ? "" : ""}>{chunk}</span>
                    {idx < arr.length - 1 && (
                      <span className="mx-1" style={{ color: PRIMARY }}>
                        &
                      </span>
                    )}
                  </span>
                ))}
              </h3>
              <p className="text-white leading-relaxed">{current.body}</p>

              {/* mini bullets for a bit more detail */}
              <ul className="mt-5 space-y-2 text-sm text-white">
                {active === 1 && (
                  <>
                    <li className="whitespace-nowrap font-semibold">
                      Builders
                    </li>
                    <ul className="ml-4">
                      <li className="whitespace-nowrap">
                        • Head to My Tests & Betas to launch your beta
                      </li>
                      <li className="whitespace-nowrap">
                        • Add a payment method for tester rewards
                      </li>
                    </ul>

                    <li className="whitespace-nowrap font-semibold mt-2">
                      Testers
                    </li>
                    <ul className="ml-4">
                      <li className="whitespace-nowrap">
                        • Complete your profile in the Account tab
                      </li>
                      <li className="whitespace-nowrap">
                        • Link your bank account to receive rewards
                      </li>
                    </ul>
                  </>
                )}

                {/* {active === 2 && (
                  <>
                    <li>• Follow tasks, explore features, and record notes</li>
                    <li>• Report bugs with steps, screenshots, and severity</li>
                  </>
                )} */}
                {active === 3 && (
                  <>
                    <li className="whitespace-nowrap font-semibold">
                      Builders
                    </li>
                    <ul className="ml-4">
                      <li className="whitespace-nowrap">
                        • Review structured feedback and tester ratings
                      </li>
                      <li className="whitespace-nowrap">
                        • Use insights to improve your build quickly
                      </li>
                    </ul>

                    <li className="whitespace-nowrap font-semibold mt-2">
                      Testers
                    </li>
                    <ul className="ml-4">
                      <li className="whitespace-nowrap">
                        • Submit structured feedback, give a rating, and report
                        bugs
                      </li>
                      <li className="whitespace-nowrap">
                        • Earn rewards for your valuable input
                      </li>
                    </ul>
                  </>
                )}
              </ul>

              <div className="mt-6">
                <a
                  href="#download"
                  className="inline-block rounded-lg px-5 py-3 font-medium text-white"
                  style={{ background: PRIMARY }}
                >
                  Get started — it’s free
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
