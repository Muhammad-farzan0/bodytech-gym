import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Membership — BodyTech Gym",
};

const plans = [
  {
    name: "Monthly",
    price: "Ask Us",
    period: "",
    tagline: "Flexible, month-to-month training.",
    features: [
      "Full gym floor access",
      "Ladies & gents wings",
      "Certified trainer support",
    ],
  },
  {
    name: "Quarterly",
    price: "Ask Us",
    period: "",
    tagline: "3 months of consistent training.",
    features: [
      "Everything in Monthly",
      "Better value than month-to-month",
      "Priority class booking",
    ],
    highlighted: true,
  },
  {
    name: "Semi-Annual",
    price: "Ask Us",
    period: "",
    tagline: "6 months, built for real progress.",
    features: [
      "Everything in Quarterly",
      "Nutrition consultation included",
      "Physiotherapy support",
    ],
  },
  {
    name: "Annual",
    price: "Ask Us",
    period: "",
    tagline: "Our best-value, full-year plan.",
    features: [
      "Everything in Semi-Annual",
      "Maximum savings",
      "Full access across all 3 branches",
    ],
  },
];

export default function MembershipPage() {
  return (
    <>
      <section className="container-forge pb-16 pt-40 text-center md:pt-48">
        <span className="eyebrow" data-aos="fade-up">
          Membership
        </span>
        <h1
          className="mx-auto mt-4 max-w-2xl text-5xl leading-[1.02] text-paper md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Pick your plan. Start today.
        </h1>
        <p
          className="mx-auto mt-6 max-w-lg text-muted md:text-lg"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          Monthly, quarterly, semi-annual, and annual plans — flexible options
          to fit your goals and budget.
        </p>
      </section>

      <section className="container-forge pb-24 md:pb-32">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:items-start">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-canvas-soft py-20 text-center">
        <p className="font-mono text-sm text-muted" data-aos="fade-up">
          Contact your nearest branch or a front-desk coach for exact
          pricing and current offers.
        </p>
      </section>
    </>
  );
}