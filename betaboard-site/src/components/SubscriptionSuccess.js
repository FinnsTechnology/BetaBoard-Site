import { Link } from "react-router-dom";
import SuccessLayout from "./SuccessLayout";

export default function SubscriptionSuccess() {
  return (
    <SuccessLayout
      title="Subscription Active"
      subtitle="Thanks for subscribing! You can now return to the BetaBoard app."
    >
      <div className="space-y-3">
        <Link
          to="/"
          className="inline-block rounded-xl px-4 py-2 bg-black text-white"
        >
          Back to Home
        </Link>
        {/* You can uncomment or add other helpful links here if needed */}
      </div>
    </SuccessLayout>
  );
}
