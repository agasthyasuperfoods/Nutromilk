// 'use client';

// import Image from 'next/image';
// import { useEffect, useMemo, useRef, useState } from 'react';

// /* ──────────────────────────────────────────────────────────
//  * Utilities
//  * ────────────────────────────────────────────────────────── */
// const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
// const lerp = (a, b, t) => a + (b - a) * t;

// /* ──────────────────────────────────────────────────────────
//  * Inline Milk droplet SVG (fallback)
//  * ────────────────────────────────────────────────────────── */
// function MilkDrop({ className, style }) {
//   return (
//     <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
//       <defs>
//         <linearGradient id="milkBody" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#ffffff" />
//           <stop offset="100%" stopColor="#fff4e5" />
//         </linearGradient>
//         <radialGradient id="sheen" cx="30%" cy="25%" r="40%">
//           <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
//           <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
//         </radialGradient>
//         <filter id="outerGlow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="2" stdDeviation="2.2" floodColor="#f97316" floodOpacity="0.22" />
//         </filter>
//       </defs>
//       <path
//         d="M32 6 C32 6, 15 30, 15 42 C15 53, 23 60, 32 60 C41 60, 49 53, 49 42 C49 30, 32 6, 32 6 Z"
//         fill="url(#milkBody)"
//         stroke="#fcd34d"
//         strokeWidth="1.15"
//         filter="url(#outerGlow)"
//       />
//       <ellipse cx="26" cy="26" rx="9" ry="7" fill="url(#sheen)" />
//     </svg>
//   );
// }

// /* ──────────────────────────────────────────────────────────
//  * Component — Orange rail + droplet.svg riding the line
//  * Requires /public/droplet.svg and /public/journey/*.jpg
//  * ────────────────────────────────────────────────────────── */
// export default function OurJourney() {
//   // Marker image config (your screenshot shows public/droplet.svg)
//   const markerSrc = '/droplet.svg';
//   const markerSize = 72; // px (tall tear)
//   const markerOffsetX = 2; // fine-tune X alignment over the rail (px)

//   // Layout refs
//   const railOverlayRef = useRef(null);
//   const leftColRef = useRef(null);
//   const contentColRef = useRef(null);
//   const sectionRefs = useRef([]);

//   // Animation state
//   const [centers, setCenters] = useState([]);
//   const [percents, setPercents] = useState([]);
//   const [dropY, setDropY] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [visible, setVisible] = useState([]);
//   const [markerOk, setMarkerOk] = useState(true); // fallback guard
//   const targetYRef = useRef(0);
//   const rafRef = useRef(0);

//   // Ensure rail column equals content height
//   const syncLeftHeight = () => {
//     if (!leftColRef.current || !contentColRef.current) return;
//     const h = contentColRef.current.scrollHeight;
//     leftColRef.current.style.minHeight = `${h}px`;
//   };

//   // Stages
//   const stages = useMemo(
//     () => [
//       {
//         id: 'handpicked',
//         index: '01',
//         title: 'Hand-Picked Farmers',
//         image: '/journey/handpicked.jpg',
//         alt: 'Indian dairy farmers with cows/buffaloes and stainless steel milk cans at sunrise',
//         points: [
//           'Partnering with responsible small & mid-size farms.',
//           'Animal-first care, clean water, and balanced feed.',
//           'Milk collected fresh twice daily.',
//         ],
//       },
//       {
//         id: 'farm-factory',
//         index: '02',
//         title: 'Farm → Chilling → Transport',
//         image: '/journey/farm-factory.jpg',
//         alt: 'Milk chilling center with stainless tanks and insulated milk tanker',
//         points: [
//           'Rapid chilling at the collection center locks in freshness.',
//           'Insulated tankers maintain a strict cold chain.',
//           'Optimized time-to-plant protects taste & nutrients.',
//         ],
//       },
//       {
//         id: 'processing',
//         index: '03',
//         title: 'Gentle Processing',
//         image: '/journey/processing.jpg',
//         alt: 'Modern dairy plant with stainless pasteurizers and hygienic lines',
//         points: [
//           'Low-heat, modern processing preserves natural goodness.',
//           'Automated lines ensure hygienic handling.',
//           'Every batch validated for purity & safety.',
//         ],
//       },
//       {
//         id: 'quality',
//         index: '04',
//         title: 'Quality Check & Packing',
//         image: '/journey/quality.jpg',
//         alt: 'Quality lab testing milk and hygienic packaging line for pouches',
//         points: [
//           'Multi-stage QA in lab and on the line.',
//           'Fresh-seal packaging for longer shelf life.',
//           'Delivered chilled — from our plant to your table.',
//         ],
//       },
//     ],
//     []
//   );

//   // Keep refs & visibility array in sync
//   useEffect(() => {
//     sectionRefs.current = sectionRefs.current.slice(0, stages.length);
//     setVisible((v) => {
//       const next = Array(stages.length).fill(false);
//       for (let i = 0; i < Math.min(v.length, next.length); i++) next[i] = v[i];
//       return next;
//     });
//   }, [stages.length]);

//   // Compute section centers and percents
//   const measureCenters = () => {
//     const centerDocY = (el) => {
//       const r = el.getBoundingClientRect();
//       return r.top + window.scrollY + r.height / 2;
//     };
//     const c = sectionRefs.current.map((el) => (el ? centerDocY(el) : 0));
//     const first = c[0];
//     const last = c[c.length - 1];

