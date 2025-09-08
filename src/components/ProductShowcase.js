// "use client";

// import Image from "next/image";
// import Link from "next/link";

// /**
//  * Visual standards:
//  * - Image box: aspect-[4/3], object-contain, padded, neutral bg for PNG transparency.
//  * - No cropping; all assets centered & consistent.
//  * - CTA-only price row.
//  */
// const products = [
//   {
//     key: "veg",
//     title: "Organic Fresh Vegetables",
//     img: "/vegi.png",
//     alt: "Organic fresh vegetables assortment",
//     bullets: ["Seasonal Selection", "Farm-to-Table", "Pesticide-Free"],
//     href: "/products/vegetables",
//   },
//   {
//     key: "milk",
//     title: "Farm Fresh Milk",
//     img: "/Milk.png",
//     alt: "Agasthya farm fresh milk",
//     bullets: ["High in Calcium", "Rich in Protein", "Pure & Unprocessed"],
//     href: "/products/milk",
//   },
//   {
//     key: "eggs",
//     title: "Country Eggs",
//     img: "/Egg.png",
//     alt: "Country eggs in a rustic stack",
//     bullets: ["Free-Range Sourcing", "Protein-Rich", "Naturally Nutritious"],
//     href: "/products/eggs",
//   },
//   {
//     key: "cereal",
//     title: "Breakfast Cereals",
//     img: "/Cereal.png",
//     alt: "Breakfast cereal with milk splash",
//     bullets: ["Whole Grains", "High-Fiber Options", "Kids & Family Friendly"],
//     href: "/products/cereals",
//   },
//   {
//     key: "fruits",
//     title: "Seasonal Fresh Fruits",
//     img: "/Fruit.png",
//     alt: "Seasonal fresh fruit",
//     bullets: ["Handpicked", "Naturally Sweet", "Source-Certified"],
//     href: "/products/fruits",
//   },
// ];

// export default function ProductShowcase() {
//   return (
//     <section
//       id="products"
//       className="scroll-mt-24 bg-white py-16 sm:py-20"
//       aria-labelledby="productshowcase-heading"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-10 sm:mb-14">
//           <h2
//             id="productshowcase-heading"
//             className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
//           >
//             Our Farm-Fresh Selection
//           </h2>
//           <p className="mt-3 text-base sm:text-lg text-gray-600">
//             Precision-curated categories that operationalize freshness and maximize customer delight.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
//           {products.map((p, idx) => (
//             <article
//               key={p.key}
//               className="group rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md flex flex-col overflow-hidden"
//             >
//               {/* Image zone — bulletproof for PNGs and different art ratios */}
//               <div className="relative w-full aspect-[4/3] overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
//                 <div className="absolute inset-0 flex items-center justify-center p-6">
//                   <Image
//                     src={p.img}
//                     alt={p.alt}
//                     fill
//                     sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
//                     className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
//                     priority={idx < 2} // prioritize first row for LCP
//                   />
//                 </div>
//                 {/* subtle top divider accent */}
//                 <div className="absolute bottom-0 inset-x-0 h-px bg-gray-100" />
//               </div>

//               {/* Body */}
//               <div className="flex flex-col p-6">
//                 <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>

//                 <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
//                   {p.bullets.map((b, i) => (
//                     <li key={i} className="leading-relaxed">{b}</li>
//                   ))}
//                 </ul>

//                 {/* CTA row (price slot intentionally replaced with Buy Now) */}
//                 <div className="mt-5 flex items-center justify-end">
//                   <Link
//                     href={p.href}
//                     className="rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600/60"
//                   >
//                     Buy Now
//                   </Link>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

      
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useRef } from "react";

