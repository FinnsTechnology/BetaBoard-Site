import FeedbackPhone from "../assets/FeedbackPhone.png";
export default function ThirdDetail() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <p className="text-gray-500 text-sm font-medium mb-2">
              Receive. Refine.
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              <span className="text-[#DB4437]">Earn</span> &{" "}
              <span className="text-[#DB4437]">Improve</span>
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Get feedback from real users, or earn rewards.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Download on the App Store
            </a>
          </div>

          {/* Right content (placeholder phone) */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={FeedbackPhone}
              alt="Discover screen preview"
              className="w-96 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
