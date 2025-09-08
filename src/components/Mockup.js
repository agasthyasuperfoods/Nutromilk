"use client";

import Image from "next/image";
import {
  Droplet,
  ThermometerSnowflake,
  ShieldCheck,
  FlaskConical,
  Timer,
  Truck,
  PauseCircle,
  WalletCards,
  Milk,
  Leaf,
} from "lucide-react";

/**
 * Assets needed
 * - /public/mock.png      (your app screen)
 *
 * Usage
 * <MilkValueShowcase />
 */

export default function MilkValueShowcase() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        // brand tokens
        ["--nv"]: "#0F1D3D", // brand navy
        ["--am"]: "#FFB100", // brand amber
        ["--cr"]: "#FFF6E5", // brand cream
        ["--ink"]: "rgba(15,29,61,0.76)", // ink-ish
      }}
    >
      {/* Cream backdrop wash */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% -80px, rgba(255,177,0,0.15) 0%, rgba(255,246,229,0.85) 35%, #FFFFFF 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 lg:pt-28 lg:pb-20">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide"
            style={{ color: "var(--nv)", borderColor: "rgba(15,29,61,0.15)", background: "var(--cr)" }}>
            <Milk className="h-4 w-4" /> 100% Milk. Nothing else.
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl"
              style={{ color: "var(--nv)" }}>
            Farm-fresh milk, <span style={{ color: "var(--am)" }}>delivered before sunrise</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: "var(--ink)" }}>
            We’ve re-imagined your daily milk: traceable farms, cold-chain integrity, and a
            delightful app experience—all tuned for reliability every single morning.
          </p>
        </div>

        {/* Metric ribbon */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Metric label="Cold-chain ≤ 4°C" Icon={ThermometerSnowflake} />
          <Metric label="Delivered by 6:30 AM" Icon={Timer} />
          <Metric label="Zero preservatives" Icon={ShieldCheck} />
          <Metric label="Batch tested daily" Icon={FlaskConical} />
        </div>

        {/* Main layout */}
        <div className="relative mt-12 grid grid-cols-1 items-center gap-8 lg:mt-16 lg:grid-cols-3">
          {/* Left stack */}
          <div className="order-2 space-y-6 lg:order-1">
            <Card
              Icon={Droplet}
              title="Single-source milk"
              copy="Sourced from partner farms with consistent feed & care. No mixing across origins."
            />
            <Card
              Icon={Leaf}
              title="Naturally rich"
              copy="Full-bodied taste—perfect for tea, coffee, and your morning glass."
            />
            <Card
              Icon={PauseCircle}
              title="Pause / skip anytime"
              copy="Travel plans? Pause instantly and resume when you’re back."
            />
          </div>

          {/* Center phone */}
          <div className="order-1 mx-auto w-full lg:order-2">
            <div className="relative mx-auto h-[560px] w-[280px] sm:h-[640px] sm:w-[320px]">
              {/* halo */}
              <div
                className="absolute -inset-10 rounded-[999px] blur-2xl"
                style={{
                  background:
                    "radial-gradient(70% 60% at 50% 35%, rgba(255,177,0,0.35) 0%, rgba(255,246,229,0.7) 40%, rgba(15,29,61,0.07) 100%)",
                }}
              />
              {/* phone */}
              <div
                className="relative z-10 h-full w-full rounded-[2.2rem] shadow-2xl"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgba(15,29,61,0.12)",
                }}
              >
                <div
                  className="absolute left-1/2 top-2 z-20 h-1.5 w-16 -translate-x-1/2 rounded-full"
                  style={{ backgroundColor: "rgba(15,29,61,0.18)" }}
                />
                <div className="absolute inset-0 overflow-hidden rounded-[2.2rem]">
                  <Image
                    src="/mock.png"
                    alt="Agasthya Nutro Milk app—subscribe, manage, and track deliveries"
                    fill
                    sizes="(min-width:1024px) 320px, 280px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right stack */}
          <div className="order-3 space-y-6">
            <Card
              Icon={Truck}
              title="Doorstep by morning"
              copy="Optimized micro-routes bring your milk fresh and fast—like clockwork."
            />
            <Card
              Icon={WalletCards}
              title="UPI & autopay"
              copy="Set & forget. Flexible billing with reminders and smart retries."
            />
            <Card
              Icon={ShieldCheck}
              title="Every batch verified"
              copy="Quality checks and temperature logs on every hop in the journey."
            />
          </div>
        </div>

        {/* How it works */}
        <div className="mt-16 lg:mt-20">
          <h3 className="text-center text-xl font-bold" style={{ color: "var(--nv)" }}>
            How your milk reaches you
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Step index="01" title="Milked at dawn" copy="Collected at partner farms in the early hours for peak freshness." />
            <Step index="02" title="Chilled & tested" copy="Rapid chilling ≤ 4°C and routine batch tests to ensure quality." />
            <Step index="03" title="Delivered before sunrise" copy="Routed to your doorstep—fresh, cold, and right on time." />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow"
            style={{ backgroundColor: "var(--am)" }}
          >
            Get the app
          </a>
          <a
            href="#subscribe"
            className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-semibold"
            style={{
              color: "var(--nv)",
              borderColor: "rgba(15,29,61,0.15)",
              backgroundColor: "#fff",
            }}
          >
            Start a subscription
          </a>
        </div>
      </div>

      {/* Decorative orbit (desktop) */}
      <svg
        className="pointer-events-none absolute -top-24 left-1/2 hidden h-[720px] w-[720px] -translate-x-1/2 lg:block"
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
  );
}

/* ---------- pieces ---------- */

function Metric({ label, Icon }) {
  return (
    <div
      className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold"
      style={{ borderColor: "rgba(15,29,61,0.12)", background: "var(--cr)", color: "var(--nv)" }}
    >
      <Icon className="h-4 w-4" />
      {label}
    </div>
  );
}

function Card({ Icon, title, copy }) {
  return (
    <div
      className="rounded-2xl p-5 shadow-sm transition-all hover:shadow-md"
      style={{
        background: "#fff",
        border: "1px solid rgba(15,29,61,0.08)",
      }}
    >
      <div
        className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl"
        style={{
          background: "var(--cr)",
          border: "1px solid rgba(15,29,61,0.12)",
          color: "var(--nv)",
        }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="text-lg font-semibold" style={{ color: "var(--nv)" }}>
        {title}
      </h4>
      <p className="mt-1 text-slate-600">{copy}</p>
    </div>
  );
}

function Step({ index, title, copy }) {
  return (
    <div
      className="rounded-2xl p-5"
      style={{ background: "#fff", border: "1px solid rgba(15,29,61,0.08)" }}
    >
      <span
        className="inline-flex rounded-lg px-2 py-0.5 text-xs font-bold"
        style={{ background: "var(--cr)", color: "var(--nv)", border: "1px solid rgba(15,29,61,0.12)" }}
      >
        {index}
      </span>
      <h5 className="mt-2 text-base font-semibold" style={{ color: "var(--nv)" }}>
        {title}
      </h5>
      <p className="mt-1 text-sm text-slate-600">{copy}</p>
    </div>
  );
}