//     if (!first || !last || last === first) {
//       setCenters(c);
//       setPercents(c.map(() => 0));
//       setProgress(0);
//       return;
//     }
//     setCenters(c);
//     const ps = c.map((y) => (y - first) / (last - first));
//     setPercents(ps);

//     const vpCenter = window.scrollY + window.innerHeight / 2;
//     const t = clamp((vpCenter - first) / (last - first), 0, 1);
//     setProgress(t);
//   };

//   // Initial + responsive measurements
//   useEffect(() => {
//     const onResize = () => {
//       measureCenters();
//       syncLeftHeight();
//     };
//     measureCenters();
//     syncLeftHeight();
//     window.addEventListener('resize', onResize);

//     const t = setTimeout(() => {
//       measureCenters();
//       syncLeftHeight();
//     }, 350);

//     return () => {
//       window.removeEventListener('resize', onResize);
//       clearTimeout(t);
//     };
//   }, []);

//   // Scroll → drop position mapping
//   useEffect(() => {
//     const onScroll = () => {
//       if (!railOverlayRef.current || centers.length === 0) return;
//       const overlayRect = railOverlayRef.current.getBoundingClientRect();
//       const overlayH = overlayRect.height; // sticky viewport height
//       const vpCenter = window.scrollY + window.innerHeight / 2;
//       const first = centers[0];
//       const last = centers[centers.length - 1];

//       const t = clamp((vpCenter - first) / (last - first), 0, 1);
//       setProgress(t);
//       targetYRef.current = t * overlayH;
//       if (!rafRef.current) animate();
//     };

//     const animate = () => {
//       setDropY((prev) => {
//         const next = lerp(prev, targetYRef.current, 0.18);
//         if (Math.abs(next - targetYRef.current) < 0.6) {
//           rafRef.current = 0;
//           return targetYRef.current;
//         } else {
//           rafRef.current = requestAnimationFrame(animate);
//           return next;
//         }
//       });
//     };

//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     window.addEventListener('resize', onScroll);
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//       window.removeEventListener('resize', onScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [centers]);

