'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

/* ---------- Atoms ---------- */
const Badge = ({ label }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 text-xs font-semibold">
    <span className="h-2 w-2 rounded-full bg-emerald-500" />
    {label}
  </span>
);
const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
    <span className="text-slate-700">{children}</span>
  </li>
);
const KpiCard = ({ k, s }) => (
  <div className="rounded-xl border border-slate-100 shadow-sm p-4 h-full">
    <div className="text-2xl font-extrabold text-slate-900">{k}</div>
    <div className="text-sm text-slate-500 mt-1">{s}</div>
  </div>
);

/* ---------- Pie helpers ---------- */
function d2r(d){return (d*Math.PI)/180;}
function polar(cx,cy,r,deg){const rad=d2r(deg);return[cx+r*Math.cos(rad),cy+r*Math.sin(rad)];}
function sectorPathCW(cx,cy,r,a0,a1){
  let s=((a0%360)+360)%360, e=((a1%360)+360)%360; if(e<=s) e+=360;
  const delta=e-s, [x0,y0]=polar(cx,cy,r,s), [x1,y1]=polar(cx,cy,r,e);
  const large=delta>180?1:0, sweep=1;
  return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} ${sweep} ${x1} ${y1} Z`;
}

/* ---------- Pie component ---------- */
function TriSectorCycle({ images }){
  const size=560, cx=size/2, cy=size/2, r=245;
  const baseBox={ x:cx-r, y:cy-r, w:r*2, h:r*2 };
  const slices=[
    { a0:260, a1:20,  key:'s1', img:images[0], label:'Fields fertilized',   lx:430, ly:520 },
    { a0:20,  a1:140, key:'s2', img:images[1], label:'Biogas & utilities',  lx:520, ly:120 },
    { a0:140, a1:260, key:'s3', img:images[2], label:'Regenerative growth', lx:160, ly:100 },
  ];
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" shapeRendering="geometricPrecision">
        <defs>
          <marker id="arrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 Z" fill="#9CA3AF"/>
          </marker>
          {slices.map(({a0,a1,key})=>(
            <clipPath id={`clip-${key}`} key={key}>
              <path d={sectorPathCW(cx,cy,r,a0,a1)}/>
            </clipPath>
          ))}
        </defs>

        {slices.map(({key,img,a0,a1})=>{
          const scale=img.scale??1, tx=img.tx??0, ty=img.ty??0;
          return (
            <g key={key} clipPath={`url(#clip-${key})`}>
              <path d={sectorPathCW(cx,cy,r,a0,a1)} fill="#F9FAFB"/>
              <g transform={`translate(${tx} ${ty}) scale(${scale})`}>
                <image
                  href={img.src}
                  x={baseBox.x/scale}
                  y={baseBox.y/scale}
                  width={baseBox.w/scale}
                  height={baseBox.h/scale}
                  preserveAspectRatio="xMidYMid slice"
                  aria-label={img.alt}
                />
              </g>
            </g>
          );
        })}

        {slices.map(({a0,a1,key})=>(
          <path key={key} d={sectorPathCW(cx,cy,r,a0,a1)} fill="none" stroke="#fff" strokeWidth="6.5"/>
        ))}
        <circle cx={cx} cy={cy} r={7.5} fill="#fff"/>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#E5E7EB" strokeWidth="3"/>

        {[330,90,210].map((start,i)=>{
          const rr=r+26,end=start+80,[sx,sy]=polar(cx,cy,rr,start),[ex,ey]=polar(cx,cy,rr,end);
          return <path key={i} d={`M ${sx} ${sy} A ${rr} ${rr} 0 0 1 ${ex} ${ey}`} fill="none" stroke="#9CA3AF" strokeWidth="3" strokeDasharray="6 8" markerEnd="url(#arrowHead)"/>;
        })}

        {slices.map(({lx,ly,label}, i)=>(
          <g key={`lab-${i}`}>
            <line x1={cx} y1={cy} x2={lx} y2={ly} stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4"/>
            <rect x={lx-6} y={ly-18} rx="6" ry="6" width="170" height="28" fill="#ffffff" opacity="0.9"/>
            <text x={lx+6} y={ly} fill="#334155" fontSize="12" fontWeight="600">{label}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ---------- Page ---------- */
export default function AboutPageContent(){
  const [tab,setTab]=useState('environment');

  const environmentImages=[
    { src:'/about/Dung.png',        alt:'Fields enriched by organic residue',   scale:1,    tx:0,   ty:0  },
    { src:'/about/Biogasplant.png', alt:'Biogas plant powering utilities',      scale:1.05, tx:-20, ty:-10 },
    { src:'/about/biogas.png',      alt:'Sprout signifying regenerative growth',scale:1.18, tx:-70, ty:-40 },
  ];

  // Motion presets
  const panelVariants = { initial:{opacity:0,y:12}, animate:{opacity:1,y:0,transition:{duration:0.35,ease:'easeOut'}}, exit:{opacity:0,y:-12,transition:{duration:0.25,ease:'easeIn'}} };
  const visualVariants = { initial:{opacity:0,scale:0.98}, animate:{opacity:1,scale:1,transition:{duration:0.35,ease:'easeOut'}}, exit:{opacity:0,scale:0.98,transition:{duration:0.2,ease:'easeIn'}} };

  return (
    <>
      <Head><title>About Us — The Dairy That Powers Itself.</title></Head>

      <main className="bg-gray-50 text-slate-700">
        {/* HERO directly below navbar — centered & compact */}
        <section className="pt-8 md:pt-10 pb-4 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              The Dairy That Powers Itself.
            </motion.h1>
            <p className="mt-2 text-slate-500 text-base">
              Circular energy and regenerative agronomy underpin consistent, quality dairy.
            </p>
          </div>
        </section>

        {/* Tabs — tighter spacing, centered */}
        <section className="pt-6 pb-0">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-10 mb-6 border-b border-gray-200 relative">
              {['environment','cows'].map((t)=>(
                <button
                  key={t}
                  onClick={()=>setTab(t)}
                  className={`relative py-3 px-6 text-lg font-medium transition-colors ${
                    tab===t ? 'text-amber-600' : 'text-slate-600 hover:text-amber-500'
                  }`}
                >
                  {t==='environment' ? 'Environment' : 'Cows'}
                  {tab===t && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-amber-500 rounded"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content card */}
        <section className="pb-16 md:pb-20">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <AnimatePresence mode="wait">
                {tab==='environment' ? (
                  <motion.div key="env" variants={panelVariants} initial="initial" animate="animate" exit="exit">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Self-sustaining farms</h2>
                        <p className="mt-5 text-lg leading-relaxed">
                          We operationalize a closed-loop model of co-existence farming—waste-to-energy-to-soil—
                          delivering resilient productivity with minimal external inputs.
                        </p>
                        <ul className="mt-6 space-y-3">
                          <Bullet>On-site biogas offsets LPG and grid electricity.</Bullet>
                          <Bullet>Digestate replaces synthetic fertilizers sustainably.</Bullet>
                          <Bullet>Soil organic matter and microbial activity improved.</Bullet>
                          <Bullet>Scope-3 emissions reduced across the value chain.</Bullet>
                        </ul>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <KpiCard k="↑ 28%" s="Yield uplift (multi-season avg)" />
                          <KpiCard k="19,200 kg" s="Annual LPG offset via biogas" />
                          <KpiCard k="1.6M L" s="Water conserved via mulch retention" />
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <Badge label="FSSAI-compliant operations"/>
                          <Badge label="ISO 22000 aligned"/>
                          <Badge label="Residue-free agronomy"/>
                        </div>
                        <div className="mt-6 flex gap-3">
                          <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-white px-5 py-3 font-semibold shadow hover:bg-amber-600">
                            Talk to our sustainability team
                          </a>
                          <a href="#report" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                            Download sustainability report
                          </a>
                        </div>
                      </div>

                      <motion.div variants={visualVariants} initial="initial" animate="animate" exit="exit">
                        <TriSectorCycle images={environmentImages}/>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="cows" variants={panelVariants} initial="initial" animate="animate" exit="exit">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Happy Cows, Healthy Milk</h2>
                        <p className="mt-5 text-lg leading-relaxed">
                          Welfare-first animal husbandry—clean sheds, balanced nutrition, and continuous hydration—
                          drives consistent milk quality and operational continuity.
                        </p>
                        <ul className="mt-6 space-y-3">
                          <Bullet>Routine health checks and traceable feed.</Bullet>
                          <Bullet>Comfort-focused shed design and bedding.</Bullet>
                          <Bullet>Zero-antibiotic residue policy across lots.</Bullet>
                          <Bullet>Continuous water access and shade for thermal comfort.</Bullet>
                        </ul>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <KpiCard k="≥ 12 L/day" s="Avg. milk per lactating cow" />
                          <KpiCard k="< 2%" s="Clinical mastitis incidence" />
                          <KpiCard k="100%" s="Traceable feed lots" />
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <Badge label="HACCP hygiene protocols"/>
                          <Badge label="Dedicated veterinary oversight"/>
                          <Badge label="Humane handling standards"/>
                        </div>
                        <div className="mt-6 flex gap-3">
                          <a href="#farm-visit" className="inline-flex items-center justify-center rounded-xl bg-amber-500 text-white px-5 py-3 font-semibold shadow hover:bg-amber-600">
                            Schedule a farm visit
                          </a>
                          <a href="#welfare-brief" className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50">
                            Download welfare brief
                          </a>
                        </div>
                      </div>

                      <motion.div variants={visualVariants} initial="initial" animate="animate" exit="exit"
                        className="relative w-full h-80 md:h-[380px] lg:h-[420px] rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src="/about/Aboutcows.png"
                          alt="Cows at our shed"
                          fill
                          sizes="(min-width:1024px) 50vw, 100vw"
                          className="object-cover"
                          priority
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
