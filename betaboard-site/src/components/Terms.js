// src/components/Terms.js
const PRIMARY = "#DB4437";

export default function Terms() {
  return (
    <section id="terms-of-service" className="bg-[#0A0A0A] text-white pt-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            BetaBoard <span style={{ color: PRIMARY }}>Terms of Service</span>
          </h1>
          <p className="mt-2 text-gray-300">
            Effective Date: September 22, 2025
          </p>
          <p className="mt-3 text-gray-300">
            These Terms of Service (“Terms”) govern your access to and use of
            BetaBoard. By using our platform, you agree to these Terms. If you
            do not agree, do not use BetaBoard.
          </p>
        </div>

        {/* Sections */}
        <TermsSection
          num="1"
          title="Eligibility"
          items={[
            "You must be at least 18 years old to use BetaBoard. We do not knowingly allow anyone under 18 to use the app.",
            "You are responsible for ensuring your use of BetaBoard complies with laws and regulations applicable to you.",
          ]}
        />

        <TermsSection
          num="2"
          title="Your account"
          items={[
            "You are responsible for maintaining the confidentiality of your account and password, and for all activity under your account.",
            "We may suspend or terminate accounts for violations of these Terms or our Community Guidelines.",
          ]}
        />

        <TermsSection
          num="3"
          title="Payments and fees"
          items={[
            "Payments to testers are processed via Stripe. Provide accurate payout details to receive funds.",
            "Builders are responsible for funding rewards before starting a beta.",
            "By creating a beta, builders agree to pay the stated reward per tester, the applicable Stripe payment processing fee, and a 20% platform transaction fee to BetaBoard.",
            "BetaBoard is not responsible for payment failures caused by incorrect information or third-party issues.",
          ]}
        />

        <TermsSection
          num="4"
          title="AI features & providers"
          items={[
            "BetaBoard uses AI to generate feedback plans, summarize tester input, and produce analytics and sentiment insights.",
            "We use OpenAI’s API to provide these features. When you use AI features, relevant content (e.g., feedback, titles, tags, context about a test) may be sent to OpenAI so the feature can work.",
            "Under OpenAI’s API terms, your data is not used to train OpenAI’s public models. It may be retained briefly for abuse monitoring and then deleted.",
            "You grant BetaBoard a license to process, analyze, and transform your submitted content (including via service providers such as OpenAI) solely to operate and improve the platform.",
          ]}
        />

        <TermsSection
          num="5"
          title="User content"
          items={[
            "You retain ownership of your submitted content.",
            "You grant BetaBoard a worldwide, non-exclusive, royalty-free license to host, store, reproduce, modify, display, and distribute your content as necessary to operate BetaBoard (including AI features), enforce policies, and support users.",
            "Do not upload confidential information you are not authorized to share.",
          ]}
        />

        <TermsSection
          num="6"
          title="Prohibited uses"
          items={[
            "Do not use BetaBoard for illegal, harmful, or abusive purposes.",
            "Do not distribute malware, spam, or unauthorized commercial content.",
            "Do not impersonate others or misrepresent your identity or affiliation.",
            "Follow builder instructions; do not falsify test completions or submit fake feedback/bug reports.",
          ]}
        />

        <TermsSection
          num="7"
          title="Intellectual property"
          items={[
            "All BetaBoard branding, logos, and platform content are owned by BetaBoard and may not be used without permission.",
            "These Terms do not grant you any rights to our trademarks or other brand features.",
          ]}
        />

        <TermsSection
          num="8"
          title="Disclaimer of warranties"
          items={[
            "BetaBoard is provided on an “as is” and “as available” basis without warranties of any kind, whether express, implied, or statutory.",
            "We do not guarantee uninterrupted, secure, or error-free service.",
          ]}
        />

        <TermsSection
          num="9"
          title="Limitation of liability"
          items={[
            "To the fullest extent permitted by law, BetaBoard and its affiliates will not be liable for indirect, incidental, special, consequential, or exemplary damages, or loss of profits, data, or goodwill.",
            "Your participation is voluntary and at your own risk.",
          ]}
        />

        <TermsSection
          num="10"
          title="Changes to these Terms"
          items={[
            "We may update these Terms from time to time. We will post the updated version with an updated effective date. Continued use of BetaBoard after changes means you accept the updated Terms.",
          ]}
        />

        {/* Footer note */}
        <div className="mt-10 rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
          <p className="text-sm text-gray-200">
            If you have questions about these Terms, contact us at{" "}
            <a
              href="mailto:support@thebetaboard.com"
              className="underline font-medium hover:text-white"
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
