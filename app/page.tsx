"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    title: "Understand",
    description:
      "See your financial picture clearly with simple and meaningful insights.",
  },
  {
    number: "02",
    title: "Act",
    description:
      "Turn financial information into practical decisions you can act on.",
  },
  {
    number: "03",
    title: "Grow",
    description:
      "Build better financial habits and move confidently toward your goals.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Bring your financial information together in one simple place.",
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Turn complex financial information into clear insights.",
  },
  {
    number: "03",
    title: "Act",
    description:
      "Make informed decisions based on what matters to you.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Build stronger financial habits and work toward your goals.",
  },
];

const financialData = {
  Week: {
    balance: "₹1,18,200",
    income: "₹12,500",
    savings: "₹4,800",
    change: "+3.2%",
  },
  Month: {
    balance: "₹1,24,500",
    income: "₹52,000",
    savings: "₹20,800",
    change: "+8.4%",
  },
  Year: {
    balance: "₹1,42,800",
    income: "₹6,24,000",
    savings: "₹1,86,000",
    change: "+14.7%",
  },
};

export default function Home() {
  const [period, setPeriod] =
    useState<keyof typeof financialData>("Month");

  const currentData = financialData[period];

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#111713]">

      {/* ================= NAVBAR ================= */}

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

        <div className="text-2xl font-bold tracking-tight">
          fermor<span className="text-[#3f7d55]">.</span>
        </div>

        <div className="hidden items-center gap-8 text-sm md:flex">
          <a href="#product" className="hover:opacity-60">
            Product
          </a>

          <a href="#insights" className="hover:opacity-60">
            Insights
          </a>

          <a href="#how-it-works" className="hover:opacity-60">
            How it works
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden text-sm md:block">
            Login
          </button>

          <button className="rounded-full bg-[#111713] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#263029]">
            Get started
          </button>
        </div>

      </nav>

      {/* ================= HERO ================= */}

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-24">

        <div>

          <div className="mb-6 inline-flex rounded-full border border-[#d9ddd7] bg-white px-4 py-2 text-sm">
            A simpler way to understand your money
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Your money,
            <br />
            made easier
            <span className="text-[#3f7d55]">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#626a64]">
            Fermor helps you understand where your money goes, make better
            decisions, and build a stronger financial future.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <button className="rounded-full bg-[#111713] px-7 py-4 font-medium text-white transition hover:-translate-y-0.5">
              Get started
            </button>

            <a
              href="#how-it-works"
              className="rounded-full border border-[#ccd2cc] bg-white px-7 py-4 text-center font-medium transition hover:-translate-y-0.5"
            >
              See how it works
            </a>

          </div>

        </div>

        {/* ================= HERO DASHBOARD ================= */}

        <div>

          <div className="rounded-[2rem] border border-[#dfe4de] bg-white p-6 shadow-[0_25px_70px_rgba(20,30,22,0.08)] sm:p-8">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-[#737b75]">
                  Total balance
                </p>

                <p className="mt-2 text-4xl font-semibold tracking-tight">
                  {currentData.balance}
                </p>
              </div>

              <div className="rounded-full bg-[#e7f1e9] px-3 py-1.5 text-sm font-medium text-[#3f7d55]">
                {currentData.change}
              </div>

            </div>

            {/* PERIOD BUTTONS */}

            <div className="mt-10">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-sm font-medium">
                  Financial overview
                </p>

                <div className="flex rounded-full bg-[#f1f3ef] p-1">

                  {(["Week", "Month", "Year"] as const).map((item) => (

                    <button
                      key={item}
                      onClick={() => setPeriod(item)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                        period === item
                          ? "bg-[#111713] text-white"
                          : "text-[#626a64] hover:text-[#111713]"
                      }`}
                    >
                      {item}
                    </button>

                  ))}

                </div>

              </div>

              {/* CHART */}

              <div className="mt-6 flex h-40 items-end gap-3">

                {[35, 55, 42, 70, 50, 78, 62, 90, 72, 95, 82, 100].map(
                  (height, index) => (

                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-[#9cc5a5]"
                      style={{
                        height: `${height}%`,
                      }}
                    />

                  )
                )}

              </div>

            </div>

            {/* INCOME + SAVINGS */}

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-[#f5f7f4] p-4">

                <p className="text-sm text-[#737b75]">
                  Income
                </p>

                <p className="mt-2 text-xl font-semibold">
                  {currentData.income}
                </p>

              </div>

              <div className="rounded-2xl bg-[#f5f7f4] p-4">

                <p className="text-sm text-[#737b75]">
                  Savings
                </p>

                <p className="mt-2 text-xl font-semibold">
                  {currentData.savings}
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY FERMOR ================= */}

      <section
        id="product"
        className="border-y border-[#e1e5df] bg-white px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3f7d55]">
              Why Fermor
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Money shouldn't feel complicated.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#626a64]">
              Everything you need to understand your finances and make
              confident decisions without unnecessary complexity.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            {features.map((feature) => (

              <div
                key={feature.number}
                className="rounded-3xl border border-[#e1e5df] p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >

                <p className="text-sm font-semibold text-[#3f7d55]">
                  {feature.number}
                </p>

                <h3 className="mt-12 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-[#626a64]">
                  {feature.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= INSIGHTS ================= */}

      <section
        id="insights"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32"
      >

        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#3f7d55]">
              Your financial picture
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              See what your money is telling you.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#626a64]">
              Instead of searching through numbers, Fermor gives you a simple
              view of your income, spending, savings and financial progress.
            </p>

            <button className="mt-8 rounded-full bg-[#111713] px-6 py-3.5 font-medium text-white">
              Explore insights
            </button>

          </div>

          <div className="rounded-[2rem] border border-[#dfe4de] bg-white p-6 shadow-xl">

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-[#f5f7f4] p-5">

                <p className="text-sm text-[#737b75]">
                  Spending
                </p>

                <p className="mt-2 text-2xl font-semibold">
                  ₹31,200
                </p>

              </div>

              <div className="rounded-2xl bg-[#e7f1e9] p-5">

                <p className="text-sm text-[#3f7d55]">
                  Savings
                </p>

                <p className="mt-2 text-2xl font-semibold">
                  ₹20,800
                </p>

              </div>

            </div>

            <div className="mt-4 rounded-2xl bg-[#f5f7f4] p-6">

              <div className="flex items-center justify-between">

                <p className="font-medium">
                  Spending trend
                </p>

                <span className="text-sm text-[#737b75]">
                  Last 6 months
                </span>

              </div>

              <div className="mt-8 flex h-48 items-end gap-3">

                {[45, 65, 55, 80, 62, 75, 58, 88, 70, 92].map(
                  (height, index) => (

                    <div
                      key={index}
                      className="flex-1 rounded-t-lg bg-[#bfd8c4]"
                      style={{
                        height: `${height}%`,
                      }}
                    />

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= HOW IT WORKS ================= */}

      <section
        id="how-it-works"
        className="bg-[#111713] px-6 py-24 text-white lg:px-8 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#9cc5a5]">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              From information to action.
            </h2>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            {steps.map((step) => (

              <div
                key={step.number}
                className="border-t border-white/20 pt-6"
              >

                <p className="text-sm text-[#9cc5a5]">
                  {step.number}
                </p>

                <h3 className="mt-10 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="px-6 py-24 lg:px-8 lg:py-32">

        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#dfeee2] px-8 py-16 text-center sm:px-16">

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Make your money work smarter.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#56625a]">
            Start building a clearer, more confident relationship with your
            finances.
          </p>

          <button className="mt-8 rounded-full bg-[#111713] px-7 py-4 font-medium text-white transition hover:-translate-y-1">
            Get started
          </button>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-[#e1e5df] px-6 py-10 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">

          <div>

            <div className="text-2xl font-bold">
              fermor<span className="text-[#3f7d55]">.</span>
            </div>

            <p className="mt-2 text-sm text-[#737b75]">
              A simpler way to understand your money.
            </p>

          </div>

          <div className="flex flex-wrap gap-6 text-sm text-[#626a64]">

            <a href="#product">
              Product
            </a>

            <a href="#insights">
              Insights
            </a>

            <a href="#how-it-works">
              How it works
            </a>

            <span>
              Privacy
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}