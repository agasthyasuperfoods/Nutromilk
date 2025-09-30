// "use client";

// import Image from "next/image";
// import {
//   Droplet,
//   ThermometerSnowflake,
//   ShieldCheck,
//   FlaskConical,
//   Timer,
//   Truck,
//   WalletCards,
//   Milk,
//   Leaf,
// } from "lucide-react";
// import { motion } from "framer-motion";

// /**
//  * Assets needed
//  * - /public/mock.png      (your app screen)
//  *
//  * Usage
//  * <MilkValueShowcase />
//  */

// // Animation variants for Framer Motion
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const phoneVariants = {
//   hidden: { scale: 0.9, opacity: 0 },
//   show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
// };

// export default function MilkValueShowcase() {
//   return (
//     <>
//       {/* We define the custom animation styles here using Styled-JSX, which is built into Next.js */}
//       <style jsx>{`
//         .halo-pulse {
//           animation: subtle-pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }

//         @keyframes subtle-pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.7; }
//         }
//       `}</style>
    
//       <section
//         className="relative flex min-h-screen items-center overflow-hidden"
//         style={{
//           // brand tokens
//           ["--nv"]: "#0F1D3D",
//           ["--am"]: "#FFB100",
//           ["--cr"]: "#FFF6E5",
//           ["--ink"]: "rgba(15,29,61,0.76)",
//         }}
//       >
//         {/* Cream backdrop wash */}
//         <div
//           className="absolute inset-0 -z-10"
//           style={{
//             background:
//               "radial-gradient(1200px 600px at 50% -80px, rgba(255,177,0,0.15) 0%, rgba(255,246,229,0.85) 35%, #FFFFFF 70%)",
//           }}
//         />

//         <motion.div
//           className="mx-auto w-full max-w-7xl px-4 py-8 text-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//         >
//           {/* Heading */}
//           <motion.h2
//             className="text-3xl font-extrabold tracking-tight sm:text-4xl"
//             style={{ color: "var(--nv)" }}
//             variants={itemVariants}
//           >
//             Farm-fresh milk,{" "}
//             <span
//               className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent"
//             >
//               delivered before sunrise
//             </span>
//           </motion.h2>
//           <motion.p className="mt-2 text-base" style={{ color: "var(--ink)" }} variants={itemVariants}>
//             We’ve re-imagined your daily milk: traceable farms, cold-chain integrity, and a delightful
//             app experience.
//           </motion.p>

//           {/* Metric ribbon */}
//           <motion.div
//             className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4"
//             variants={itemVariants}
//           >
//             <Metric label="Cold-chain ≤ 4°C" Icon={ThermometerSnowflake} />
//             <Metric label="Delivered by 6:30 AM" Icon={Timer} />
//             <Metric label="Zero preservatives" Icon={ShieldCheck} />
//             <Metric label="Batch tested daily" Icon={FlaskConical} />
//           </motion.div>

//           {/* Main layout */}
//           <div className="relative mt-8 grid grid-cols-1 items-center gap-4 lg:grid-cols-3">
//             {/* Left stack */}
//             <motion.div className="order-2 space-y-3 lg:order-1" variants={itemVariants}>
//               <Card
//                 Icon={Droplet}
//                 title="Single-source milk"
//                 copy="Sourced from partner farms with consistent feed & care."
//               />
//               <Card
//                 Icon={Leaf}
//                 title="Naturally rich"
//                 copy="Full-bodied taste—perfect for tea, coffee, and more."
//               />
//             </motion.div>

//             {/* Center phone */}
//             <motion.div className="order-1 mx-auto w-full lg:order-2" variants={phoneVariants}>
//               <div className="relative mx-auto h-[400px] w-[200px] sm:h-[480px] sm:w-[240px]">
//                 {/* halo */}
//                 <div
//                   className="halo-pulse absolute -inset-8 rounded-[999px] blur-xl"
//                   style={{
//                     background:
//                       "radial-gradient(70% 60% at 50% 35%, rgba(255,177,0,0.35) 0%, rgba(255,246,229,0.7) 40%, rgba(15,29,61,0.07) 100%)",
//                   }}
//                 />
//                 {/* phone */}
//                 <div
//                   className="relative z-10 h-full w-full rounded-[1.8rem] shadow-2xl"
//                   style={{
//                     backgroundColor: "#ffffff",
//                     border: "1px solid rgba(15,29,61,0.12)",
//                   }}
//                 >
//                   <div
//                     className="absolute left-1/2 top-1.5 z-20 h-1 w-12 -translate-x-1/2 rounded-full"
//                     style={{ backgroundColor: "rgba(15,29,61,0.18)" }}
//                   />
//                   <div className="absolute inset-0 overflow-hidden rounded-[1.8rem]">
//                     <Image
//                       src="/mock.png"
//                       alt="Agasthya Nutro Milk app—subscribe, manage, and track deliveries"
//                       fill
//                       sizes="(min-width:1024px) 240px, 200px"
//                       className="object-cover"
//                       priority
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right stack */}
//             <motion.div className="order-3 space-y-3" variants={itemVariants}>
//               <Card
//                 Icon={Truck}
//                 title="Doorstep by morning"
//                 copy="Optimized micro-routes bring your milk fresh and fast."
//               />
//               <Card
//                 Icon={WalletCards}
//                 title="UPI & autopay"
//                 copy="Set & forget. Flexible billing with reminders and retries."
//               />
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Decorative orbit (desktop) */}
//         <svg
//           className="pointer-events-none absolute -top-16 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 lg:block"
//           viewBox="0 0 200 200"
//           fill="none"
//         >
//           <circle
//             cx="100"
//             cy="100"
//             r="96"
//             stroke="rgba(15,29,61,0.18)"
//             strokeWidth="0.6"
//             strokeDasharray="2 4"
//           />
//         </svg>
//       </section>
//     </>
//   );
// }

