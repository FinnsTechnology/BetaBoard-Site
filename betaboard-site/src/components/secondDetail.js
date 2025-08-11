export default function SecondDetail() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Switch order on small screens using grid-flow and order classes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Right content (text) — appears first on small screens */}
          <div className="order-1 lg:order-2 text-center lg:text-right">
            <p className="text-gray-500 text-sm font-medium mb-2">
              Share. Review.
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              <span className="text-[#DB4437]">Test</span> &{" "}
              <span className="text-[#DB4437]">Experience</span>
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Get testers, or test someone else’s build.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Download on the App Store
            </a>
          </div>

          {/* Left content (phone) — appears second on small screens */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="w-64 h-128 bg-gray-200 rounded-3xl flex items-center justify-center shadow-lg">
              <span className="text-gray-500">[Phone Placeholder]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
