// "use client";

// export default function WhyChooseUs() {
//   return (
//     <section
//       id="why-us"
//       className="scroll-mt-24 bg-[#FAFAFA] py-16 sm:py-20"
//       aria-labelledby="whychooseus-heading"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-10 sm:mb-14">
//           <h2
//             id="whychooseus-heading"
//             className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
//           >
//             Why Choose Us
//           </h2>
//           <p className="mt-3 text-base sm:text-lg text-gray-600">
//             Farm-fresh dairy, transparent sourcing, and certified quality—delivered right to your door.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Card 1 */}
//           <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
//             <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
//               {/* Leaf icon */}
//               <svg width="28" height="28" viewBox="0 0 24 24" className="text-amber-600 fill-none stroke-current" strokeWidth="1.8">
//                 <path d="M3 21c9 0 15-6 15-15v0a9 9 0 0 0-9 9v0c0 3.314-2.686 6-6 6Z" />
//                 <path d="M9 15C9 9 15 3 21 3" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-bold text-center text-gray-900">
//               100% Fresh &amp; Natural
//             </h3>
//             <p className="mt-3 text-center text-gray-600 leading-relaxed">
//               Milk sourced daily from happy herds. No powders, no reconstitution—just pure, fresh nutrition.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
//             <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
//               {/* Badge icon */}
//               <svg width="28" height="28" viewBox="0 0 24 24" className="text-amber-600 fill-none stroke-current" strokeWidth="1.8">
//                 <path d="M8 21v-4l-2-2 2-2-2-2 2-2V5l4-2 4 2v4l2 2-2 2 2 2-2 2v4l-4 2-4-2Z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-bold text-center text-gray-900">
//               Organic &amp; Preservative-Free
//             </h3>
//             <p className="mt-3 text-center text-gray-600 leading-relaxed">
//               Clean, accountable processes. Free from harmful chemicals and artificial preservatives.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
//             <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
//               {/* Temple/Bank icon */}
//               <svg width="28" height="28" viewBox="0 0 24 24" className="text-amber-600 fill-none stroke-current" strokeWidth="1.8">
//                 <path d="M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 22h18M12 2 3 6v2h18V6l-9-4Z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-bold text-center text-gray-900">
//               Direct from Farmers
//             </h3>
//             <p className="mt-3 text-center text-gray-600 leading-relaxed">
//               Fair partnerships with local farmers. Transparent sourcing, traceable batches.
//             </p>
//           </div>

//           {/* Card 4 */}
//           <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
//             <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-50">
//               {/* Truck icon */}
//               <svg width="28" height="28" viewBox="0 0 24 24" className="text-amber-600 fill-none stroke-current" strokeWidth="1.8">
//                 <path d="M3 7h11v10H3zM14 10h3l3 3v4h-6V10z" />
//                 <circle cx="7" cy="19" r="2" />
//                 <circle cx="17" cy="19" r="2" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-bold text-center text-gray-900">
//               Daily Doorstep Delivery
//             </h3>
//             <p className="mt-3 text-center text-gray-600 leading-relaxed">
//               Order by 9 PM, chilled delivery next morning. Freshness maintained through a cold-chain.
//             </p>
//           </div>
//         </div>

//         {/* Conversion strip (nudges toward purchase) */}
//         <div className="mt-10 sm:mt-12 flex flex-col items-center gap-4">
//           <p className="text-gray-700 text-center">
//             Ready to experience farm-fresh goodness?
//           </p>
//           <p className="text-xs text-gray-500">
//             Certified by FSSAI • HACCP • ISO — pure, safe, traceable.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

/**
 * WHY CHOOSE — Agasthya Nutro Milk
 * - Matches the reference: large headline, subhead, 2x3 trust-card grid
 * - Pulls from your story: own organic farms, rigorous QA, no preservatives/mixing,
 *   animal welfare, subscription/vacation mode, exclusive offers
 * - Neutral, premium styling with gold accent
 */

export default function WhyChooseAgasthya() {
  return (
    <section
      id="why-choose-agasthya"
      className="scroll-mt-24 bg-[#F7F8FA] py-16 sm:py-20"
      aria-labelledby="why-choose-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Why Choose Agasthya Nutro Milk?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            We’re dedicated to bringing you the best through our unwavering
            commitment to quality, community, and convenience.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <TrustCard
            icon={
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12c0 5 4 9 8 9s8-4 8-9V7a7 7 0 0 0-7 7c0 3-2 5-5 5-2.8 0-4-2-4-7Z" />
                <path d="M13 7c3.5-3.5 7-3 7-3" />
              </svg>
            }
            title="Farm-Fresh Goodness"
            desc="Pure cow and buffalo milk, fresh eggs, fruits, vegetables, and cereals — sourced directly from our own organic farms and delivered to your table."
          />

          {/* Card 2 */}
          <TrustCard
            icon={
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2 8 5v4l-2 2 2 2-2 2 2 2v4l4 3 4-3v-4l2-2-2-2 2-2-2-2V5l-4-3Z" />
              </svg>
            }
            title="Rich in Nutrients"
            desc="Naturally dense in protein, calcium, and essential vitamins — supporting a healthy lifestyle across all ages."
          />

          {/* Card 3 */}
          <TrustCard
            icon={
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3 3 7v3h18V7l-9-4Z" />
                <path d="M5 10v8m4-8v8m6-8v8m4-8v8M3 22h18" />
              </svg>
            }
            title="Ethical & Sustainable"
            desc="Cattle and hens cared for with utmost attention and nutritious feed. Responsible farming with respect for animals and the environment."
          />

          {/* Card 4 */}
          <TrustCard
            icon={
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 7h11v10H3zM14 10h3l3 3v4h-6V10z" />
                <circle cx="7" cy="19" r="2" /><circle cx="17" cy="19" r="2" />
              </svg>
            }
            title="Convenient Home Delivery"
            desc="Never run out of essentials. Flexible subscriptions tailored to your needs, delivered fresh — no preservatives, no mixing."
          />

          {/* Card 5 */}
          <TrustCard
            icon={
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm16 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path d="M1 18c2-2 4.5-3 6-3s4 1 5 3m11 0c-2-2-4.5-3-6-3s-4 1-5 3" />
              </svg>
            }
            title="Supporting Local Farmers"
            desc="Every purchase sustains our farmer community and keeps value creation within the ecosystem that grows your food."
          />

          {/* Card 6 */}
          <TrustCard
            icon={
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="5" y="2" width="14" height="20" rx="3" />
                <path d="M9 6h6M8 18h8" />
              </svg>
            }
            title="Agasthya App Benefits"
            desc="Manage subscriptions, activate vacation mode, and unlock exclusive offers and savings — all from a simple, user-friendly app."
          />
        </div>
      </div>
    </section>
  );
}

/** Small, reusable card component */
function TrustCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}
