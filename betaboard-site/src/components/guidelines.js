// src/components/Guidelines.js
const PRIMARY = "#DB4437";

export default function Guidelines() {
  return (
    <section
      id="community-guidelines"
      className="bg-[#0A0A0A] text-white pt-16"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            BetaBoard{" "}
            <span style={{ color: PRIMARY }}>Community Guidelines</span>
          </h1>
          <p className="mt-3 text-gray-300">
            Our mission is to create a safe, respectful, and productive space
            where builders and testers collaborate to make better apps. By using
            BetaBoard — including our AI-powered feedback and analytics — you
            agree to the following.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <Guideline
            num="1"
            title="Respect all members"
            items={[
              "Treat builders, testers, and community members with respect.",
              "No harassment, hate speech, personal attacks, or abusive behavior.",
              "Handle disagreements constructively and professionally.",
            ]}
          />
          <Guideline
            num="2"
            title="No illicit or harmful activity"
            items={[
              "Do not engage in illegal activity, fraud, exploitation, or promoting harm.",
              "No malware, harmful software, phishing links, or spam.",
              "Do not solicit unlawful services.",
            ]}
          />
          <Guideline
            num="3"
            title="Privacy & confidentiality"
            items={[
              "Do not share others’ personal or project information without permission.",
              "Get consent before sharing any content outside the platform.",
              "Feedback and analytics may be processed by our AI provider (OpenAI) solely to deliver BetaBoard features; do not submit confidential data you aren’t allowed to share.",
            ]}
          />
          <Guideline
            num="4"
            title="Honest & accurate participation"
            items={[
              "Provide genuine feedback based on actual testing.",
              "Do not falsify test completion or submit fake bug reports.",
              "Builders must accurately describe apps, requirements, and timelines.",
            ]}
          />
          <Guideline
            num="5"
            title="Professional testing conduct"
            items={[
              "Follow builder instructions and meet deadlines.",
              "Avoid spamming submissions or abusing the process.",
              "Repeated failure to meet requirements may affect eligibility for future betas.",
            ]}
          />
          <Guideline
            num="6"
            title="Prohibited content"
            items={[
              "No explicit, pornographic, violent, or hateful content.",
              "No misleading, defamatory, or false information.",
              "Keep content relevant to building and testing.",
            ]}
          />
          <Guideline
            num="7"
            title="Reporting violations"
            items={[
              "Report issues via in-app tools or email us.",
              "All reports are reviewed and appropriate action will be taken.",
            ]}
          />
          <Guideline
            num="8"
            title="Enforcement & consequences"
            items={[
              "Violations may result in warnings, suspension, or permanent removal.",
              "We may remove content or restrict access at our discretion to keep the community safe.",
            ]}
          />
        </div>

        {/* Footer note + contact */}
        <div className="mt-10 rounded-xl bg-white/5 ring-1 ring-white/10 p-5">
          <p className="text-sm text-gray-200">
            By using BetaBoard, you acknowledge that you have read, understood,
            and agree to these Community Guidelines. Questions or concerns?{" "}
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

function Guideline({ num, title, items }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
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