//   // Reveal-on-scroll
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => {
//         setVisible((prev) => {
//           const next = [...prev];
//           for (const e of entries) {
//             const idx = sectionRefs.current.findIndex((el) => el === e.target);
//             if (idx !== -1) next[idx] = e.isIntersecting || next[idx];
//           }
//           return next;
//         });
//       },
//       { root: null, rootMargin: '0px 0px -20% 0px', threshold: 0.18 }
//     );
//     sectionRefs.current.forEach((el) => el && obs.observe(el));
//     return () => obs.disconnect();
//   }, [stages.length]);

//   return (
//     <section className="relative mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
//       {/* Header */}
//       <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
//         <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">From Farm to Your Table</h2>
//         <p className="mt-4 text-neutral-600 md:text-lg">Trace our milk’s journey — ethically sourced, gently processed, quality-assured, and delivered chilled every day.</p>
//       </div>

//       {/* Mobile progress */}
//       <div className="md:hidden sticky top-16 z-20 mx-auto mb-8 h-1 w-full max-w-3xl bg-neutral-200/70 rounded">
//         <div aria-hidden className="h-1 rounded bg-orange-500 transition-[width] duration-200" style={{ width: `${Math.round(progress * 100)}%` }} />
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-6 md:gap-10 items-start relative">
//         {/* Left rail */}
//         <div ref={leftColRef} className="relative hidden md:block">
//           {/* Glowing orange rail centered */}
//           <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
//             <div className="w-[4px] h-full rounded bg-gradient-to-b from-orange-200 via-orange-200 to-orange-300" />
//           </div>

//           {/* Sticky overlay */}
//           <div className="sticky top-28 h-screen">
//             <div ref={railOverlayRef} className="relative h-full z-10">
//               {percents.map((p, i) => (
//                 <div key={stages[i].id} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ top: `${p * 100}%` }} title={stages[i].title}>
//                   <div className="relative">
//                     <span className="block w-6 h-6 rounded-full bg-white ring-2 ring-orange-400 shadow-sm" />
//                     <span className="absolute left-8 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-1 rounded-full bg-white/80 backdrop-blur ring-1 ring-orange-200 text-orange-700">{stages[i].index}</span>
//                   </div>
//                 </div>
//               ))}

//               {/* droplet.svg riding the rail with automatic SVG fallback */}
//               <div
//                 className="absolute"
//                 style={{ left: `calc(50% - ${markerSize / 2 - markerOffsetX}px)`, transform: `translateY(${dropY - markerSize / 2}px)` }}
//               >
//                 {markerOk ? (
//                   <Image
//                     src={markerSrc}
//                     alt="Milk droplet"
//                     width={markerSize}
//                     height={markerSize}
//                     priority
//                     draggable={false}
//                     className="select-none object-contain drop-shadow-[0_6px_14px_rgba(249,115,22,0.25)]"
//                     onError={() => setMarkerOk(false)}
//                   />
//                 ) : (
//                   <MilkDrop className="w-10 h-10" />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right content */}
//         <div ref={contentColRef} className="space-y-16 md:space-y-24">
//           {stages.map((s, i) => (
//             <article key={s.id} ref={(el) => (sectionRefs.current[i] = el)} className={[ 'scroll-mt-28 transition-all duration-700 ease-out', visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6', ].join(' ')} aria-label={s.title}>
//               <div className="flex items-center gap-3 mb-4 md:mb-6">
//                 <span className="md:hidden inline-flex items-center justify-center text-xs font-bold rounded-full bg-orange-100 text-orange-700 ring-1 ring-orange-200 h-7 w-7">{s.index}</span>
//                 <h3 className="text-2xl md:text-4xl font-bold text-neutral-900">{s.title}</h3>
//               </div>

//               <div className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 shadow-sm will-change-transform">
//                 <Image src={s.image} alt={s.alt} width={1920} height={1080} priority={i === 0} className="w-full h-[46vw] max-h-[540px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" onLoad={() => { measureCenters(); syncLeftHeight(); }} />
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/5 via-transparent to-transparent" />
//               </div>

//               <ul className="mt-6 space-y-2 text-neutral-700">
//                 {s.points.map((p, k) => (
//                   <li key={k} className="flex gap-2">
//                     <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
//                     <span>{p}</span>
//                   </li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         /* Rail glow animation */
//         .railGlow > div { box-shadow: 0 0 12px rgba(249,115,22,.38); animation: railPulse 2.2s ease-in-out infinite; }
//         @keyframes railPulse {
//           0%, 100% { box-shadow: 0 0 10px rgba(249,115,22,.30); }
//           50% { box-shadow: 0 0 18px rgba(249,115,22,.55); }
//         }
//       `}</style>
//     </section>
//   );
// }







// 'use client';

// import Image from 'next/image';
// import { useEffect, useMemo, useRef, useState } from 'react';

// /* ──────────────────────────────────────────────────────────
//  * Utilities
//  * ────────────────────────────────────────────────────────── */
// const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
// const lerp = (a, b, t) => a + (b - a) * t;

// /* ──────────────────────────────────────────────────────────
//  * Milk droplet (inline)
//  * ────────────────────────────────────────────────────────── */
// function MilkDrop({ className, style }) {
//   return (
//     <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
//       <defs>
//         <linearGradient id="milkBody" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#ffffff" />
//           <stop offset="100%" stopColor="#f7faff" />
//         </linearGradient>
//         <radialGradient id="sheen" cx="30%" cy="25%" r="40%">
//           <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
//           <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
//         </radialGradient>
//         <filter id="outerGlow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="2" stdDeviation="2.2" floodColor="#fb923c" floodOpacity="0.18" />
//         </filter>
//       </defs>
//       <path d="M32 6 C32 6, 15 30, 15 42 C15 53, 23 60, 32 60 C41 60, 49 53, 49 42 C49 30, 32 6, 32 6 Z" fill="url(#milkBody)" stroke="#e5e7eb" strokeWidth="1.1" filter="url(#outerGlow)" />
//       <ellipse cx="26" cy="26" rx="9" ry="7" fill="url(#sheen)" />
//     </svg>
//   );
// }

// /* ──────────────────────────────────────────────────────────
//  * Step Card (images in /public/journey: one.png ... ten.png)
//  * ────────────────────────────────────────────────────────── */
// function StepCard({ s, priority }) {
//   return (
//     <div className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white shadow-sm">
//       <Image
//         src={`/journey/${s.id}.png`}
//         alt={s.alt}
//         width={1200}
//         height={800}
//         priority={priority}
//         sizes="(max-width: 768px) 92vw, 620px"
//         className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
//       />
//     </div>
//   );
// }

// /* ──────────────────────────────────────────────────────────
//  * Component — Alternating (zigzag) layout with a SINGLE sticky rail
//  * ────────────────────────────────────────────────────────── */
// export default function MilkJourneyZigzag() {
//   const dropSize = 56;

//   // Data (10 steps)
//   const steps = useMemo(
//     () => [
//       { id: 'one',   idx: 1,  title: 'Responsible Sourcing',            copy: ['Partner farms under routine vet checks and animal-first care.', 'Traceable farm IDs and compliant housing.'],                                     alt: 'Responsible Indian dairy farms at sunrise' },
//       { id: 'two',   idx: 2,  title: 'Hygienic Milking',                copy: ['Contactless udder prep with pre-/post-dip.', 'Filtered and sealed at source.'],                                              alt: 'Hygienic milking with stainless equipment' },
//       { id: 'three', idx: 3,  title: 'Rapid Chilling (BMC)',            copy: ['Chilled to ≤4 °C within 2 hours to lock freshness.', 'Fat/SNF sampling at arrival.'],                                        alt: 'Bulk Milk Cooler room with digital readouts' },
//       { id: 'four',  idx: 4,  title: 'First-Line QA at Collection',     copy: ['MBRT, antibiotics, and adulteration screens.', 'Immediate rejection protocol for non-compliance.'],                         alt: 'Collection center quick tests' },
//       { id: 'five',  idx: 5,  title: 'Cold-Chain Transport',            copy: ['Insulated tankers with temp telemetry; seals validated.', '≤4 °C SLA maintained in transit.'],                               alt: 'Insulated milk tanker on the highway' },
//       { id: 'six',   idx: 6,  title: 'Clarification & Standardization', copy: ['Residual removal via clarification.', 'Fat/SNF balanced to SKU specification.'],                                               alt: 'Processing line with stainless equipment' },
//       { id: 'seven', idx: 7,  title: 'Pasteurization (HTST)',           copy: ['72 °C × 15 s with automatic CCP recording.', 'Flow diversion if out-of-spec.'],                                               alt: 'Plate heat exchanger and controls' },
//       { id: 'eight', idx: 8,  title: 'Homogenization',                  copy: ['Stable mouthfeel; no cream separation.', 'Pressure ~150–220 bar, SKU-dependent.'],                                           alt: 'Homogenizer gauges close-up' },
//       { id: 'nine',  idx: 9,  title: 'QA Release & Packing',            copy: ['Microbiological clearance and batch coding.', 'FSSAI/AGMARK compliant release.'],                                             alt: 'Pouch/aseptic packing line with coding' },
//       { id: 'ten',   idx: 10, title: 'Cold Storage & Doorstep Delivery',copy: ['FEFO dispatch at 2–4 °C warehousing.', 'Chilled last-mile to retail or home.'],                                              alt: 'Chilled van delivering milk' },
//     ],
//     []
//   );

//   // Refs & animation state (per-step)
//   const railColRef = useRef(null);      // center column wrapper spanning full section height
//   const railOverlayRef = useRef(null);  // sticky viewport overlay INSIDE center column
//   const stepRefs = useRef([]);
//   const [percents, setPercents] = useState([]);
//   const [dropY, setDropY] = useState(0);
//   const targetYRef = useRef(0);
//   const rafRef = useRef(0);

//   useEffect(() => {
//     stepRefs.current = stepRefs.current.slice(0, steps.length);
//   }, [steps.length]);

//   // Measure all step centers and normalize to 0..1
//   const measureCenters = () => {
//     const centerDocY = (el) => {
//       const r = el.getBoundingClientRect();
//       return r.top + window.scrollY + r.height / 2;
//     };
//     const centers = stepRefs.current.map((el) => (el ? centerDocY(el) : 0));
//     const valid = centers.filter(Boolean);
//     const first = Math.min(...valid);
//     const last  = Math.max(...valid);
//     if (!isFinite(first) || !isFinite(last) || last === first) {
//       setPercents(centers.map(() => 0));
//       return;
//     }
//     setPercents(centers.map((y) => (y - first) / (last - first)));
//   };

//   useEffect(() => {
//     const onResize = () => measureCenters();
//     measureCenters();
//     window.addEventListener('resize', onResize);
//     const t = setTimeout(measureCenters, 350);
//     return () => { window.removeEventListener('resize', onResize); clearTimeout(t); };
//   }, []);

//   // Scroll mapping using the FULL list of step centers
//   useEffect(() => {
//     const onScroll = () => {
//       if (!railOverlayRef.current || percents.length === 0) return;
//       const overlayRect = railOverlayRef.current.getBoundingClientRect();
//       const overlayH = overlayRect.height; // sticky viewport height

//       const stepYs = stepRefs.current
//         .map((el) => (el ? el.getBoundingClientRect().top + window.scrollY + el.getBoundingClientRect().height / 2 : 0))
//         .filter(Boolean);
//       const first = Math.min(...stepYs);
//       const last  = Math.max(...stepYs);
//       const vpCenter = window.scrollY + window.innerHeight / 2;
//       const t = clamp((vpCenter - first) / (last - first), 0, 1);

//       targetYRef.current = t * overlayH;
//       if (!rafRef.current) animate();
//     };
//     const animate = () => {
//       setDropY((prev) => {
//         const next = lerp(prev, targetYRef.current, 0.18);
//         if (Math.abs(next - targetYRef.current) < 0.6) { rafRef.current = 0; return targetYRef.current; }
//         rafRef.current = requestAnimationFrame(animate);
//         return next;
//       });
//     };

//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     window.addEventListener('resize', onScroll);
//     return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
//   }, [percents.length]);

//   return (
//     <section className="relative mx-auto max-w-7xl px-6 md:px-10 py-16 md:py-24">
//       {/* Header */}
//       <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
//         <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-900">The Milk Journey: From Farm to Table</h2>
//       </div>

//       {/* 3-col grid: Left | Center Rail (rendered ONCE) | Right */}
//       <div className="grid grid-cols-1 md:grid-cols-[1fr_88px_1fr] gap-x-10 md:gap-x-14">
//         {/* LEFT column (odd steps) */}
//         <div className="space-y-16 md:space-y-24">
//           {steps.map((s, i) => (
//             i % 2 === 0 ? (
//               <article key={s.id} ref={(el) => (stepRefs.current[i] = el)}>
//                 <h3 className="text-xl font-semibold text-neutral-900 mb-3">{s.title}</h3>
//                 <StepCard s={s} priority={i < 2} />
//                 <ul className="mt-3 space-y-1.5 text-neutral-700">
//                   {s.copy.map((p, k) => (
//                     <li key={k} className="flex gap-2"><span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-orange-400" /><span>{p}</span></li>
//                   ))}
//                 </ul>
//               </article>
//             ) : (
//               <div key={s.id} />
//             )
//           ))}
//         </div>

//         {/* CENTER column (single rail spanning entire section) */}
//         <div ref={railColRef} className="relative">
//           {/* Passive rail running full height of the center column */}
//           <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
//             <div className="w-[3px] h-full rounded bg-gradient-to-b from-orange-200 via-orange-200 to-orange-300 shadow-[0_0_8px_rgba(249,115,22,0.16)]" />
//           </div>
//           {/* Sticky overlay that persists for the WHOLE timeline */}
//           <div className="sticky top-28 h-[calc(100vh-7rem)]">
//             <div ref={railOverlayRef} className="relative h-full">
//               {percents.map((p, i) => {
//                 const isLeft = i % 2 === 0;
//                 return (
//                   <div key={`bead-${i}`} className="absolute -translate-y-1/2" style={{ top: `${p * 100}%`, left: '50%' }}>
//                     <span className="absolute -translate-x-1/2 flex items-center justify-center text-[11px] font-semibold w-7 h-7 rounded-full bg-white ring-2 ring-orange-300 text-orange-600 shadow-sm">{String(steps[i].idx).padStart(2, '0')}</span>
//                     <span className="absolute top-1/2 -translate-y-1/2 h-px bg-orange-200" style={{ width: 26, left: isLeft ? 'calc(-26px - 1px)' : '1px' }} />
//                   </div>
//                 );
//               })}
//               <MilkDrop className="absolute" style={{ left: '50%', transform: `translate(-50%, ${dropY - dropSize / 2}px)`, width: dropSize, height: dropSize }} />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT column (even steps) */}
//         <div className="space-y-16 md:space-y-24">
//           {steps.map((s, i) => (
//             i % 2 === 1 ? (
//               <article key={s.id} ref={(el) => (stepRefs.current[i] = el)}>
//                 <h3 className="text-xl font-semibold text-neutral-900 mb-3">{s.title}</h3>
//                 <StepCard s={s} priority={i < 2} />
//                 <ul className="mt-3 space-y-1.5 text-neutral-700">
//                   {s.copy.map((p, k) => (
//                     <li key={k} className="flex gap-2"><span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-orange-400" /><span>{p}</span></li>
//                   ))}
//                 </ul>
//               </article>
//             ) : (
//               <div key={s.id} />
//             )
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         svg { filter: drop-shadow(0 3px 6px rgba(2, 6, 23, 0.08)); }
//       `}</style>
//     </section>
//   );
// }









// 'use client';

// import Image from 'next/image';
// import { useEffect, useMemo, useRef, useState } from 'react';

// /* ──────────────────────────────────────────────────────────
//  * Utilities
//  * ────────────────────────────────────────────────────────── */
// const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
// const lerp  = (a, b, t) => a + (b - a) * t;

// /* ──────────────────────────────────────────────────────────
//  * Inline Milk droplet SVG (fallback)
//  * ────────────────────────────────────────────────────────── */
// function MilkDrop({ className, style }) {
//   return (
//     <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden>
//       <defs>
//         <linearGradient id="milkBody" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor="#ffffff" />
//           <stop offset="100%" stopColor="#fff4e5" />
//         </linearGradient>
//         <radialGradient id="sheen" cx="30%" cy="25%" r="40%">
//           <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
//           <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
//         </radialGradient>
//         <filter id="outerGlow" x="-50%" y="-50%" width="200%" height="200%">
//           <feDropShadow dx="0" dy="2" stdDeviation="2.2" floodColor="#f97316" floodOpacity="0.22" />
//         </filter>
//       </defs>
//       <path
//         d="M32 6 C32 6, 15 30, 15 42 C15 53, 23 60, 32 60 C41 60, 49 53, 49 42 C49 30, 32 6, 32 6 Z"
//         fill="url(#milkBody)"
//         stroke="#fcd34d"
//         strokeWidth="1.15"
//         filter="url(#outerGlow)"
//       />
//       <ellipse cx="26" cy="26" rx="9" ry="7" fill="url(#sheen)" />
//     </svg>
//   );
// }

// /* ──────────────────────────────────────────────────────────
//  * Component — Orange rail + droplet.svg riding the line
//  * Requires /public/droplet.svg and /public/journey/*.png
//  * ────────────────────────────────────────────────────────── */
// export default function OurJourney() {
//   // Marker image config
//   const markerSrc = '/droplet.svg';
//   const markerSize = 72; // px
//   const markerOffsetX = 2;

//   // Layout refs
//   const railOverlayRef  = useRef(null);
//   const leftColRef      = useRef(null);
//   const contentColRef   = useRef(null);
//   const sectionRefs     = useRef([]);

//   // Animation state
//   const [centers, setCenters]   = useState([]);
//   const [percents, setPercents] = useState([]);
//   const [dropY, setDropY]       = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [visible, setVisible]   = useState([]);
//   const [markerOk, setMarkerOk] = useState(true);
//   const targetYRef = useRef(0);
//   const rafRef     = useRef(0);

//   // Ensure rail column equals content height
//   const syncLeftHeight = () => {
//     if (!leftColRef.current || !contentColRef.current) return;
//     const h = contentColRef.current.scrollHeight;
//     leftColRef.current.style.minHeight = `${h}px`;
//   };

//   // FIVE sections (10 → 5 consolidated)
//   const stages = useMemo(
//     () => [
//       {
//         id: 'sourcing',
//         index: '01',
//         title: 'Responsible Sourcing',
//         image: '/journey/one.png',
//         alt: 'Partner dairy farms at sunrise with stainless milk cans',
//         points: [
//           'Partner farms vetted for animal-first care and hygiene.',
//           'Balanced feed, clean water, and traceable farm IDs.',
//           'Milk collected fresh twice daily.',
//         ],
//       },
//       {
//         id: 'milking-qa',
//         index: '02',
//         title: 'Hygienic Milking & First-Line QA',
//         image: '/journey/two.png',
//         alt: 'Hygienic milking line with stainless equipment',
//         points: [
//           'Contactless udder prep with pre-/post-dip.',
//           'Immediate MBRT/antibiotics/adulteration screens.',
//           'Filtered and sealed at source; non-compliant milk is rejected.',
//         ],
//       },
//       {
//         id: 'chilling-chain',
//         index: '03',
//         title: 'Rapid Chilling & Cold-Chain Transport',
//         image: '/journey/five.png', // tanker visual (combine chilling + transport)
//         alt: 'Insulated milk tanker maintaining cold chain',
//         points: [
//           'Rapid BMC chilling to ≤4 °C within 2 hours to lock freshness.',
//           'Insulated tankers with temperature telemetry and seal checks.',
//           'Strict ≤4 °C SLA maintained end-to-end.',
//         ],
//       },
//       {
//         id: 'processing',
//         index: '04',
//         title: 'Clarify · Standardize · Pasteurize · Homogenize',
//         image: '/journey/six.png',
//         alt: 'Modern dairy plant with stainless processing lines',
//         points: [
//           'Clarification removes residuals; quality-balanced standardization.',
//           'HTST pasteurization 72 °C × 15 s with auto CCP recording.',
//           'Homogenization for stable mouthfeel; no cream separation.',
//         ],
//       },
//       {
//         id: 'pack-deliver',
//         index: '05',
//         title: 'QA Release, Fresh-Seal Packing & Delivery',
//         image: '/journey/ten.png',
//         alt: 'Chilled delivery van for doorstep service',
//         points: [
//           'Microbiological clearance and batch coding per FSSAI/AGMARK.',
//           'Fresh-seal packaging for safety and shelf life.',
//           'FEFO dispatch at 2–4 °C; chilled last-mile to your table.',
//         ],
//       },
//     ],
//     []
//   );

//   // Keep refs & visibility array in sync
//   useEffect(() => {
//     sectionRefs.current = sectionRefs.current.slice(0, stages.length);
//     setVisible((v) => {
//       const next = Array(stages.length).fill(false);
//       for (let i = 0; i < Math.min(v.length, next.length); i++) next[i] = v[i];
//       return next;
//     });
//   }, [stages.length]);

//   // Compute section centers and percents
//   const measureCenters = () => {
//     if (!leftColRef.current) return;
//     const railRect = leftColRef.current.getBoundingClientRect();
  
//     const centerDocY = (el) => {
//       const r = el.getBoundingClientRect();
//       // Calculate center relative to the rail container, not the document
//       return r.top - railRect.top + r.height / 2;
//     };
    
//     const c = sectionRefs.current.map((el) => (el ? centerDocY(el) : 0));
//     const first = c[0];
//     const last  = c[c.length - 1];

//     if (!last || last === 0) {
//       setCenters([]);
//       setPercents([]);
//       setProgress(0);
//       return;
//     }
    
//     setCenters(c);
//     const ps = c.map((y) => y / last); // Normalize based on the position of the last element's center
//     setPercents(ps);

//     const vpCenter = window.innerHeight / 2;
//     const scrollYRelativeToRail = -railRect.top;
    
//     const t = clamp((scrollYRelativeToRail + vpCenter - first) / (last - first), 0, 1);
//     setProgress(t);
//   };
  
//   // A more robust way to handle resizing and content shifts
//   useEffect(() => {
//     const el = contentColRef.current;
//     if (!el) return;

//     const onUpdate = () => {
//       syncLeftHeight();
//       measureCenters();
//     };

//     onUpdate(); // Initial call
    
//     const observer = new ResizeObserver(onUpdate);
//     observer.observe(el);
    
//     // Also update on window resize for broader compatibility
//     window.addEventListener('resize', onUpdate);
    
//     return () => {
//       observer.disconnect();
//       window.removeEventListener('resize', onUpdate);
//     };
//   }, []); // Runs once on mount

//   // Scroll → drop position mapping
//   useEffect(() => {
//     const onScroll = () => {
//       if (!railOverlayRef.current || centers.length === 0) return;
//       const overlayRect = railOverlayRef.current.getBoundingClientRect();
//       const overlayH    = overlayRect.height;
//       const vpCenter    = window.innerHeight / 2;
//       const first = centers[0];
//       const last  = centers[centers.length - 1];

//       // Calculate progress based on viewport center relative to the start/end of the journey
//       const scrollYInContent = window.scrollY - (contentColRef.current?.offsetTop ?? 0);
//       const journeyStart = first - vpCenter;
//       const journeyEnd = last - vpCenter;
      
//       const t = clamp((scrollYInContent - journeyStart) / (journeyEnd - journeyStart), 0, 1);
      
//       setProgress(t);
//       targetYRef.current = t * last; // Target Y should be a percentage of the final center position
      
//       if (!rafRef.current) animate();
//     };

//     const animate = () => {
//       setDropY((prev) => {
//         const next = lerp(prev, targetYRef.current, 0.18);
//         if (Math.abs(next - targetYRef.current) < 0.6) {
//           rafRef.current = 0;
//           return targetYRef.current;
//         } else {
//           rafRef.current = requestAnimationFrame(animate);
//           return next;
//         }
//       });
//     };

//     onScroll();
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [centers]);

