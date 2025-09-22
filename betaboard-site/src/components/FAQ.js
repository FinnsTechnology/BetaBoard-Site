// src/components/FAQ.js
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const PRIMARY = "#DB4437";

const FAQS = [
  {
    q: "How do testers get paid?",
    a: "Link your bank account through our secure Stripe integration in the Account tab. After a test run ends and you’ve submitted your feedback, your payout will be added to your in-app balance. When you choose to withdraw, Stripe transfers the funds directly to your linked bank account.",
  },
  {
    q: "Do builders need a payment method?",
    a: "Yes. Builders must add a card on file through our secure Stripe integration before launching a beta. This allows tester rewards to be held in escrow and paid out cleanly once feedback is submitted. If you don’t receive the number of testers you planned for by the end of the feedback window, the unused funds will be automatically returned to your card.",
  },
  {
    q: "Do I need to download TestFlight?",
    a: "Some iOS betas require TestFlight — Apple’s official beta testing app — to install builds. If a beta needs it, you’ll be prompted to download TestFlight from the App Store for free, and invite links will open directly in the app on your phone so you can install the build with one tap.",
  },
  {
    q: "What kind of feedback should I submit?",
    a: "Provide clear, structured feedback with specific steps to reproduce any issues you find, along with a rating of your overall experience. Suggestions for improvements, feature ideas, and notes on the user experience are also highly valued.",
  },
  {
    q: "When are payouts processed?",
    a: "After the feedback window closes for a test run, any earned payouts are added to your in-app balance. Once your balance reaches $50 or more, you can request a withdrawal, and the funds will be sent directly to your linked bank account.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const toggle = (idx) => setOpen((o) => (o === idx ? -1 : idx));

  return (
    <section id="faq" className="bg-[#0A0A0A] text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-400 mb-2">Common questions</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-[#9AE6B4] via-[#60A5FA] to-[#C084FC] bg-clip-text text-transparent">
              Frequently Asked
            </span>{" "}
            <span className="text-white">Questions</span>
          </h2>
          <p className="mt-3 text-gray-300">
            Everything you need to know about betas, payouts, and feedback.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto w-full max-w-2xl space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = idx === open;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-[1px]"
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left 
             focus:outline-none rounded-2xl"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {item.q}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: PRIMARY }}
                  />
                </button>

                {/* Animated panel (grid-rows trick) */}
                <div
                  className={`grid transition-all duration-300 ease-in-out px-5 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-4"
                      : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help CTA */}
        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white transition hover:shadow"
            style={{ background: PRIMARY }}
          >
            Still need help? Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