// /* ---------- pieces ---------- */

// function Metric({ label, Icon }) {
//   return (
//     <div
//       className="flex items-center justify-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold"
//       style={{
//         borderColor: "rgba(15,29,61,0.12)",
//         background: "var(--cr)",
//         color: "var(--nv)",
//       }}
//     >
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </div>
//   );
// }

// function Card({ Icon, title, copy }) {
//   return (
//     <motion.div
//       className="rounded-xl p-3 text-left shadow-sm"
//       style={{
//         background: "#fff",
//         border: "1px solid rgba(15,29,61,0.08)",
//       }}
//       whileHover={{ y: -5, scale: 1.03, boxShadow: "0px 10px 20px rgba(15, 29, 61, 0.1)" }}
//       transition={{ duration: 0.2, ease: "easeOut" }}
//     >
//       <div
//         className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg"
//         style={{
//           background: "linear-gradient(145deg, var(--cr), #ffffff)",
//           border: "1px solid rgba(15,29,61,0.08)",
//           color: "var(--nv)",
//         }}
//       >
//         <Icon className="h-4 w-4" />
//       </div>
//       <h4 className="text-base font-semibold" style={{ color: "var(--nv)" }}>
//         {title}
//       </h4>
//       <p className="mt-0.5 text-sm text-slate-600">{copy}</p>
//     </motion.div>
//   );
// }





// "use client";

// import Image from "next/image";
// import {
//   Droplet,
//   ThermometerSnowflake,
//   ShieldCheck,
//   FlaskConical,
//   Timer,
//   Truck,
//   WalletCards,
//   Milk,
//   Leaf,
// } from "lucide-react";
// import { motion } from "framer-motion";

