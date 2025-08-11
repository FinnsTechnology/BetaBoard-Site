// src/components/PrivacyPolicy.js
const PRIMARY = "#DB4437";

export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className="bg-white text-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            BetaBoard <span style={{ color: PRIMARY }}>Privacy Policy</span>
          </h1>
          <p className="mt-3 text-gray-600">Effective Date: August 10, 2025</p>
          <p className="mt-3 text-gray-600">
            We’re committed to protecting your privacy. This policy explains
            what we collect, how we use it, and your choices.
          </p>
        </div>

        {/* Sections */}
        <PolicySection
          num="1"
          title="Information we collect"
          items={[
            "Account details: name, email, password (hashed), and profile info.",
            "Payment & payout info: processed via Stripe. We never store full card or bank numbers.",
            "Testing content: feedback, ratings, bug reports, and messages you submit.",
            "Usage data: IP, device/browser, pages viewed, and timestamps for security and improvements.",
          ]}
        />

        <PolicySection
          num="2"
          title="How we use information"
          items={[
            "Operate and improve BetaBoard, connect builders and testers, and personalize your experience.",
            "Process payments and payouts securely through Stripe.",
            "Communicate about tests, feedback windows, security alerts, and support.",
            "Maintain trust & safety and enforce Community Guidelines.",
            "Analyze aggregated usage to improve performance and features.",
          ]}
        />

        <PolicySection
          num="3"
          title="How we share information"
          items={[
            "We do not sell your personal information.",
            "Stripe: payment method setup, charges, and payouts.",
            "Other users: your display name, avatar, and submitted feedback may be visible where relevant.",
            "Legal: when required by law or to protect rights, safety, and integrity of the platform.",
          ]}
        />

        <PolicySection
          num="4"
          title="Data retention"
          items={[
            "Account and transaction records are retained while your account is active and as required by law (e.g., financial regulations).",
            "You can request deletion; some records may be retained where legally required or for legitimate business interests (e.g., fraud prevention).",
          ]}
        />

        <PolicySection
          num="5"
          title="Your rights"
          items={[
            "Access, update, or delete your personal information.",
            "Request a copy (data portability) and object to or restrict certain processing where applicable.",
            "To exercise rights, contact support@thebetaboard.com.",
          ]}
        />

        <PolicySection
          num="6"
          title="Security"
          items={[
            "We use encryption, access controls, and secure payment processing via Stripe.",
            "No system is 100% secure, but we take reasonable measures to protect against unauthorized access, alteration, or disclosure.",
          ]}
        />

        <PolicySection
          num="7"
          title="Children’s privacy"
          items={[
            "BetaBoard does not knowingly collect personal information from minors. By using BetaBoard, you acknowledge and accept all risks associated with your participation, regardless of age.",
            "If we become aware that personal information has been collected from a minor without consent, we will take steps to delete it promptly.",
          ]}
        />

        <PolicySection
          num="8"
          title="Changes to this policy"
          items={[
            "We may update this policy periodically. We’ll post the updated version with a new Effective Date.",
          ]}
        />

        {/* Footer note + contact */}
        <div className="mt-10 rounded-xl bg-gray-50 ring-1 ring-gray-200 p-5">
          <p className="text-sm text-gray-700">
            Questions about this Privacy Policy?{" "}
            <a
              href="mailto:support@thebetaboard.com"
              className="underline font-medium"
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
    <div className="rounded-2xl bg-white ring-1 ring-gray-200 p-5 mb-6">
      <div className="flex items-start gap-4">
        <div
          className="h-8 w-8 flex items-center justify-center rounded-full text-white font-semibold shrink-0"
          style={{ background: PRIMARY }}
        >
          {num}
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{title}</h2>
          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700">
            {items.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
