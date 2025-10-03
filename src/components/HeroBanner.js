"use client";

import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";

// Handwritten-style font for the brand lockup
const agasthyaFont = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// Brand tokens (kept inline so you can drop this in without config changes)
const BRAND = {
  saffron: "#FFB100", // primary accent (logo color)
  navy: "#0F1D3D",    // dark text for contrast on saffron
  ink: "rgba(255,255,255,0.92)", // readable white for body copy on dark
};

export default function HeroBanner() {
  return (
    <section className="relative w-full">
      {/* Background media */}
      <div className="relative h-[92vh] sm:h-screen overflow-hidden">
        <Image
          src="/Cowh.png"
          alt="Agasthya dairy—sunlit pasture with healthy cows"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark vignette for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/10" />

        {/* Subtle brand auras for depth (very light) */}
        <div
          className="pointer-events-none absolute inset-0 -z-0"
          aria-hidden="true"
        >
          <div
            className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-15"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,177,0,0.28), transparent 65%)",
            }}
          />
          <div
            className="absolute -right-24 top-1/3 h-[520px] w-[520px] rounded-full blur-3xl opacity-10"
            style={{
              background:
                "radial-gradient(closest-side, rgba(15,29,61,0.35), transparent 65%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)] leading-tight font-extrabold text-4xl sm:text-5xl md:text-6xl">
              <span
                className={`${agasthyaFont.className} block text-[1.2em]`}
                style={{ color: BRAND.saffron }}
              >
                Agasthya Nutro Milk
              </span>
              <span className="block mt-1">
                Freshness You Can Trust, Every Day.
              </span>
            </h1>

            <p
              className="mt-5 max-w-2xl text-[15px] sm:text-base md:text-lg leading-7"
              style={{ color: BRAND.ink }}
            >
              Single-source, cold-chain protected A2 milk. Ethical sourcing,
              rigorous testing, and sunrise delivery—engineered for everyday wellness.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {/* Primary CTA (brand saffron) */}
              <Link
                href="/products"
                aria-label="Explore our dairy products"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 font-semibold shadow-[0_8px_28px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  backgroundColor: BRAND.saffron,
                  color: BRAND.navy,
                  boxShadow: "0 12px 36px rgba(255,177,0,0.25)",
                }}
              >
                Explore Our Products
              </Link>

              {/* Secondary CTA (glass/ghost) */}
              <Link
                href="/subscription"
                aria-label="Start your milk subscription"
                className="inline-flex items-center justify-center rounded-2xl border px-6 py-3 font-semibold backdrop-blur-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.14)",
                  color: "white",
                }}
              >
                Milk Subscription
              </Link>
            </div>

            {/* Quick-proof metrics (optional; comment out if not needed) */}
            <ul className="mt-6 flex flex-wrap gap-2 text-xs sm:text-sm">
              {[
                "Cold-chain ≤ 4°C",
                "Delivered by 7:30 AM",
                "Zero preservatives",
              ].map((m) => (
                <li
                  key={m}
                  className="rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-white/90 backdrop-blur-sm"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}



// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { Caveat } from "next/font/google";

// // Handwritten-style font for "Agasthya"
// const agasthyaFont = Caveat({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

// export default function HeroBanner() {
//   return (
//     <section className="relative w-full">
//       <div className="relative h-screen overflow-hidden">
//         {/* Make sure the image path '/Cowh.png' is correct! */}
//         <Image
//           src="/Cowh.png" 
//           alt="Agasthya dairy cow in pasture with sunshine"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover object-center"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

//         <div className="relative z-10 flex h-full items-center px-4 sm:px-8 lg:px-12">
//           <div className="max-w-2xl">
//             <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
//               <span className={`${agasthyaFont.className} text-amber-400`}>
//                 Agasthya Nutro Milk
//               </span>
//               <span className="block mt-2">
//                 Freshness You Can Trust, Every Day
//               </span>
//             </h1>

//             <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 sm:text-xl">
//               Pure, natural, and ethical dairy straight from our farmers to your
//               table.
//             </p>

//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 font-semibold text-white shadow-lg transition transform hover:scale-105 hover:bg-amber-600 hover:shadow-xl"
//               >
//                 Explore Our Products
//               </Link>

//               {/* --- UPDATED: Link now points to the correct subscription page --- */}
//               <Link
//                 href="/subscription"
//                 className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/15 px-7 py-3 font-semibold text-white shadow-lg backdrop-blur-sm transition transform hover:scale-105 hover:bg-white/25 hover:shadow-xl"
//               >
//                 Milk Subscription
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }