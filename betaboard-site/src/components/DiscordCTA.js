import React from "react";
import { BsDiscord } from "react-icons/bs"; // official Discord icon

const DISCORD_COLOR = "#5865F2"; // Discord blurple

export default function DiscordCTA() {
  return (
    <section className="bg-[#0A0A0A] text-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Join the{" "}
            <span className="bg-gradient-to-r from-[#9AE6B4] via-[#60A5FA] to-[#C084FC] bg-clip-text text-transparent">
              BetaBoard Community
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-300">
            Hang out with builders and testers, get early updates, share wins,
            and get help in real time — all in our Discord.
          </p>
        </div>

        {/* card */}
        <div className="mx-auto max-w-3xl rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Discord icon wrapper */}
            <div className="shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
              <BsDiscord className="h-8 w-8" style={{ color: DISCORD_COLOR }} />
            </div>

            {/* copy */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                Be part of the conversation
              </h3>
              <ul className="mt-2 space-y-1 text-gray-300">
                <li className="flex items-center gap-2">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: DISCORD_COLOR }}
                  />
                  Meet builders & testers and swap feedback tips
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: DISCORD_COLOR }}
                  />
                  Sneak peeks at upcoming features & betas
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: DISCORD_COLOR }}
                  />
                  Office hours and Q&A with the team
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="w-full sm:w-auto">
              <a
                href="https://discord.gg/your-invite-code" // replace with real invite
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white transition hover:shadow-lg"
                style={{ background: DISCORD_COLOR }}
              >
                <BsDiscord className="h-5 w-5" />
                Join our Discord
              </a>
            </div>
          </div>

          {/* subtle footnote / guidelines link */}
          <div className="mt-5 text-center text-sm text-gray-400">
            Please read our{" "}
            <a
              href="/community-guidelines"
              className="underline hover:text-white"
            >
              Community Guidelines
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
