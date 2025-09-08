"use client";

import { ShieldCheck, HeartHandshake, Users, Smartphone } from 'lucide-react';

const pillars = [
  {
    icon: <ShieldCheck size={32} className="text-amber-500" />,
    title: "Uncompromised Purity",
    desc: "No preservatives. No mixing. Only natural goodness—validated by rigorous quality tests."
  },
  {
    icon: <HeartHandshake size={32} className="text-amber-500" />,
    title: "Ethical Farming",
    desc: "Animal-first care, sustainable feed, and transparent practices across our supply chain."
  },
  {
    icon: <Users size={32} className="text-amber-500" />,
    title: "Local Impact",
    desc: "We champion local farmers, creating shared value for communities and customers."
  },
  {
    icon: <Smartphone size={32} className="text-amber-500" />,
    title: "Smart Convenience",
    desc: "Flexible subscriptions, vacation mode, and exclusive offers via our mobile app."
  }
];

export default function WhatWeStandFor() {
  return (
    // --- CHANGED: Switched background to white for consistency ---
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            What We Stand For
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Enterprise-grade standards, farm-fresh authenticity.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <Pillar
              key={pillar.title}
              icon={pillar.icon}
              title={pillar.title}
              desc={pillar.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillar({ icon, title, desc }) {
  return (
    // --- CHANGED: Added ring and shadow so cards are visible on the new white background ---
    <div className="group rounded-2xl bg-white p-7 text-center ring-1 ring-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition-all duration-300 group-hover:bg-amber-500">
        <div className="transition-transform duration-300 group-hover:scale-110 group-hover:[&>svg]:text-white">
          {icon}
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}