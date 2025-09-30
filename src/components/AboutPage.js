'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

/**
 * src/components/AboutUs.js
 * Updated: Regenerative Farming icon now shows a grass-blade logo
 * plus brochure download (anm.pdf) added to hero
 *
 * Save/replace your existing file with this content.
 */

const BRAND = {
  saffron: '#FFB100',
  navy: '#0F1D3D',
  ink: 'rgba(255,255,255,0.92)',
};

/* ------------------------
   Icons (inline, accessible)
   ------------------------ */
const IconTrace = ({ className = '' }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="2" y="3" width="20" height="18" rx="2" stroke={BRAND.navy} strokeWidth="1.4" fill="white"/>
    <rect x="5.2" y="6.6" width="3.6" height="3.6" rx="0.6" fill={BRAND.saffron} />
    <path d="M12 9.5h5" stroke={BRAND.navy} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M12 13h5" stroke={BRAND.navy} strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M7 13.6h.01" stroke={BRAND.navy} strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const IconRegenerative = ({ className = '' }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M6.5 20c1-6 4-9 4-9s-1.2 0.9-2 2.5C7.8 15.5 6.5 20 6.5 20z" fill="#16A34A"/>
    <path d="M12 20c0-7 5-12 5-12s-1 1.2-3 3.8S12 20 12 20z" fill="#15803D"/>
    <path d="M9.5 20c0-4 2-7 2-7s-0.6.6-1.2 1.6S9.5 20 9.5 20z" fill="#22C55E" opacity="0.95"/>
    <path d="M6.5 20c1-6 4-9 4-9s-1.2.9-2 2.5C7.8 15.5 6.5 20 6.5 20z" stroke="#0F1D3D" strokeWidth="0.3" strokeOpacity="0.12" fill="none"/>
    <path d="M12 20c0-7 5-12 5-12s-1 1.2-3 3.8S12 20 12 20z" stroke="#0F1D3D" strokeWidth="0.3" strokeOpacity="0.12" fill="none"/>
    <path d="M9.5 20c0-4 2-7 2-7s-0.6.6-1.2 1.6S9.5 20 9.5 20z" stroke="#0F1D3D" strokeWidth="0.3" strokeOpacity="0.12" fill="none"/>
  </svg>
);

const IconFamily = ({ className = '' }) => (
  <svg className={className} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 20c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6" stroke={BRAND.navy} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
    <circle cx="8.2" cy="9.2" r="1.6" fill={BRAND.saffron}/>
    <circle cx="12" cy="7.6" r="1.9" fill={BRAND.saffron}/>
    <circle cx="16.2" cy="9.2" r="1.6" fill={BRAND.saffron}/>
    <path d="M7 13s2-1 5-1 5 1 5 1" stroke={BRAND.navy} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

/* ------------------------
   Small atoms
   ------------------------ */
const Badge = ({ children }) => (
  <span
    style={{ background: '#EFF6EF', color: '#065F46' }}
    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
  >
    {children}
  </span>
);

const Stat = ({ number, label }) => (
  <div className="rounded-lg border border-slate-100 p-4 text-center bg-white">
    <div className="text-2xl md:text-3xl font-extrabold text-slate-900">{number}</div>
    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

/* ------------------------
   Feature tile component (with icon)
   ------------------------ */
function FeatureTile({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-3 items-start">
      <div
        className="flex-none rounded-lg w-12 h-12 flex items-center justify-center shadow-sm"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))' }}
        aria-hidden
      >
        <div className="w-8 h-8">
          <Icon className="w-8 h-8" />
        </div>
      </div>

      <div className="min-w-0">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-xs text-slate-500 mt-1">{text}</div>
      </div>
    </div>
  );
}

/* ------------------------
   Main component
   ------------------------ */
export default function AboutUs() {
  return (
    <section className="bg-white text-slate-800">
      {/* HERO */}
      <header className=" mx-3 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-6">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-3xl md:text-[50px] font-extrabold tracking-tight text-[0.95] leading-tight"
              style={{ color: BRAND.navy }}
            >
              Agasthya NutroMilk
            </motion.h1>

            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl">
              Nourishing families with full-cream A2 buffalo milk — pasture-first, traceable and crafted for everyday nutrition.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div
                className="flex items-center gap-3 rounded-full px-4 py-2 shadow-sm"
                style={{ background: BRAND.saffron, color: BRAND.navy }}
                aria-hidden
              >
                <div className="text-xs uppercase font-semibold tracking-wide">Richness</div>
                <div className="text-lg md:text-2xl font-extrabold">7.5% FAT</div>
                <div className="text-xs text-[rgba(15,29,61,0.9)]">A2 Buffalo Milk</div>
              </div>

              <div className="text-sm text-slate-600">
                Fresh, full-cream buffalo milk — pasture-raised, preservative-free, and batch-traceable from farm to family.
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 items-center">
              {/* DOWNLOAD BROCHURE - downloads anm.pdf from public/anm.pdf */}
              <a
                href="/anm.pdf"
                download="Agasthya-Brochure.pdf"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold shadow"
                style={{ background: BRAND.saffron, color: BRAND.navy }}
                aria-label="Download Agasthya NutroMilk brochure"
              >
                {/* small inline icon for download */}
                <svg width="16" height="16" viewBox="0 0 24 24" className="mr-2" fill="none" aria-hidden>
                  <path d="M12 3v12" stroke={BRAND.navy} strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M8 11l4 4 4-4" stroke={BRAND.navy} strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M21 21H3" stroke={BRAND.navy} strokeWidth="1.6" strokeLinecap="round" />
                </svg>

                <span>Download brochure</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold border"
                style={{ borderColor: '#E6E6E6', color: BRAND.navy }}
              >
                See Products
              </Link>
            </div>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 lg:h-96">
            <Image
              src="https://placehold.co/1200x800?text=Agasthya+NutroMilk+Farm"
              alt="Agasthya NutroMilk farm"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
              unoptimized
            />
            <div className="absolute left-6 bottom-6 bg-white/90 rounded-lg px-4 py-2 shadow-sm">
              <div className="text-xs text-slate-700 font-semibold">A2 • Grass-Fed • Full Cream</div>
              <div className="text-sm text-slate-500">Small-batch | Batch traceability available</div>
            </div>
          </div>
        </div>
      </header>

      {/* PURPOSE + FEATURES (icons updated) */}
      <div className="p-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold" style={{ color: BRAND.navy }}>Our purpose</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Agasthya NutroMilk delivers nutrient-dense, traceable A2 buffalo milk produced with a pasture-first philosophy.
            Our operating model centers animal welfare, regenerative feed systems and simple, transparent handling.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <FeatureTile
                icon={IconTrace}
                title="Traceable Quality"
                text="Every batch is tracked — from herd to home."
              />
            </div>

            <div>
              <FeatureTile
                icon={IconRegenerative}
                title="Regenerative Farming"
                text="Pasture-first routines that build soil and animal health."
              />
            </div>

            <div>
              <FeatureTile
                icon={IconFamily}
                title="Family Nutrition"
                text="High-fat, high-nutrient milk for growing bodies and family meals."
              />
            </div>
          </div>
        </div>

        <aside className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-sm font-semibold" style={{ color: BRAND.navy }}>Certifications</h3>
          <div className="mt-4 flex flex-col gap-3">
            <Badge>FSSAI-compliant</Badge>
            <Badge>Hormone-free & Antibiotic-free</Badge>
            <Badge>Pasture-first husbandry</Badge>
            <Badge>Batch traceability</Badge>
          </div>
        </aside>
      </div>

      {/* STATS */}
      <div className="mx-auto px-16 mt-10 ">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold" style={{ color: BRAND.navy }}>At a glance</h4>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
            <Stat number="7.5%" label="Fat (Rich Full-Cream)" />
            <Stat number="A2" label="Protein Profile" />
            <Stat number="24 hrs" label="Milk-to-Home Freshness" />
            <Stat number="100% Grass" label="Pasture-fed Herds" />
          </div>
        </div>
      </div>

      {/* REST OF THE PAGE (unchanged structure) */}
      <div className="mx-auto px-16 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold" style={{ color: BRAND.navy }}>How we care for our herd</h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Our protocols emphasize comfort, nutrition and proactive veterinary oversight. Pasture rotation,
            clean water and evidence-led feeding keep buffalo health—and milk quality—consistent.
          </p>

          <ul className="mt-4 text-sm text-slate-600 space-y-2">
            <li>• Grass-first diet to naturally increase milk richness and beneficial fats.</li>
            <li>• Routine veterinary oversight and humane handling.</li>
            <li>• On-farm compost and regenerative soil practices to secure sustainable feed.</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <Link href="/sustainability" className="inline-flex items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold" style={{ color: BRAND.navy }}>
              Learn more
            </Link>
            <Link href="/products" className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold" style={{ background: BRAND.saffron, color: BRAND.navy }}>
              Shop milk
            </Link>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <div className="relative w-full h-60 sm:h-60 lg:h-80 bg-gray-100">
            <Image
              src="gazzing.png"
              alt="Buffalo herd grazing"
              fill
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* TEAM & CTA */}
      <div className="mx-auto px-16 mt-12">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold" style={{ color: BRAND.navy }}>Meet the team</h3>
              <p className="text-sm text-slate-600 mt-1">Local caretakers, vets and the founding team — committed to quality.</p>
            </div>
       
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
                            { name: 'A. Gupta', role: 'Founder & CEO', img: 'https://placehold.co/160x160?text=Gupta' },
              { name: 'Dr. Kavya', role: 'Veterinarian', img: 'https://placehold.co/160x160?text=Kavya' },

              { name: 'S. Reddy', role: 'Lead Farm Manager', img: 'https://placehold.co/160x160?text=Reddy' },
            ].map((p) => (
              <div key={p.name} className="flex gap-3 items-center">
                <div className="flex-none w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                  <Image src={p.img} alt={p.name} width={160} height={160} className="object-cover" unoptimized />
                </div>
                <div>
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="text-xs text-slate-500">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto px-16 mt-12 pb-16">
        <div className="rounded-2xl p-8 shadow-sm border border-gray-100" style={{ background: 'linear-gradient(90deg, rgba(255,241,214,0.9), #ffffff)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold" style={{ color: BRAND.navy }}>Bring full-cream goodness home</h4>
              <p className="text-sm text-slate-600 mt-1">Order fresh Agasthya NutroMilk — A2, 7.5% fat, pasture-fed and batch-traceable.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/order" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold" style={{ background: BRAND.saffron, color: BRAND.navy }}>
                Order Now
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold border" style={{ borderColor: '#E6E6E6', color: BRAND.navy }}>
                Talk to sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