//   // Reveal-on-scroll
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => {
//         setVisible((prev) => {
//           const next = [...prev];
//           for (const e of entries) {
//             const idx = sectionRefs.current.findIndex((el) => el === e.target);
//             if (idx !== -1) next[idx] = e.isIntersecting || next[idx];
//           }
//           return next;
//         });
//       },
//       { root: null, rootMargin: '0px 0px -20% 0px', threshold: 0.18 }
//     );
//     sectionRefs.current.forEach((el) => el && obs.observe(el));
//     return () => obs.disconnect();
//   }, [stages.length]);

//   return (
//     <section className="relative mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
//       {/* Header */}
//       <div className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
//         <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
//           From Farm to Your Table
//         </h2>
//         <p className="mt-4 text-neutral-600 md:text-lg">
//           Trace our milk’s journey — ethically sourced, gently processed, quality-assured, and delivered chilled every day.
//         </p>
//       </div>

//       {/* Mobile progress */}
//       <div className="md:hidden sticky top-16 z-20 mx-auto mb-8 h-1 w-full max-w-3xl bg-neutral-200/70 rounded">
//         <div
//           aria-hidden
//           className="h-1 rounded bg-orange-500 transition-[width] duration-200"
//           style={{ width: `${Math.round(progress * 100)}%` }}
//         />
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-[180px_minmax(0,1fr)] gap-6 md:gap-10 items-start relative">
//         {/* Left rail */}
//         <div ref={leftColRef} className="relative hidden md:block">
//           {/* Rail */}
//           <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 bottom-0">
//             <div className="w-[4px] h-full rounded bg-gradient-to-b from-orange-200 via-orange-200 to-orange-300" />
//           </div>

//           {/* Sticky overlay */}
//           <div className="sticky top-28 h-full">
//             <div ref={railOverlayRef} className="relative h-full z-10">
//               {percents.map((p, i) => (
//                 <div
//                   key={stages[i].id}
//                   className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
//                   style={{ top: `${p * 100}%` }}
//                   title={stages[i].title}
//                 >
//                   <div className="relative">
//                     <span className="block w-6 h-6 rounded-full bg-white ring-2 ring-orange-400 shadow-sm" />
//                     <span className="absolute left-8 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-1 rounded-full bg-white/80 backdrop-blur ring-1 ring-orange-200 text-orange-700">
//                       {stages[i].index}
//                     </span>
//                   </div>
//                 </div>
//               ))}

//               {/* droplet.svg with fallback */}
//               <div
//                 className="absolute"
//                 style={{
//                   left: `calc(50% - ${markerSize / 2 - markerOffsetX}px)`,
//                   transform: `translateY(${dropY - markerSize / 2}px)`,
//                 }}
//               >
//                 {markerOk ? (
//                   <Image
//                     src={markerSrc}
//                     alt="Milk droplet"
//                     width={markerSize}
//                     height={markerSize}
//                     priority
//                     draggable={false}
//                     className="select-none object-contain drop-shadow-[0_6px_14px_rgba(249,115,22,0.25)]"
//                     onError={() => setMarkerOk(false)}
//                   />
//                 ) : (
//                   <MilkDrop className="w-10 h-10" />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right content */}
//         <div ref={contentColRef} className="space-y-16 md:space-y-24">
//           {stages.map((s, i) => (
//             <article
//               key={s.id}
//               ref={(el) => (sectionRefs.current[i] = el)}
//               className={[
//                 'scroll-mt-28 transition-all duration-700 ease-out',
//                 visible[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
//               ].join(' ')}
//               aria-label={s.title}
//             >
//               <div className="flex items-center gap-3 mb-4 md:mb-6">
//                 <span className="md:hidden inline-flex items-center justify-center text-xs font-bold rounded-full bg-orange-100 text-orange-700 ring-1 ring-orange-200 h-7 w-7">
//                   {s.index}
//                 </span>
//                 <h3 className="text-2xl md:text-4xl font-bold text-neutral-900">{s.title}</h3>
//               </div>

//               <div className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 shadow-sm will-change-transform">
//                 <Image
//                   src={s.image}
//                   alt={s.alt}
//                   width={1920}
//                   height={1080}
//                   priority={i === 0}
//                   className="w-full h-[46vw] max-h-[540px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
//                   // No longer need onLoad here because of ResizeObserver
//                 />
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/5 via-transparent to-transparent" />
//               </div>

//               <ul className="mt-6 space-y-2 text-neutral-700">
//                 {s.points.map((p, k) => (
//                   <li key={k} className="flex gap-2">
//                     <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
//                     <span>{p}</span>
//                   </li>
//                 ))}
//               </ul>
//             </article>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         /* Optional: gentle rail pulse */
//         .railGlow > div {
//           box-shadow: 0 0 12px rgba(249, 115, 22, 0.38);
//           animation: railPulse 2.2s ease-in-out infinite;
//         }
//         @keyframes railPulse {
//           0%, 100% { box-shadow: 0 0 10px rgba(249,115,22,.30); }
//           50% { box-shadow: 0 0 18px rgba(249,115,22,.55); }
//         }
//       `}</style>
//     </section>
//   );
// }






"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";

/** tiny classnames helper */
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** White milk droplet (no outer circle) */
function MilkDroplet({ size = 36 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,.15))" }}
    >
      <defs>
        {/* subtle depth so it doesn’t vanish on white backgrounds */}
        <linearGradient id="milkDropGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F8FAFC" />
        </linearGradient>
      </defs>
      <path
        d="M12 2c-3.2 4.5-6 8-6 11 0 3.3 2.7 6 6 6s6-2.7 6-6c0-3-2.8-6.5-6-11z"
        fill="url(#milkDropGrad)"
        stroke="#CBD5E1"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export default function OurJourney() {
  const [progress, setProgress] = useState(0); // 0..1 scroll progress of the section
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const stageRefs = useRef([]);

  // --- Content (update images/points as needed) ---
  const stages = useMemo(
    () => [
      {
        index: "01",
        title: "Responsible Sourcing",
        image: "/journey/one.png",
        points: [
          "Partner farms vetted for animal-first care and hygiene.",
          "Balanced feed, clean water, and traceable farm IDs.",
        ],
      },
      {
        index: "02",
        title: "Hygienic Milking & QA",
        image: "/journey/two.png",
        points: [
          "Contactless udder prep with pre-/post-dip.",
          "Immediate MBRT/antibiotics/adulteration screens.",
        ],
      },
      {
        index: "03",
        title: "Rapid Chilling & Transport",
        image: "/journey/five.png",
        points: [
          "Rapid BMC chilling to ≤4 °C within 2 hours to lock freshness.",
          "Insulated tankers with temperature telemetry and seal checks.",
        ],
      },
      {
        index: "04",
        title: "Advanced Processing",
        image: "/journey/six.png",
        points: [
          "Clarification, Standardization, Pasteurization & Homogenization.",
          "HTST pasteurization 72 °C × 15 s with auto CCP recording.",
        ],
      },
      {
        index: "05",
        title: "Packing & Delivery",
        image: "/journey/ten.png",
        points: [
          "Microbiological clearance and batch coding per FSSAI/AGMARK.",
          "Fresh-seal packaging for safety and shelf life.",
        ],
      },
    ],
    []
  );

  // --- Scroll progress + active stage ---
  useEffect(() => {
    function handleScroll() {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = el.offsetHeight - viewportH;

      const startY = window.scrollY + rect.top;
      const scrolled = window.scrollY - startY;
      const p = Math.max(0, Math.min(1, total > 0 ? scrolled / total : 0));
      setProgress(p);

      // which stage is closest to center?
      let current = 0;
      for (let i = 0; i < stageRefs.current.length; i++) {
        const node = stageRefs.current[i];
        if (!node) continue;
        const r = node.getBoundingClientRect();
        if (r.top < viewportH * 0.45) current = i;
      }
      setActiveIndex(current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-stone-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            From Farm to Your Table
          </h2>
          <p className="mt-4 text-slate-600 md:text-lg">
            Trace our milk’s journey — ethically sourced, gently processed,
            quality-assured, and delivered chilled every day.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Sticky center line + progress + WHITE droplet marker */}
          <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1">
            <div className="sticky top-0 h-screen">
              <div className="relative h-full w-full">
                {/* base track */}
                <div className="absolute top-0 bottom-0 w-full rounded-full bg-slate-200" />
                {/* progress track (brand accent; adjust if needed) */}
                <div
                  className="absolute top-0 w-full rounded-full bg-amber-500"
                  style={{ height: `${progress * 100}%` }}
                />
                {/* droplet marker */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ top: `${progress * 100}%` }}
                >
                  <MilkDroplet size={38} />
                </div>
              </div>
            </div>
          </div>

          {/* Stages */}
          <div className="space-y-24">
            {stages.map((stage, i) => (
              <div
                key={stage.index}
                ref={(el) => (stageRefs.current[i] = el)}
                className="relative grid items-center grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Image */}
                <div
                  className={cx(
                    "group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm bg-white",
                    i % 2 !== 0 && "lg:order-2"
                  )}
                >
                  <Image
                    src={stage.image}
                    alt={stage.title}
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Copy */}
                <div>
                  <div className="flex items-center gap-4">
                    <span
                      className={cx(
                        "flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold transition-colors duration-300",
                        activeIndex === i
                          ? "bg-amber-500 text-white"
                          : "bg-slate-200 text-amber-600"
                      )}
                    >
                      {stage.index}
                    </span>
                    <h3 className="text-3xl font-bold text-slate-800">
                      {stage.title}
                    </h3>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {stage.points.map((p, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-700">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {/* /Stages */}
        </div>
      </div>
    </section>
  );
}
