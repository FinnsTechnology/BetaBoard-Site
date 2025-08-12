import { Link, useSearchParams } from "react-router-dom";
import SuccessLayout from "./SuccessLayout";

export default function CardSuccess() {
  const [params] = useSearchParams();
  const brand = params.get("brand");
  const last4 = params.get("last4");

  return (
    <SuccessLayout
      title="Card added successfully"
      subtitle={
        brand && last4
          ? `We’ll use your ${brand} •••• ${last4} for payouts.`
          : "Your card is now on file."
      }
    >
      <div className="space-y-3">
        <Link
          to="/"
          className="inline-block rounded-xl px-4 py-2 bg-black text-white"
        >
          Back to Home
        </Link>
        {/* <Link
          to="/#howitworks"
          className="block text-sm text-gray-500 underline"
        >
          See how payouts work
        </Link> */}
      </div>
    </SuccessLayout>
  );
}
