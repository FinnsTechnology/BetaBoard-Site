import { Link, useSearchParams } from "react-router-dom";
import SuccessLayout from "./SuccessLayout";

export default function BankSuccess() {
  const [params] = useSearchParams();
  const bank = params.get("bank"); // e.g., "Chase"
  const last4 = params.get("last4"); // e.g., account last4

  return (
    <SuccessLayout
      title="Bank account linked"
      subtitle={
        bank && last4
          ? `${bank} •••• ${last4} is connected for transfers.`
          : "Your bank account is connected for transfers."
      }
    >
      <div className="space-y-3">
        <Link
          to="/"
          className="inline-block rounded-xl px-4 py-2 bg-black text-white"
        >
          Back to Home
        </Link>
        {/* <Link to="/#faq" className="block text-sm text-gray-500 underline">
          View payout FAQs
        </Link> */}
      </div>
    </SuccessLayout>
  );
}
