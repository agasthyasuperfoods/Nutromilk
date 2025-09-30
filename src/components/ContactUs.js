"use client";

import Link from "next/link";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

export default function ContactPage() {
  const shell = "mx-auto w-full max-w-[96rem] px-4 sm:px-6 xl:px-10";

  return (
    <main className="bg-white text-slate-800">
      {/* HEADER */}
      <section className={`${shell} pt-12 pb-6`}>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 text-center">
          We’re All Ears
        </h1>
        <p className="text-center text-slate-600 max-w-4xl mx-auto mt-4">
          Your questions, ideas, and feedback power our continuous improvement.
          Reach us on the channel that works best for you.
        </p>
      </section>

      {/* CONTACT METHODS */}
      <section className={`${shell} pb-4`}>
        {/* Increased spacing BETWEEN cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-7">
          <Card
            icon={<MessageSquare className="h-5 w-5 text-emerald-600" />}
            title="Chat on WhatsApp"
            subtitle="+91 81210 01774"
          >
            <p className="text-slate-600 leading-6">
              Quick, convenient, human support.
            </p>
            <Link
              href="https://wa.me/918121001774"
              className="inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Open chat →
            </Link>
          </Card>

          <Card
            icon={<Phone className="h-5 w-5 text-amber-600" />}
            title="Talk to us"
            subtitle="+91 81210 01774, +91 87120 08651"
          >
            <p className="text-slate-600 leading-6">
              We’ll route you to the right team.
            </p>
          </Card>

          <Card
            icon={<Mail className="h-5 w-5 text-sky-600" />}
            title="Write to us"
            subtitle="wecare.anm@agasthya.co.in"
          >
            <p className="text-slate-600 leading-6">
              Best for detailed queries &amp; follow-ups.
            </p>
            <Link
              href="mailto:wecare.anm@agasthya.co.in"
              className="inline-flex text-sm font-semibold text-sky-700 hover:text-sky-800"
            >
              Send email →
            </Link>
          </Card>

          <Card
            icon={<MapPin className="h-5 w-5 text-rose-600" />}
            title="Visit our office"
            subtitle="Open in Google Maps"
          >
            <p className="text-slate-600 leading-6">
              One West – ADP Building, Financial District, Hyderabad.
            </p>
            <Link
              href="https://maps.app.goo.gl/"
              className="inline-flex text-sm font-semibold text-rose-700 hover:text-rose-800"
            >
              View location →
            </Link>
          </Card>
        </div>
      </section>

      {/* MAP + SERVICE PANEL */}
      <section className={`${shell} pb-16`}>
        <div className="grid gap-6 lg:gap-7 xl:grid-cols-[1.65fr_1fr]">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm bg-white h-[420px] md:h-[500px]">
            <iframe
              title="Agasthya Nutro Milk — One West (ADP Building)"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.518684795328!2d78.3421750153579!3d17.387994388079543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb958d334e5555%3A0x336d860d5180f684!2sOne%20West!5e0!3m2!1sen!2sin!4v1662456789123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Service & Availability */}
          <aside className="rounded-2xl ring-1 ring-slate-200 shadow-sm bg-white p-6 sm:p-7 flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900">
              Service &amp; Availability
            </h2>

            <div className="mt-5 space-y-5">
              <Row
                badgeBg="bg-amber-50 ring-amber-100"
                icon={<Clock className="h-5 w-5 text-amber-600" />}
                title="Support hours"
                copy="Mon–Sat · 9am–7pm IST"
              />
              <Row
                badgeBg="bg-emerald-50 ring-emerald-100"
                icon={<BadgeCheck className="h-5 w-5 text-emerald-600" />}
                title="Typical response"
                copy="WhatsApp ~15 mins · Email within 1 business day"
              />
              <Row
                badgeBg="bg-sky-50 ring-sky-100"
                icon={<CreditCard className="h-5 w-5 text-sky-600" />}
                title="Billing"
                copy="UPI/autopay support, smart retries, and consolidated statements."
              />
            </div>

            <div className="mt-auto pt-5 border-t border-slate-100 text-sm">
              Prefer email?{" "}
              <Link
                href="mailto:wecare.anm@agasthya.co.in"
                className="font-semibold text-sky-700 hover:text-sky-800"
              >
                wecare.anm@agasthya.co.in
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- UI bits ----------------------------- */

function Card({ icon, title, subtitle, children }) {
  // Reduced INSIDE padding of each card
  return (
    <div className="rounded-xl ring-1 ring-slate-200 bg-white p-3 md:p-3.5 lg:p-4 shadow-sm">
      <div className="flex items-start gap-2">
        <div className="h-9 w-9 shrink-0 rounded-lg bg-slate-50 ring-1 ring-slate-100 grid place-items-center">
          {icon}
        </div>
        <div className="leading-tight">
          <div className="font-semibold text-slate-900 text-[15px] sm:text-base">
            {title}
          </div>
          {subtitle ? (
            <div className="text-slate-600 text-sm leading-5">{subtitle}</div>
          ) : null}
        </div>
      </div>
      <div className="mt-2 space-y-1.5 text-sm">{children}</div>
    </div>
  );
}

function Row({ badgeBg, icon, title, copy }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`mt-0.5 rounded-lg ${badgeBg} p-2 ring-1`}>{icon}</div>
      <div className="leading-tight">
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="text-slate-600 text-sm leading-6">{copy}</div>
      </div>
    </div>
  );
}