// // Animation variants for Framer Motion
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const phoneVariants = {
//   hidden: { scale: 0.9, opacity: 0 },
//   show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
// };

// export default function MilkValueShowcase() {
//   return (
//     <>
//       <style jsx>{`
//         .halo-pulse {
//           animation: subtle-pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }

//         @keyframes subtle-pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.7; }
//         }
//       `}</style>
    
//       <section
//         className="relative flex min-h-screen items-center overflow-hidden"
//         style={{
//           ["--nv"]: "#0F1D3D",
//           ["--am"]: "#FFB100",
//           ["--cr"]: "#FFF6E5",
//           ["--ink"]: "rgba(15,29,61,0.76)",
//         }}
//       >
//         <div
//           className="absolute inset-0 -z-10"
//           style={{
//             background:
//               "radial-gradient(1200px 600px at 50% -80px, rgba(255,177,0,0.15) 0%, rgba(255,246,229,0.85) 35%, #FFFFFF 70%)",
//           }}
//         />

//         <motion.div
//           className="mx-auto w-full max-w-7xl px-4 py-8 text-center"
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//         >
//           {/* Heading */}
//           <motion.h2
//             className="text-3xl font-extrabold tracking-tight sm:text-4xl"
//             style={{ color: "var(--nv)" }}
//             variants={itemVariants}
//           >
//             Farm-fresh milk,{" "}
//             <span
//               className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent"
//             >
//               delivered before sunrise
//             </span>
//           </motion.h2>
//           <motion.p className="mt-2 text-base" style={{ color: "var(--ink)" }} variants={itemVariants}>
//             We’ve re-imagined your daily milk: traceable farms, cold-chain integrity, and a delightful
//             app experience.
//           </motion.p>

//           {/* Metric ribbon */}
//           <motion.div
//             className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4"
//             variants={itemVariants}
//           >
//             <Metric label="Cold-chain ≤ 4°C" Icon={ThermometerSnowflake} />
//             <Metric label="Delivered by 6:30 AM" Icon={Timer} />
//             <Metric label="Zero preservatives" Icon={ShieldCheck} />
//             <Metric label="Batch tested daily" Icon={FlaskConical} />
//           </motion.div>

//           {/* Main layout */}
//           <div className="relative mt-8 grid grid-cols-1 items-center gap-4 lg:grid-cols-3">
//             {/* Left stack */}
//             <motion.div className="order-2 space-y-3 lg:order-1" variants={itemVariants}>
//               <Card
//                 Icon={Droplet}
//                 title="Single-source milk"
//                 copy="Sourced from partner farms with consistent feed & care."
//               />
//               <Card
//                 Icon={Leaf}
//                 title="Naturally rich"
//                 copy="Full-bodied taste—perfect for tea, coffee, and more."
//               />
//             </motion.div>

//             {/* Center phone */}
//             <motion.div className="order-1 mx-auto w-full lg:order-2" variants={phoneVariants}>
//               <div className="relative mx-auto h-[400px] w-[200px] sm:h-[480px] sm:w-[240px]">
//                 {/* halo */}
//                 <div
//                   className="halo-pulse absolute -inset-8 rounded-[999px] blur-xl"
//                   style={{
//                     background:
//                       "radial-gradient(70% 60% at 50% 35%, rgba(255,177,0,0.35) 0%, rgba(255,246,229,0.7) 40%, rgba(15,29,61,0.07) 100%)",
//                   }}
//                 />
//                 {/* phone */}
//                 <div
//                   className="relative z-10 h-full w-full rounded-[1.8rem] shadow-2xl"
//                   style={{
//                     backgroundColor: "#ffffff",
//                     border: "1px solid rgba(15,29,61,0.12)",
//                   }}
//                 >
//                   <div
//                     className="absolute left-1/2 top-1.5 z-20 h-1 w-12 -translate-x-1/2 rounded-full"
//                     style={{ backgroundColor: "rgba(15,29,61,0.18)" }}
//                   />
//                   <div className="absolute inset-0 overflow-hidden rounded-[1.8rem]">
//                     <Image
//                       src="/mock.png"
//                       alt="Agasthya Nutro Milk app—subscribe, manage, and track deliveries"
//                       fill
//                       sizes="(min-width:1024px) 240px, 200px"
//                       // --- UPDATED: Added 'object-top' to prevent the image from being clipped ---
//                       className="object-cover object-top"
//                       priority
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right stack */}
//             <motion.div className="order-3 space-y-3" variants={itemVariants}>
//               <Card
//                 Icon={Truck}
//                 title="Doorstep by morning"
//                 copy="Optimized micro-routes bring your milk fresh and fast."
//               />
//               <Card
//                 Icon={WalletCards}
//                 title="UPI & autopay"
//                 copy="Set & forget. Flexible billing with reminders and retries."
//               />
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Decorative orbit (desktop) */}
//         <svg
//           className="pointer-events-none absolute -top-16 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 lg:block"
//           viewBox="0 0 200 200"
//           fill="none"
//         >
//           <circle
//             cx="100"
//             cy="100"
//             r="96"
//             stroke="rgba(15,29,61,0.18)"
//             strokeWidth="0.6"
//             strokeDasharray="2 4"
//           />
//         </svg>
//       </section>
//     </>
//   );
// }

