'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * src/components/Farmvisit.js
 *
 * Final polished version:
 * - All images use absolute public paths (start with /images/) where provided
 * - All images use `fill` + `object-cover` so they fully cover their container
 * - ItItem accepts `iconSrc` or `iconElement`
 * - Tight spacing as requested (less extra vertical gaps)
 *
 * Updated: itinerary texts replaced with the timeline you provided.
 */

const BRAND = {
  saffron: '#FFB100',
  navy: '#0F1D3D',
  ink: 'rgba(255,255,255,0.92)',
  fun1: '#FF6B6B',
  fun2: '#6EE7B7',
  fun3: '#7C83FD',
};

/* ---------- small inline icons (kept) ---------- */
const Icon = {
  Download: (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props} aria-hidden>
      <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M21 21H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Map: (props) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" {...props} aria-hidden>
      <path d="M20.5 6.5l-5-2.5L9 7.5 3.5 5v13l5 2.5 6.5-4 6-2V6.5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="1.5" fill="currentColor" />
    </svg>
  ),
  Phone: (props) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" {...props} aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.12 1.05.39 2.08.79 3.03a2 2 0 01-.45 2.11L8.91 10.91a16 16 0 006 6l1.05-1.88a2 2 0 012.11-.45c.95.4 1.98.67 3.03.79A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

/* ------------ small presentational atoms ------------ */
/* Square image that fills its box (used in feature cards / ItItem) */
function SquareImageFill({ src, alt }) {
  return (
    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-none">
      <Image src={src} alt={alt} fill className="object-cover" unoptimized />
    </div>
  );
}

