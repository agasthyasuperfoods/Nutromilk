// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function CommitmentSection() {
//   return (
//     <section className="bg-white py-16 sm:py-20">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           {/* Image */}
//           <div className="relative rounded-3xl overflow-hidden shadow-sm ring-1 ring-gray-200">
//             <Image
//               src="/OurStory.jpeg" // replace with actual path of your cow image
//               alt="Happy cows grazing in open pasture - Agasthya Nutro Milk farms"
//               width={1400}
//               height={950}
//               priority
//               className="object-cover h-[320px] sm:h-[420px] lg:h-[520px] w-full"
//             />
//           </div>

//           {/* Copy */}
//           <div>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
//               Our Commitment to{" "}
//               <span className="relative inline-block">
//                 <span className="relative z-10">Pure Dairy</span>
//                 <span className="absolute -bottom-1 left-0 w-full h-1 bg-amber-500"></span>
//               </span>
//             </h1>
//             <p className="mt-5 text-lg leading-8 text-gray-700">
//               At <span className="font-semibold">Agasthya Nutro Milk</span>, we
//               operationalize purity at scale. From our own organic farms to your
//               doorstep, every workflow is optimized for quality, consistency, and
//               community impact.
//             </p>
//             <p className="mt-4 text-gray-700">
//               We care for our cattle and hens with nutrient-rich feed and ethical
//               practices, enabling premium milk, eggs, fruits, vegetables, and
//               cereals—delivered <em>fresh</em>, without preservatives or mixing.
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-wrap gap-4">
//               {/* Primary Button */}
//               <Link
//                 href="/products"
//                 className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-md shadow transition"
//               >
//                 Explore Our Products
//               </Link>

//               {/* Secondary Button */}
//               <Link
//                 href="/#why-choose-agasthya"
//                 className="bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 font-semibold py-3 px-6 rounded-md transition"
//               >
//                 Why Choose Us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
// If you wanted to use the special font here too, you would import it like in the HeroBanner
// import { Caveat } from "next/font/google";
// const agasthyaFont = Caveat({ subsets: ["latin"] });

export default function CommitmentSection() {
  return (
    <section
      className="relative flex h-[560px] items-center justify-center overflow-hidden sm:h-[640px] lg:h-[720px]"
      aria-labelledby="commitment-heading"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline // Important for mobile browsers
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
        poster="/OurStory.jpeg" // A fallback image while the video loads
      >
        <source src="/Farm_to_Table_Milk_Video_Concept.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-Transparent Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-black/40 bg-gradient-to-t from-black/50 via-transparent" />

      {/* Centered Text Content */}
      <div className="relative z-20 mx-auto max-w-3xl px-6 text-center text-white">
        <h1
          id="commitment-heading"
          // CHANGED: Replaced inline style with Tailwind's drop-shadow utility
          className="text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
        >
          Our Commitment to Pure Dairy
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-50">
          At <span className="font-semibold">Agasthya Nutro Milk</span>, we
          believe in purity you can trace. From our own organic farms to your
          doorstep, every drop is a promise of quality, freshness, and ethical care.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* Primary Button - Styles now match HeroBanner */}
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 font-semibold text-white shadow-lg transition transform hover:scale-105 hover:bg-amber-600 hover:shadow-xl"
          >
            Explore Our Products
          </Link>

          {/* Secondary "Ghost" Button - Styles now match HeroBanner */}
          <Link
            href="/#why-choose-us" // Ensure an element with id="why-choose-us" exists on your page
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-neutral-800"
          >
            Why Choose Us
          </Link>
        </div>
      </div>
    </section>
  );
}