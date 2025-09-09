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

import Image from "next/image";
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
import { motion } from "framer-motion";

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const phoneVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function MilkValueShowcase() {
  return (
    <>
      <style jsx>{`
        .halo-pulse {
          animation: subtle-pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes subtle-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    
      <section
        className="relative flex min-h-screen items-center overflow-hidden"
        style={{
          ["--nv"]: "#0F1D3D",
          ["--am"]: "#FFB100",
          ["--cr"]: "#FFF6E5",
          ["--ink"]: "rgba(15,29,61,0.76)",
        }}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 600px at 50% -80px, rgba(255,177,0,0.15) 0%, rgba(255,246,229,0.85) 35%, #FFFFFF 70%)",
          }}
        />

        <motion.div
          className="mx-auto w-full max-w-7xl px-4 py-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
          <motion.h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
            style={{ color: "var(--nv)" }}
            variants={itemVariants}
          >
            Farm-fresh milk,{" "}
            <span
              className="bg-gradient-to-r from-amber-500 to-amber-400 bg-clip-text text-transparent"
            >
              delivered before sunrise
            </span>
          </motion.h2>
          <motion.p className="mt-2 text-base" style={{ color: "var(--ink)" }} variants={itemVariants}>
            We’ve re-imagined your daily milk: traceable farms, cold-chain integrity, and a delightful
            app experience.
          </motion.p>

          {/* Metric ribbon */}
          <motion.div
            className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4"
            variants={itemVariants}
          >
            <Metric label="Cold-chain ≤ 4°C" Icon={ThermometerSnowflake} />
            <Metric label="Delivered by 7:30 AM" Icon={Timer} />
            <Metric label="Zero preservatives" Icon={ShieldCheck} />
            <Metric label="Batch tested daily" Icon={FlaskConical} />
          </motion.div>

          {/* --- UPDATED: Changed grid to 5 columns for better layout control --- */}
          <div className="relative mt-8 grid grid-cols-1 items-center gap-4 lg:grid-cols-5">
            {/* Left stack */}
            {/* --- UPDATED: Adjusted column span --- */}
            <motion.div className="order-2 space-y-3 lg:order-1 lg:col-span-1" variants={itemVariants}>
              <Card
                Icon={Droplet}
                title="Single-source milk"
                copy="Sourced from partner farms with consistent feed & care."
              />
              <Card
                Icon={Leaf}
                title="Naturally rich"
                copy="Full-bodied taste—perfect for tea, coffee, and more."
              />
            </motion.div>

            {/* Center multi-phone image section */}
            {/* --- UPDATED: Adjusted column span and removed fixed widths/heights --- */}
            <motion.div className="order-1 mx-auto w-full lg:order-2 lg:col-span-3" variants={phoneVariants}>
              <div className="relative mx-auto aspect-[1.2/1] w-full max-w-3xl">
                {/* halo */}
                <div
                  className="halo-pulse absolute -inset-10 rounded-[999px] blur-xl"
                  style={{
                    background:
                      "radial-gradient(70% 60% at 50% 35%, rgba(255,177,0,0.35) 0%, rgba(255,246,229,0.7) 40%, rgba(15,29,61,0.07) 100%)",
                  }}
                />
                
                <Image
                  src="/mock.png" 
                  alt="Agasthya Nutro Milk app—subscribe, manage, and track deliveries"
                  fill
                  sizes="(min-width: 1024px) 650px, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            {/* Right stack */}
            {/* --- UPDATED: Adjusted column span --- */}
            <motion.div className="order-3 space-y-3 lg:col-span-1" variants={itemVariants}>
              <Card
                Icon={Truck}
                title="Doorstep by morning"
                copy="Optimized micro-routes bring your milk fresh and fast."
              />
              <Card
                Icon={WalletCards}
                title="UPI & autopay"
                copy="Set & forget. Flexible billing with reminders and retries."
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative orbit (desktop) */}
        <svg
          className="pointer-events-none absolute -top-16 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 lg:block"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle
            cx="100"
            cy="100"
            r="96"
            stroke="rgba(15,29,61,0.18)"
            strokeWidth="0.6"
            strokeDasharray="2 4"
          />
        </svg>
      </section>
    </>
  );
}

/* ---------- pieces ---------- */

function Metric({ label, Icon }) {
  return (
    <div
      className="flex items-center justify-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold"
      style={{
        borderColor: "rgba(15,29,61,0.12)",
        background: "var(--cr)",
        color: "var(--nv)",
      }}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </div>
  );
}

function Card({ Icon, title, copy }) {
  return (
    <motion.div
      className="rounded-xl p-3 text-left shadow-sm"
      style={{
        background: "#fff",
        border: "1px solid rgba(15,29,61,0.08)",
      }}
      whileHover={{ y: -5, scale: 1.03, boxShadow: "0px 10px 20px rgba(15, 29, 61, 0.1)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div
        className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg"
        style={{
          background: "linear-gradient(145deg, var(--cr), #ffffff)",
          border: "1px solid rgba(15,29,61,0.08)",
          color: "var(--nv)",
        }}
      >
        <Icon className="h-4 w-4" />
      </div>
      <h4 className="text-base font-semibold" style={{ color: "var(--nv)" }}>
        {title}
      </h4>
      <p className="mt-0.5 text-sm text-slate-600">{copy}</p>
    </motion.div>
  );
}