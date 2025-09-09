// import Image from "next/image";
// import Link from "next/link";

// export default function HeroBanner() {
//   return (
//     <section className="bg-[#FAFAF8]">
//       <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
//         <div className="grid items-center gap-10 md:grid-cols-2">
          
//           {/* Left: Text content */}
//           <div>
//             <h1 className="text-4xl leading-[1.1] font-extrabold text-black sm:text-5xl md:text-6xl">
//               Freshness from <br /> Farm to Your <br /> Family Table
//             </h1>

//             <p className="mt-6 text-lg text-gray-600">
//               At Agasthya Nutro Milk, we believe in bringing you the purest,
//               most nutritious dairy products, directly from our happy cows
//               and dedicated farmers.
//             </p>

//             <div className="mt-8 flex flex-wrap gap-4">
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//               >
//                 Explore Our Products
//               </Link>

//               <Link
//                 href="/farmers"
//                 className="inline-flex items-center justify-center rounded-md border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100"
//               >
//                 Learn About Our Farmers
//               </Link>
//             </div>
//           </div>

//           {/* Right: Image */}
//           <div className="relative w-full h-[350px] md:h-[420px]">
//             <Image
//               src="/Heb.png"
//               alt="Agasthya Dairy Products"
//               fill
//               className="object-cover rounded-xl shadow-md"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";

// Handwritten-style font for "Agasthya"
const agasthyaFont = Caveat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function HeroBanner() {
  return (
    <section className="relative w-full">
      <div className="relative h-screen overflow-hidden">
        {/* Make sure the image path '/Cowh.png' is correct! */}
        <Image
          src="/Cowh.png" 
          alt="Agasthya dairy cow in pasture with sunshine"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 flex h-full items-center px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
              <span className={`${agasthyaFont.className} text-amber-400`}>
                Agasthya Nutro Milk
              </span>
              <span className="block mt-2">
                Freshness You Can Trust, Every Day
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90 sm:text-xl">
              Pure, natural, and ethical dairy straight from our farmers to your
              table.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 font-semibold text-white shadow-lg transition transform hover:scale-105 hover:bg-amber-600 hover:shadow-xl"
              >
                Explore Our Products
              </Link>

              {/* --- UPDATED: Link now points to the correct subscription page --- */}
              <Link
                href="/subscription"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/15 px-7 py-3 font-semibold text-white shadow-lg backdrop-blur-sm transition transform hover:scale-105 hover:bg-white/25 hover:shadow-xl"
              >
                Milk Subscription
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}