// const products = [
//   {
//     key: "veg",
//     title: "Organic Fresh Vegetables",
//     img: "/vegi.png",
//     alt: "Organic fresh vegetables assortment",
//     bullets: ["Seasonal Selection", "Farm-to-Table", "Pesticide-Free"],
//     href: "/products/vegetables",
//   },
//   {
//     key: "milk",
//     title: "Farm Fresh Milk",
//     img: "/Milk.png",
//     alt: "Agasthya farm fresh milk",
//     bullets: ["High in Calcium", "Rich in Protein", "Pure & Unprocessed"],
//     href: "/products/milk",
//   },
//   {
//     key: "eggs",
//     title: "Country Eggs",
//     img: "/Egg.png",
//     alt: "Country eggs in a rustic stack",
//     bullets: ["Free-Range Sourcing", "Protein-Rich", "Naturally Nutritious"],
//     href: "/products/eggs",
//   },
//   {
//     key: "cereal",
//     title: "Breakfast Cereals",
//     img: "/Cereal.png",
//     alt: "Breakfast cereal with milk splash",
//     bullets: ["Whole Grains", "High-Fiber Options", "Kids & Family Friendly"],
//     href: "/products/cereals",
//   },
//   {
//     key: "fruits",
//     title: "Seasonal Fresh Fruits",
//     img: "/Fruit.png",
//     alt: "Seasonal fresh fruits",
//     bullets: ["Handpicked", "Naturally Sweet", "Source-Certified"],
//     href: "/products/fruits",
//   },
// ];

// export default function ProductShowcaseHorizontal() {
//   const railRef = useRef(null);

//   const scrollByCard = (dir = 1) => {
//     const rail = railRef.current;
//     if (!rail) return;
//     const card = rail.querySelector("[data-card]");
//     const gapPx = 16; // Tailwind gap-4
//     const delta = card ? (card.clientWidth + gapPx) * dir : 320 * dir;
//     rail.scrollBy({ left: delta, behavior: "smooth" });
//   };

//   return (
//     <section
//       id="products"
//       className="scroll-mt-24 bg-white py-16 sm:py-20"
//       aria-labelledby="productshowcase-heading"
//     >
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="mb-6 sm:mb-8 flex items-end justify-between gap-4">
//           <div>
//             <h2
//               id="productshowcase-heading"
//               className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
//             >
//               Our Farm-Fresh Selection
//             </h2>
//             <p className="mt-2 text-gray-600">
//               Curated categories engineered for everyday freshness and superior nutrition.
//             </p>
//           </div>

//           <div className="hidden sm:flex items-center gap-2">
//             <button
//               onClick={() => scrollByCard(-1)}
//               className="rounded-full border border-gray-300 p-2 hover:bg-gray-100 transition"
//               aria-label="Scroll left"
//             >
//               <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
//                 <path d="M15 18l-6-6 6-6" />
//               </svg>
//             </button>
//             <button
//               onClick={() => scrollByCard(1)}
//               className="rounded-full border border-gray-300 p-2 hover:bg-gray-100 transition"
//               aria-label="Scroll right"
//             >
//               <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
//                 <path d="M9 6l6 6-6 6" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="relative">
//           {/* Left fade */}
//           <div className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-8 bg-gradient-to-r from-white to-transparent" />
//           {/* Right fade - slightly smaller */}
//           <div className="pointer-events-none absolute right-0 top-0 h-full w-4 sm:w-6 bg-gradient-to-l from-white to-transparent" />

