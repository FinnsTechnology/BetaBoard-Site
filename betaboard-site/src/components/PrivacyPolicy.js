// src/components/PrivacyPolicy.js
const PRIMARY = "#DB4437";

export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="bg-[#0A0A0A] text-white pt-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8 text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">
            BetaBoard <span style={{ color: PRIMARY }}>Privacy Policy</span>
          </h1>
          <p className="mt-3 text-gray-300">
            Effective Date: September 22, 2025
          </p>
          <p className="mt-3 text-gray-300">
            We’re committed to protecting your privacy. This policy explains
            what we collect, how we use it (including our AI features), and your
            choices.
          </p>
        </div>

        {/* Sections */}
        <PolicySection
          num="1"
          title="Information we collect"
          items={[
            "Account details: name, email, password (hashed), and profile info.",
            "Payment & payout info: processed via Stripe. We never store full card or bank numbers.",
            "Testing content: feedback you submit, ratings, bug reports, attachments, and in-app messages.",
            "Usage data: device, browser, IP, pages/actions, and timestamps for security and to improve features.",
          ]}
        />

        <PolicySection
          num="2"
          title="How we use information (including AI)"
          items={[
            "Run the platform: connect builders and testers, enable installs and feedback, and personalize your experience.",
            "Payments & payouts: process tester rewards and builder charges securely through Stripe.",
            "Communication: send test invitations, reminders, security alerts, and support messages.",
            "Trust & safety: prevent abuse, fraud, or violations of our Community Guidelines.",
            "AI features: generate feedback plans tailored to a beta, summarize feedback, and produce analytics and sentiment insights from real user submissions.",
            "Product improvement: analyze aggregated or de-identified usage to improve performance and features.",
          ]}
        />

        <PolicySection
          num="3"
          title="AI processing & OpenAI"
          items={[
            "BetaBoard uses OpenAI’s API to power our AI features — for example, creating feedback plans, summarizing tester input, and generating analytics or sentiment insights.",
            "When you use these features, relevant content (such as feedback, titles, tags, and context about a test) may be sent to OpenAI so the feature can work.",
            "Under OpenAI’s API terms, your data is not used to train their public models. It is retained only briefly for abuse monitoring and then deleted.",
            "We contractually require that data provided to OpenAI is used only to deliver services to BetaBoard and is protected under confidentiality terms.",
          ]}
        />

        <PolicySection
          num="4"
          title="How we share information"
          items={[
            "We do not sell your personal information.",
            "Stripe handles payment methods, charges, and payouts.",
            "Other users: your display name, avatar, and submitted feedback may be visible where relevant to a beta.",
            "Service providers (including OpenAI): we share only what’s needed to operate features under confidentiality and data-processing terms.",
            "Legal: when required by law or to protect rights, safety, and platform integrity.",
          ]}
        />

        <PolicySection
          num="5"
          title="Data retention"
          items={[
            "We retain account and transaction records while your account is active and as required by law.",
            "You can request deletion. Certain records may be retained where legally required or for legitimate interests (e.g., fraud prevention, accounting).",
          ]}
        />

        <PolicySection
          num="6"
          title="Your rights"
          items={[
            "Access, update, or delete your personal information.",
            "Request a copy of your data (portability) and object to or restrict certain processing where applicable.",
            "To exercise rights, contact support@thebetaboard.com.",
          ]}
        />

        <PolicySection
          num="7"
          title="Security"
          items={[
            "We use encryption, access controls, and secure payment processing via Stripe.",
            "No system is 100% secure, but we take reasonable measures to protect against unauthorized access, alteration, or disclosure.",
          ]}
        />

        <PolicySection
          num="8"
          title="Children’s privacy"
          items={[
            "BetaBoard is intended for individuals 18 and older. We do not knowingly allow anyone under 18 to use the app.",
            "If we become aware that a person under 18 has created an account or submitted personal information without appropriate consent, we will delete it promptly.",
          ]}
        />

        <PolicySection
          num="9"
          title="Changes to this policy"
          items={[
            "We may update this policy periodically. We’ll post the updated version with a new Effective Date.",
          ]}
        />

        {/* Footer note + contact */}
        <div className="mt-10 rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
          <p className="text-sm text-gray-200">
            Questions about this Privacy Policy or AI processing?{" "}
            <a
              href="mailto:support@thebetaboard.com"
              className="underline font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
              style={{ color: PRIMARY }}
            >
              support@thebetaboard.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function PolicySection({ num, title, items }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 mb-6">
      <div className="flex items-start gap-4">
        <div
          className="h-8 w-8 flex items-center justify-center rounded-full text-white font-semibold shrink-0"
          style={{ background: PRIMARY }}
        >
          {num}
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{title}</h2>
          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-200">
            {items.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
