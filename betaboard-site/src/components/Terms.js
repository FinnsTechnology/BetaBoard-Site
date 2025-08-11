// src/components/Terms.js
const PRIMARY = "#DB4437";

export default function Terms() {
  return (
    <section id="terms-of-service" className="bg-white text-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            BetaBoard <span style={{ color: PRIMARY }}>Terms of Service</span>
          </h1>
          <p className="mt-3 text-gray-600">
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of BetaBoard. By using our platform, you agree to these Terms.
            If you do not agree, do not use BetaBoard.
          </p>
        </div>

        {/* Sections */}
        <TermsSection
          num="1"
          title="Acceptance of risk"
          items={[
            "You are solely responsible for ensuring your use of BetaBoard complies with all laws and regulations applicable to you.",
            "We do not verify user age or eligibility. By using BetaBoard, you accept all risks and responsibilities for your participation.",
          ]}
        />
        <TermsSection
          num="2"
          title="Your account"
          items={[
            "You are responsible for maintaining the confidentiality of your account and password.",
            "You are responsible for all activity that occurs under your account.",
            "We reserve the right to suspend or terminate accounts for violations of these Terms or our Community Guidelines.",
          ]}
        />
        <TermsSection
          num="3"
          title="Payments and rewards"
          items={[
            "Payments to testers are processed via Stripe. You must provide accurate payout information to receive funds.",
            "Builders are responsible for funding rewards before starting a beta test.",
            "By creating a beta test, builders agree to pay the stated reward amount per tester, the applicable Stripe payment processing fee, and a 20% platform transaction fee to BetaBoard.",
            "We are not responsible for payment failures caused by incorrect information or third-party issues.",
          ]}
        />

        <TermsSection
          num="4"
          title="Prohibited uses"
          items={[
            "Do not use BetaBoard for illegal, harmful, or abusive purposes.",
            "Do not distribute malware, spam, or unauthorized commercial content.",
            "Do not impersonate others or misrepresent your identity or affiliation.",
          ]}
        />
        <TermsSection
          num="5"
          title="Intellectual property"
          items={[
            "All BetaBoard branding, logos, and content are owned by BetaBoard and may not be used without permission.",
            "You retain ownership of your own submitted content but grant us a license to use it to operate and improve the platform.",
          ]}
        />
        <TermsSection
          num="6"
          title="Disclaimer of warranties"
          items={[
            "BetaBoard is provided on an 'as is' and 'as available' basis without warranties of any kind.",
            "We do not guarantee uninterrupted or error-free service.",
          ]}
        />
        <TermsSection
          num="7"
          title="Limitation of liability"
          items={[
            "To the fullest extent permitted by law, BetaBoard is not liable for any damages, losses, or harm resulting from your use of the platform.",
            "Your participation is voluntary and at your own risk.",
          ]}
        />
        <TermsSection
          num="8"
          title="Changes to these Terms"
          items={[
            "We may update these Terms from time to time. Continued use of BetaBoard after changes means you accept the updated Terms.",
          ]}
        />

        {/* Footer note */}
        <div className="mt-10 rounded-xl bg-gray-50 ring-1 ring-gray-200 p-5">
          <p className="text-sm text-gray-700">
            If you have questions about these Terms, contact us at{" "}
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

function TermsSection({ num, title, items }) {
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