// /* ---------- pieces ---------- */

// function Metric({ label, Icon }) {
//   return (
//     <div
//       className="flex items-center justify-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold"
//       style={{
//         borderColor: "rgba(15,29,61,0.12)",
//         background: "var(--cr)",
//         color: "var(--nv)",
//       }}
//     >
//       <Icon className="h-4 w-4" />
//       <span>{label}</span>
//     </div>
//   );
// }

// function Card({ Icon, title, copy }) {
//   return (
//     <motion.div
//       className="rounded-xl p-3 text-left shadow-sm"
//       style={{
//         background: "#fff",
//         border: "1px solid rgba(15,29,61,0.08)",
//       }}
//       whileHover={{ y: -5, scale: 1.03, boxShadow: "0px 10px 20px rgba(15, 29, 61, 0.1)" }}
//       transition={{ duration: 0.2, ease: "easeOut" }}
//     >
//       <div
//         className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg"
//         style={{
//           background: "linear-gradient(145deg, var(--cr), #ffffff)",
//           border: "1px solid rgba(15,29,61,0.08)",
//           color: "var(--nv)",
//         }}
//       >
//         <Icon className="h-4 w-4" />
//       </div>
//       <h4 className="text-base font-semibold" style={{ color: "var(--nv)" }}>
//         {title}
//       </h4>
//       <p className="mt-0.5 text-sm text-slate-600">{copy}</p>
//     </motion.div>
//   );
// }


"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Droplet,
  ThermometerSnowflake,
  ShieldCheck,
  FlaskConical,
  Timer,
  Truck,
  WalletCards,
  Leaf,
} from "lucide-react";

/* ---------- Brand Tokens ---------- */
const BRAND = {
  cream: "#FFFBF2",
  saffron: "#FFB100", // company logo/accent color
  navy: "#0F1D3D",
  charcoal: "#4A4A4A",
  ink: "rgba(15,29,61,0.76)",
};

const STEPS = [
  {
    title: "Browse & Discover",
    caption: "Explore farm-fresh staples and bestsellers curated for your location.",
    img: "/V2 Sample v2.jpeg",
    alt: "App home screen showing categories and products",
  },
  {
    title: "Subscribe & Add",
    caption: "Set quantity, choose your delivery cadence, and add to a flexible subscription.",
    img: "/V3 Sample V3.jpeg",
    alt: "Product detail with quantity and subscribe actions",
  },
  {
    title: "Seamless Checkout",
    caption: "Review address, select payment, and place the order with a single tap.",
    img: "/v1 sample.jpeg",
    alt: "Checkout screen with delivery details and payment",
  },
];

/* ---------- Motion Variants ---------- */
const showcaseContainerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const showcaseItemVariants = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } } };
const flowchartContainerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const flowchartItemVariants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 110 } } };

