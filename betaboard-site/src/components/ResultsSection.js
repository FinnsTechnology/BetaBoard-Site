import React from "react";

export default function ResultsSection() {
  return (
    <section className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        {/* Heading */}
        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
          Communities Are{" "}
          <span className="bg-gradient-to-r from-[#9AE6B4] via-[#60A5FA] to-[#C084FC] bg-clip-text text-transparent">
            Seeing Results
          </span>
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-3 max-w-3xl text-center text-lg leading-7 text-gray-300">
          Connecting developers with testers, powered by AI analytics and
          intelligent insights from real user feedback.
        </p>

        {/* Stats grid */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3">
          <Stat number="10K+" label="AI feedback plans generated" />
          <Stat number="95%" label="sentiment accuracy rate" />
          <Stat number="15+" label="app categories supported" />
          <Stat number="25K+" label="successful test runs" />
          <Stat number="5K+" label="active beta projects" />
          <Stat number="15K+" label="actionable insights delivered" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div
        className="text-3xl font-extrabold"
        style={{ color: "#DB4437" }} // brand red
      >
        {number}
      </div>
      <div className="mt-2 text-sm text-gray-400">{label}</div>
    </div>
  );
}
