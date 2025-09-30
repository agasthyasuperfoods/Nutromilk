"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  MessageSquareText,
} from "lucide-react";

/* ---------- Brand & Surface Tokens ---------- */
const BRAND = {
  saffron: "#FFB100",
  navy: "#0F1D3D",
  ink: "rgba(15,29,61,0.86)",
};
const SURFACE = { base: "#F5F5F4" };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative" aria-labelledby="footer-heading">
      {/* Optional splash divider */}
      <div className="absolute -top-px left-0 right-0 h-16 sm:h-24 md:h-28 pointer-events-none">
        <Image src="/splash-wave.png" alt="" fill priority sizes="100vw" className="object-cover object-top" />
      </div>

      {/* Main (unified background, CTA card removed) */}
      <div className="relative z-1 pt-8 pb-7" style={{ backgroundColor: SURFACE.base }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Footer grid */}
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-4 items-start">
            {/* Brand */}
            <div>
              <Link href="/" aria-label="Agasthya home">
                <Image src="/Logo.png" alt="Agasthya Nutro Milk logo" width={160} height={160} sizes="160px" className="object-contain" priority />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-700">
                Freshness from farm to family. Single-source A2 milk, traceable supply chain, and sunrise delivery.
              </p>
              {/* Social */}
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Social media">
                <Social href="https://facebook.com" label="Facebook" className="bg-[#1877F2] ring-[#1877F2]">
                  <Facebook className="h-5 w-5 text-white" />
                </Social>
                <Social
                  href="https://instagram.com"
                  label="Instagram"
                  className="ring-pink-500"
                  style={{ background: "linear-gradient(135deg,#F58529 0%,#DD2A7B 45%,#8134AF 100%)" }}
                >
                  <Instagram className="h-5 w-5 text-white" />
                </Social>
                <Social href="https://linkedin.com" label="LinkedIn" className="bg-[#0A66C2] ring-[#0A66C2]">
                  <Linkedin className="h-5 w-5 text-white" />
                </Social>
                <Social href="https://youtube.com" label="YouTube" className="bg-[#FF0000] ring-[#FF0000]">
                  <Youtube className="h-5 w-5 text-white" />
                </Social>
              </div>
            </div>

            {/* Shop */}
            <NavGroup title="Shop">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/subscription">Milk Subscription</FooterLink>
              <FooterLink href="/offers">Offers</FooterLink>
            </NavGroup>

            {/* Company */}
            <NavGroup title="Company">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/farmers">Farmers</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </NavGroup>

            {/* Contact */}
            <div>
              <h3 className="text-base font-bold text-slate-800">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-start gap-2 text-slate-700">
                  <MessageSquareText className="mt-0.5 h-4 w-4 text-slate-500" />
                  <a href="https://wa.me/918121001774" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700">
                    WhatsApp: +91 81210 01774
                  </a>
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <div className="space-x-2">
                    <a href="tel:+918121001774" className="hover:text-amber-700">+91 81210 01774</a>
                  </div>
                </li>     
                <li className="flex items-center gap-2 text-slate-700">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <a href="mailto:wecare.anm@agasthya.co.in" className="hover:text-amber-700">wecare.anm@agasthya.co.in</a>
                </li>
                <li className="flex items-start gap-2 text-slate-700">
                  <MapPin className="mt-0.5 h-8 w-8 text-slate-500" />
                  <div>
                    One West – ADP Building, Financial District, Hyderabad.{" "}
                    <a
                      href="https://maps.google.com/?q=One%20West%20ADP%20Building%20Financial%20District%20Hyderabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 hover:text-amber-900 underline underline-offset-2"
                    >
                      View location
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar (same background) */}
      <div className="py-6" style={{ backgroundColor: SURFACE.base }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-600 md:flex-row md:text-left">
            <p>© {year} Agasthya Nutro Milk Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Helpers ---------- */
function Social({ href, label, children, className = "", style }) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-2xl p-3 ring-1 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${className}`}
      style={style}
    >
      {children}
      <span className="sr-only">{label}</span>
    </Link>
  );
}

function NavGroup({ title, children }) {
  return (
    <div>
      <h3 className="text-base font-bold text-slate-800">{title.toUpperCase()}</h3>
      <ul className="mt-4 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="text-slate-700 hover:text-amber-800">
        {children}
      </Link>
    </li>
  );
}
