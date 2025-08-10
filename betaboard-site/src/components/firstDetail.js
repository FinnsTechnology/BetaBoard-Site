export default function FirstDetail() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <p className="text-gray-500 text-sm font-medium mb-2">
              <p className="text-gray-500 text-sm font-medium mb-2">
                Create. Connect.
              </p>
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
              <span className="text-[#DB4437]">Build</span> &{" "}
              <span className="text-[#DB4437]">Explore</span>
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Launch your beta, or discover new ones.
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
            <div className="w-64 h-128 bg-gray-200 rounded-3xl flex items-center justify-center shadow-lg">
              <span className="text-gray-500">[Phone Placeholder]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
