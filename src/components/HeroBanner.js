import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build Your Next Project <br /> With Confidence
          </h1>
          <p className="mt-6 text-lg text-blue-100 max-w-xl mx-auto lg:mx-0">
            A modern, responsive, and clean starter hero section for your Next.js
            project. Perfect for landing pages and apps.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/get-started"
              className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
            >
              Get Started
            </Link>
            <Link
              href="/learn-more"
              className="px-6 py-3 bg-blue-500 border border-blue-300 font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Content (Image / Illustration) */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/hero-illustration.svg"
            alt="Hero Illustration"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>

      {/* Decorative shape */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