//           {/* Rail */}
//           <div
//             ref={railRef}
//             className="
//               hide-scrollbar
//               flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2
//               pr-12
//             "
//           >
//             {products.map((p, idx) => {
//               const isLast = idx === products.length - 1;
//               return (
//                 <article
//                   key={p.key}
//                   data-card
//                   className={`
//                     ${isLast ? "snap-end" : "snap-start"}
//                     shrink-0 w-[82%] xs:w-[70%] sm:w-[48%] lg:w-[32%] xl:w-[28%]
//                     rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-md transition
//                     overflow-hidden group
//                   `}
//                 >
//                   <div className="relative w-full aspect-[4/3]">
//                     <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
//                     <div className="absolute inset-0 flex items-center justify-center p-6">
//                       <Image
//                         src={p.img}
//                         alt={p.alt}
//                         fill
//                         sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 28vw"
//                         className="object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
//                         priority={idx < 2}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex flex-col p-6">
//                     <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
//                     <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
//                       {p.bullets.map((b, i) => (
//                         <li key={i}>{b}</li>
//                       ))}
//                     </ul>
//                     <div className="mt-5 flex justify-end">
//                       <Link
//                         href={p.href}
//                         className="rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition"
//                       >
//                         Buy Now
//                       </Link>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Farm Fresh Milk',
    image: '/Milk.png',
    description: 'Pure, unprocessed buffalo milk delivered from our farm to your table within hours. No preservatives, no adulteration.',
    features: ['High in Calcium', 'Rich in Protein', 'Pure & Unprocessed', 'Delivered Fresh Daily'],
  },
  {
    id: 2,
    name: 'Country Eggs',
    image: '/Egg.png',
    description: 'Farm-fresh country eggs from free-range hens fed a natural, nutrient-rich diet. Perfect for a healthy start to your day.',
    features: ['Free-Range Sourcing', 'Protein-Rich', 'Naturally Nutritious'],
  },
  {
    id: 3,
    name: 'Breakfast Cereals',
    image: '/Cereal.png',
    description: 'A wholesome range of breakfast cereals made from whole grains. A healthy, convenient, and delicious meal for the entire family.',
    features: ['Whole Grains', 'High-Fiber Options', 'Kids & Family Friendly'],
  },
  {
    id: 4,
    name: 'Seasonal Fresh Fruits',
    image: '/Fruit.png',
    description: 'A delightful selection of the season\'s best fruits, handpicked for sweetness and quality. Sourced from certified local orchards.',
    features: ['Handpicked', 'Naturally Sweet', 'Source-Certified'],
  },
  {
    id: 5,
    name: 'Organic Fresh Vegetables',
    image: '/vegi.png',
    description: 'Discover the freshest, organically grown vegetables, hand-picked from local farms. Our selection is seasonal, ensuring peak flavor and nutritional value.',
    features: ['Seasonal Selection', 'Farm-to-Table Goodness', 'Pesticide-Free'],
  },
];

function CheckmarkIcon() {
  return (
    <svg
      className="h-6 w-6 flex-shrink-0 text-amber-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FeaturedProduct({ product }) {
  return (
    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
      {/* CHANGED: Rounded corners on image container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="p-8"
        />
      </div>

      <div className="w-full">
        <h3 className="text-3xl font-extrabold tracking-tight text-slate-800">{product.name}</h3>
        <p className="mt-3 text-base text-slate-600">{product.description}</p>
        <ul className="mt-5 space-y-2">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center text-slate-700">
              <CheckmarkIcon />
              <span className="ml-3">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          {/* CHANGED: Rounded corners on button */}
          <button className="w-full rounded-full bg-amber-500 py-3 px-8 text-lg font-semibold text-white shadow-md transition hover:bg-amber-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductListItem({ product, onSelect }) {
  return (
    // CHANGED: Rounded corners on list item card
    <button
      onClick={() => onSelect(product)}
      className="flex w-full items-center space-x-4 rounded-xl p-4 text-left transition-all duration-300 hover:bg-white hover:shadow-md"
    >
      {/* CHANGED: Rounded corners on list item image container */}
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="p-2"
        />
      </div>
      <div className="flex-grow">
        <h4 className="font-bold text-slate-800">{product.name}</h4>
        <ul className="mt-1 space-y-1">
          {product.features.slice(0, 2).map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-slate-500">
              <span className="mr-2 inline-block h-1 w-1 rounded-full bg-amber-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-auto flex-shrink-0">
        {/* CHANGED: Rounded corners on button */}
        <div className="rounded-full bg-amber-500 py-2 px-5 font-semibold text-white shadow-sm">
          Buy Now
        </div>
      </div>
    </button>
  );
}

export default function ProductShowcase() {
  const [featuredProduct, setFeaturedProduct] = useState(products[0]);
  const otherProducts = products.filter((p) => p.id !== featuredProduct.id);

  return (
    <section className="bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Our Farm-Fresh Selection
          </h2>
          <p className="mt-4 text-slate-600 md:text-lg">
            A curated selection of pure, natural, and ethical dairy and farm products.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="w-full">
            <FeaturedProduct product={featuredProduct} />
          </div>
          <div className="w-full space-y-4">
            {otherProducts.map((product) => (
              <ProductListItem
                key={product.id}
                product={product}
                onSelect={setFeaturedProduct}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}