/* ---------- Component ---------- */
export default function Mockup() {
  // Refs to measure image wrappers and band container for arrows
  const bandRef = useRef(null);
  const imgRefs = [useRef(null), useRef(null), useRef(null)];
  const [arrows, setArrows] = useState({ x1: 0, x2: 0, y: 0, ready: false });

  const compute = useCallback(() => {
    const band = bandRef.current;
    const r0 = imgRefs[0].current;
    const r1 = imgRefs[1].current;
    const r2 = imgRefs[2].current;
    if (!band || !r0 || !r1 || !r2) return;

    const bandBox = band.getBoundingClientRect();
    const b0 = r0.getBoundingClientRect();
    const b1 = r1.getBoundingClientRect();
    const b2 = r2.getBoundingClientRect();

    // Centers horizontally between the visible images (not columns)
    const x1 = (b0.right + b1.left) / 2 - bandBox.left;
    const x2 = (b1.right + b2.left) / 2 - bandBox.left;
    // Vertical center aligned to image band
    const y = b1.top + b1.height / 2 - bandBox.top;

    setArrows({ x1, x2, y, ready: true });
  }, []);

  useEffect(() => {
    // Recompute on load, resize, and container size changes
    compute();
    const ro = bandRef.current ? new ResizeObserver(compute) : null;
    if (ro && bandRef.current) ro.observe(bandRef.current);
    const onResize = () => compute();
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
      ro?.disconnect();
    };
  }, [compute]);

  // Helper for Next/Image onLoad to force a recompute once assets render
  const handleImageLoaded = () => compute();

  return (
    <>
      <section className="relative overflow-hidden bg-white min-h-screen py-1 sm:py-5">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[1400px]"
          style={{
            background: `radial-gradient(1400px 800px at 50% -140px, ${BRAND.saffron}1F 0%, ${BRAND.cream} 35%, #FFFFFF 72%)`,
          }}
        />

        <div className="mx-auto w-full max-w-[1600px] px-6 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={showcaseContainerVariants}>
            <motion.h2 variants={showcaseItemVariants} className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl" style={{ color: BRAND.navy }}>
              Farm-fresh milk{" "}
              <span className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent">delivered before sunrise</span>
            </motion.h2>

            <motion.p variants={showcaseItemVariants} className="mt-3 text-base md:text-lg" style={{ color: BRAND.ink }}>
              We’ve re-imagined your daily milk: traceable farms, cold-chain integrity, and a delightful app experience.
            </motion.p>

            {/* Metrics as polished pills */}
            <motion.div variants={showcaseItemVariants} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
              <Metric label="Cold-chain ≤ 4°C" Icon={ThermometerSnowflake} />
              <Metric label="Delivered by 7:30 AM" Icon={Timer} />
              <Metric label="Zero preservatives" Icon={ShieldCheck} />
              <Metric label="Batch tested daily" Icon={FlaskConical} />
            </motion.div>

            {/* Hero strip */}
            <div className="relative mt-10 grid grid-cols-1 items-center gap-4 sm:gap-5 lg:grid-cols-5 lg:gap-5 xl:gap-6 2xl:gap-8">
              <motion.div variants={showcaseItemVariants} className="order-2 space-y-4 lg:order-1 lg:col-span-1">
                <Card Icon={Droplet} title="Single-source milk" copy="Sourced from partner farms with consistent feed & care." rotation={-2} />
                <Card Icon={Leaf} title="Naturally rich" copy="Full-bodied taste—perfect for tea, coffee, and more." rotation={1.5} />
              </motion.div>

              {/* STATIC hero image — no motion */}
              <div className="order-1 mx-auto w-full lg:order-2 lg:col-span-3">
                <div className="relative mx-auto aspect-[9/5] w-full max-w-5xl">
                  <Image
                    src="/Groupmo.png"
                    alt="Agasthya Nutro Milk app showcase"
                    fill
                    sizes="(min-width: 1024px) 60vw, 90vw"
                    className="object-contain"
                    onLoadingComplete={handleImageLoaded}
                    priority
                  />
                </div>
              </div>

              <motion.div variants={showcaseItemVariants} className="order-3 space-y-4 lg:col-span-1">
                <Card Icon={Truck} title="Doorstep by morning" copy="Optimized micro-routes bring your milk fresh and fast." rotation={2} />
                <Card Icon={WalletCards} title="UPI & autopay" copy="Set & forget. Flexible billing with reminders and retries." rotation={-1.5} />
              </motion.div>
            </div>
          </motion.div>

          {/* -------- Flow steps with arrows centered BETWEEN images -------- */}
          <div className="mt-24 pt-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={flowchartContainerVariants}>
              <div className="relative" ref={bandRef}>
                {arrows.ready && (
                  <div className="pointer-events-none absolute inset-0 hidden md:block">
                    <ArrowConnector x={arrows.x1} y={arrows.y} />
                    <ArrowConnector x={arrows.x2} y={arrows.y} />
                  </div>
                )}

                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-10 xl:gap-x-12">
                  <FlowStep step={STEPS[0]} index={0} imgRef={imgRefs[0]} onLoad={handleImageLoaded} />
                  <FlowStep step={STEPS[1]} index={1} imgRef={imgRefs[1]} onLoad={handleImageLoaded} />
                  <FlowStep step={STEPS[2]} index={2} imgRef={imgRefs[2]} onLoad={handleImageLoaded} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Subcomponents ---------- */
function FlowStep({ step, index, imgRef, onLoad }) {
  const { title, caption, img, alt } = step;

  return (
    <motion.div variants={flowchartItemVariants} className="flex w-full flex-col items-center text-center">
      {/* Number badge in saffron */}
      <div className="mb-3 flex h-10 items-center md:h-12">
        <h3 className="text-base font-bold md:text-lg" style={{ color: BRAND.navy }}>
          <span
            className="mr-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs align-text-top ring-1"
            style={{
              backgroundColor: BRAND.saffron,
              color: BRAND.navy,
              boxShadow: "0 2px 6px rgba(255,177,0,0.35)",
              borderColor: "rgba(15,29,61,0.12)",
            }}
          >
            {index + 1}
          </span>
          {title}
        </h3>
      </div>

      {/* Image wrapper referenced for measurements */}
      <div ref={imgRef} className="relative w-full max-w-[520px] h-[360px] sm:h-[420px] md:h-[480px]">
        <Image
          src={img}
          alt={alt ?? title}
          fill
          sizes="(min-width: 1024px) 28vw, 90vw"
          className="object-contain"
          onLoadingComplete={onLoad}
        />
      </div>

      {/* Caption */}
      <p
        className="mt-3 min-h-[48px] md:min-h-[56px] max-w-[520px] text-sm md:text-base leading-[1.45] tracking-normal"
        style={{ color: BRAND.ink }}
      >
        {caption}
      </p>
    </motion.div>
  );
}

function Metric({ label, Icon }) {
  return (
    <div
      className="flex items-center justify-center gap-2 rounded-xl border border-slate-900/10 bg-white/75 px-4 py-2 text-sm font-medium backdrop-blur"
      style={{ color: BRAND.navy }}
      aria-label={label}
    >
      {/* Icon now uses the logo accent color */}
      <Icon className="h-5 w-5" style={{ color: BRAND.saffron }} />
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}

function Card({ Icon, title, copy, rotation = 0 }) {
  return (
    <motion.div
      className="rounded-2xl p-4 text-left"
      style={{
        background: "rgba(255, 255, 255, 0.78)",
        border: "1px solid rgba(15,29,61,0.08)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0px 8px 28px rgba(15, 29, 61, 0.10)",
        rotate: rotation,
      }}
      whileHover={{ y: -6, scale: 1.04, boxShadow: "0px 16px 36px rgba(15, 29, 61, 0.16)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Icon container now paints the glyph in saffron */}
      <div
        className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-900/10"
        style={{ background: `linear-gradient(145deg, ${BRAND.cream}, #ffffff)`, color: BRAND.saffron }}
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="text-base md:text-lg font-semibold" style={{ color: BRAND.navy }}>{title}</h4>
      <p className="mt-1 text-sm md:text-base text-slate-600">{copy}</p>
    </motion.div>
  );
}


/* ---------- Branded Arrow Connector (SVG) ---------- */
/* Positions absolutely using center coordinates (x,y) within the band overlay */
function ArrowConnector({ x, y }) {
  const gradId = `grad-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg
      viewBox="0 0 120 32"
      role="presentation"
      aria-hidden="true"
      className="select-none absolute w-24 h-8 sm:w-28 sm:h-8 md:w-32 md:h-8"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)", filter: "drop-shadow(0 0 6px rgba(15,29,61,0.22))" }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={BRAND.saffron} />
          <stop offset="100%" stopColor={BRAND.navy} />
        </linearGradient>
      </defs>
      <path d="M4 16 H 100" stroke={`url(#${gradId})`} strokeWidth="3.5" strokeLinecap="round" opacity="0.95" />
      <path d="M100 16 L 90 10 M100 16 L 90 22" stroke={BRAND.navy} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