/* ItItem accepts iconSrc (string) or iconElement (ReactNode) */
function ItItem({ time, title, desc, iconSrc, iconElement, accent = '#fff' }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-none w-28 text-xs text-slate-500 font-medium">{time}</div>
      <div className="flex-1">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex gap-4 items-start">
          <div className="flex-none">
            <div style={{ background: accent }} className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden relative">
              {iconElement ? (
                <div className="w-full h-full relative">{iconElement}</div>
              ) : iconSrc ? (
                <Image src={iconSrc} alt={title} fill className="object-cover" unoptimized />
              ) : null}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">{title}</div>
            <div className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Component ------------------ */
export default function Farmvisit() {
  const [openFaq, setOpenFaq] = useState(null);

  const FEATURE_IMAGES = {
    badge: './badgekid.png',
    nutrix: './meal.png',
    guided: './walk.png',
    bulllock: './bulllockcart.png',
    walk: './walk.png',
    games: './milking.png',
    lunchBanner: './meal.png',
    milking: './staff.png',
    stations: './fun.png',
    photo_spot: './frame.png',
    shop: './farmissue.png',
  };

  return (
    <section className="bg-[linear-gradient(180deg,#FFFDF5,#FFF9F0)] min-h-screen text-slate-800">
      {/* HERO */}
      <header className="px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
              style={{ color: BRAND.navy }}
            >
              Farm Fun Day — Agasthya NutroMilk <span aria-hidden>🐄</span>
            </motion.h1>

            <p className="mt-2 text-lg text-slate-700">
              A joyful, supervised day designed for clients/students — millet farm walk, dairy demos, hands-on activities, farm-to-table lunch and interactive sessions.
            </p>

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="relative inline-block">
                <button
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center gap-3 rounded-2xl px-4 py-2 text-sm font-semibold shadow-lg"
                  style={{
                    background: BRAND.saffron,
                    color: BRAND.navy,
                    boxShadow: '0 10px 30px rgba(255,177,0,0.12)'
                  }}
                >
                  <span className="text-lg">🎟️</span>
                  Book Your Visit
                </button>

                <motion.span
                  initial={{ scale: 0.98 }}
                  animate={{ scale: [1, 1.04, 1], opacity: [1, 0.95, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="absolute -top-2 -right-2 text-[10px] font-semibold uppercase rounded-full px-2 py-0.5 tracking-wider"
                  style={{ background: BRAND.navy, color: BRAND.ink, boxShadow: '0 8px 20px rgba(15,29,61,0.12)' }}
                >
                  Coming soon
                </motion.span>
              </div>

              <a
                href="/anm.pdf"
                download="Agasthya-Farm-Itinerary.pdf"
                className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium border"
                style={{ borderColor: '#E6E6E6', color: BRAND.navy, background: '#fff' }}
                aria-label="Download farm itinerary"
              >
                <span style={{ color: BRAND.fun3 }}><Icon.Download /></span>
                Download Itinerary
              </a>
            </div>

            {/* features */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-2xl p-3 bg-white shadow-sm border border-gray-100 flex gap-3 items-start">
                <SquareImageFill src={FEATURE_IMAGES.badge} alt="Junior Farmer Badge" />
                <div>
                  <div className="text-sm font-semibold">Junior Farmer Badge</div>
                  <div className="text-xs text-slate-600 mt-1">Keepsake badge & certificate.</div>
                </div>
              </div>

              <div className="rounded-2xl p-3 bg-white shadow-sm border border-gray-100 flex gap-3 items-start">
                <SquareImageFill src={FEATURE_IMAGES.nutrix} alt="Nutrix Tasting" />
                <div>
                  <div className="text-sm font-semibold">Farm Lunch</div>
                  <div className="text-xs text-slate-600 mt-1">Healthy treats featuring Nutrix blends.</div>
                </div>
              </div>

              <div className="rounded-2xl p-3 bg-white shadow-sm border border-gray-100 flex gap-3 items-start">
                <SquareImageFill src={FEATURE_IMAGES.guided} alt="Safe & Guided" />
                <div>
                  <div className="text-sm font-semibold">Safe & Guided</div>
                  <div className="text-xs text-slate-600 mt-1">Small groups & trained guides.</div>
                </div>
              </div>
            </div>
          </div>

          {/* gallery card */}
          <div className="flex-none w-full lg:w-[480px] h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl bg-white">
            <div className="relative w-full h-full">
              <Image
                src={FEATURE_IMAGES.bulllock}
                alt="Kids bullock-cart"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute left-3 bottom-3 flex gap-2">
                <span className="bg-white/90 rounded-md px-3 py-1 text-sm font-medium text-slate-800">Bullock-cart</span>
                <span className="bg-white/90 rounded-md px-3 py-1 text-sm font-medium text-slate-800">Fun zone</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ITINERARY & SIDEBAR */}
      <main className="px-8 pb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* itinerary column */}
          <div className="flex-1 bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold" style={{ color: BRAND.navy }}>Farm Tour Itinerary</h2>
              <div className="text-xs text-slate-500">One Day • 9:30 AM — 4:30 PM</div>
            </div>

            <p className="mt-2 text-sm text-slate-600">Audience: Clients / Students — a hands-on day covering millet farming, dairy practices and farm-to-table experiences.</p>

            {/* big banner image that fills its area */}
            <div className="mt-4 rounded-2xl overflow-hidden">
              <div className="relative w-full h-40">
                <Image src={FEATURE_IMAGES.lunchBanner} alt="Nutrix Farm Lunch" fill className="object-cover" unoptimized />
              </div>
            </div>

            <div className="mt-4 space-y-4">
              {/* 9:30 AM — Welcome & Orientation */}
              <ItItem
                time="09:30 AM"
                title="Welcome & Orientation"
                desc="Warm welcome by the farm team. Brief introduction about the farm’s history, millet cultivation, and dairy practices. Safety instructions & distribution of ID bands."
                iconSrc={FEATURE_IMAGES.badge}
                accent="#FFFDE6"
              />

              {/* 10:00 AM — Millet Farm / Milk Dairy Guided Walk */}
              <ItItem
                time="10:00 AM"
                title="Millet Farm & Milk Dairy Guided Walk"
                desc="Walk-through millet fields: soil preparation, sowing techniques and eco-friendly farming. Interactive Q&A with farm experts. See & touch millet crops at different stages."
                iconSrc={FEATURE_IMAGES.walk}
                accent="#F0FFF4"
              />

              {/* 10:45 AM — Bullock cart Ride */}
              <ItItem
                time="10:45 AM"
                title="Bullock-cart Ride"
                desc="Explore the farm on a bullock cart while our guide explains crop types and the importance of traditional transport in farming."
                iconSrc={FEATURE_IMAGES.bulllock}
                accent="#FFF0F0"
              />

              {/* 11:30 AM — Hands-On Activity */}
              <ItItem
                time="11:30 AM"
                title="Hands-On Activity (Seasonal)"
                desc="Seed sowing, harvesting or supervised milking (seasonal). Participants experience light farm tasks and learn about sustainable farming practices."
                iconSrc={FEATURE_IMAGES.stations}
                accent="#E6FFF5"
              />

              {/* 12:30 PM — Farm-to-Table Millet Meal */}
              <ItItem
                time="12:30 PM"
                title="Farm-to-Table Millet Meal"
                desc="Traditional lunch prepared with millet-based dishes. Explanation of the nutritional benefits of millets."
                iconSrc={FEATURE_IMAGES.nutrix}
                accent="#FFF7E6"
              />

              {/* 1:30 PM — Traditional Games */}
              <ItItem
                time="01:30 PM"
                title="Traditional Games"
                desc="Play an indoor Memory Tray Game: observe farm-related objects, then recall items after they are covered — fun, educational and team-oriented."
                iconSrc={FEATURE_IMAGES.games}
                accent="#EDE7FF"
              />

              {/* 2:30 PM — Interaction with Staff / Live Orientation */}
              <ItItem
                time="02:30 PM"
                title="Interaction with Staff — Live Orientation"
                desc="Sessions on how millets are processed and how cows are milked (modern & traditional). Supervised hands-on milking demonstrations and processing walkthroughs."
                iconSrc={FEATURE_IMAGES.milking}
                accent="#FFF0F6"
              />

              {/* 3:15 PM — Farm Photo Booth Experience */}
              <ItItem
                time="03:15 PM"
                title="Farm Photo Booth Experience"
                desc="Farm-themed photo booth with props (millet baskets, dairy backdrop, traditional hats). Branded frame for shareable photos on social media."
                iconSrc={FEATURE_IMAGES.photo_spot}
                accent="#FFF0FB"
              />

              {/* 3:45 PM — Engaging Activities and Wrap-up */}
              <ItItem
                time="03:45 PM — 04:30 PM"
                title="Engaging Activities & Wrap-up"
                desc="Group activity: 'Design Your Healthy Millet Plate.' Prize distribution and certificates of participation to close the day."
                iconSrc={FEATURE_IMAGES.shop}
                accent="#FFF9E6"
              />
            </div>
          </div>

          {/* sidebar */}
          <aside className="w-full lg:w-96 bg-white rounded-3xl p-4 shadow-xl border border-gray-100 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center">
                <span className="text-xl">🗺️</span>
              </div>
              <div>
                <div className="text-sm font-semibold" style={{ color: BRAND.navy }}>Where we are</div>
                <div className="text-xs text-slate-500">Agasthya NutroMilk — Tandur (primary farm)</div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-100">
              <div className="w-full h-48 bg-gray-100">
                <iframe
                  title="Farm preview map"
                  src="https://www.google.com/maps/d/embed?mid=1opW45gjSSqDnfTHPDfINBICxtc6zewA&ehbc=2E312F"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: 'none' }}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.google.com/maps/d/u/0/viewer?mid=1opW45gjSSqDnfTHPDfINBICxtc6zewA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium border"
                style={{ borderColor: '#E6E6E6', color: BRAND.navy }}
              >
                <Icon.Map /> Open full map
              </a>

              <a
                href="/anm.pdf"
                download="Agasthya-Farm-Itinerary.pdf"
                className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium border"
                style={{ borderColor: '#E6E6E6', color: BRAND.navy }}
                aria-label="Download farm itinerary"
              >
                <Icon.Download /> Download Itinerary
              </a>

              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium"
                style={{ background: BRAND.saffron, color: BRAND.navy }}
              >
                <Icon.Phone /> +91 9866531011
              </a>
            </div>

            <div className="text-xs text-slate-500 mt-2">
              <strong>Note:</strong> Bring closed-toe shoes, a hat and a water bottle. Activities are supervised and family-friendly.
            </div>
          </aside>
        </div>

        {/* FAQ & Tips */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100">
            <h3 className="text-lg font-extrabold" style={{ color: BRAND.navy }}>Kids FAQ</h3>
            <div className="mt-3 space-y-3">
              {[{
                q: 'Is the visit safe for young children?',
                a: 'Yes — all activities are supervised and children under 8 must be with an adult.'
              },{
                q: 'Is lunch included?',
                a: 'Yes — a healthy Nutrix lunch is provided. Please share allergies in advance.'
              },{
                q: 'Can we buy products at the farm?',
                a: 'Yes — Nutrix sample packs and products are available at the farm shop.'
              }].map((f, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left py-2 flex items-center justify-between gap-4"
                    aria-expanded={openFaq === i}
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{f.q}</div>
                    </div>
                    <div className="text-slate-500">{openFaq === i ? '−' : '+'}</div>
                  </button>
                  {openFaq === i && (
                    <div className="mt-1 text-sm text-slate-600 border-l border-slate-100 pl-3">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100">
            <h3 className="text-lg font-extrabold" style={{ color: BRAND.navy }}>Parent Tips</h3>
            <ul className="mt-2 text-sm text-slate-700 space-y-2">
              <li>• Comfortable clothes & closed-toe shoes for kids.</li>
              <li>• Sun protection — hat & sunscreen recommended.</li>
              <li>• Small cash/digital pay for farm-shop purchases.</li>
              <li>• Inform us about dietary restrictions when booking.</li>
            </ul>

            <div className="mt-3">
              <a
                href="mailto:visits@agasthyanutromilk.example?subject=Kids%20Farm%20Visit%20Questions"
                className="inline-flex border items-center gap-2 rounded-2xl px-3 py-2 text-sm font-medium"
              >
                Ask a question
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 rounded-3xl p-4 shadow-xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ background: 'linear-gradient(90deg,#FFFDF5,#ffffff)' }}>
          <div>
            <div className="text-lg font-extrabold" style={{ color: BRAND.navy }}>Want to be first to book?</div>
            <div className="text-sm text-slate-600 mt-1">Sign up for priority access and receive a small Nutrix gift pack on your first visit.</div>
          </div>

          <div className="flex gap-3">
            <a
              href="/anm.pdf"
              download="Agasthya-Farm-Itinerary.pdf"
              className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold"
              style={{ background: BRAND.saffron, color: BRAND.navy }}
              aria-label="Download farm itinerary"
            >
              <Icon.Download /> <span className="ml-2">Download itinerary</span>
            </a>

            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold border"
              style={{ borderColor: '#E6E6E6', color: BRAND.navy }}
            >
              <Icon.Phone /> <span className="ml-2">Contact us</span>
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}
