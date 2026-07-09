import type { Metadata } from "next";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials — IronForge Gym",
};

const testimonials = [
  {
    name: "Usman Farooq",
    role: "Member since 2022",
    quote:
      "I walked in barely able to squat the bar. A year of coached programming later, I pulled a 180kg deadlift. The coaches actually track your numbers here.",
    rating: 5,
    initials: "UF",
  },
  {
    name: "Hina Aslam",
    role: "Member since 2023",
    quote:
      "Best decision I made this year. The floor never feels overcrowded, and the yoga + strength combo classes fixed my back pain within weeks.",
    rating: 5,
    initials: "HA",
  },
  {
    name: "Zeeshan Iqbal",
    role: "Competitive Lifter",
    quote:
      "IronForge hosted my first meet. The platforms are competition-spec and the coaching staff genuinely knows programming, not just motivation.",
    rating: 5,
    initials: "ZI",
  },
  {
    name: "Amna Sheikh",
    role: "Member since 2021",
    quote:
      "The 5am access is a lifesaver with my work schedule. Clean equipment, real chalk, and nobody hogging the squat rack for Instagram videos.",
    rating: 4,
    initials: "AS",
  },
  {
    name: "Bilal Chaudhry",
    role: "Member since 2024",
    quote:
      "Switched from a commercial chain gym. The difference in coaching quality is night and day — my form finally got corrected after years.",
    rating: 5,
    initials: "BC",
  },
  {
    name: "Sara Malik",
    role: "Member since 2023",
    quote:
      "Premium plan is worth every rupee. Weekly check-ins keep me honest, and the recovery room after leg day is criminally underrated.",
    rating: 5,
    initials: "SM",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="container-forge pb-16 pt-40 text-center md:pt-48">
        <span className="eyebrow mx-auto w-fit" data-aos="fade-up">
          Member Stories
        </span>
        <h1
          className="mx-auto mt-4 max-w-2xl text-5xl leading-[1.02] text-paper md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Real lifters. Real numbers.
        </h1>
        <p
          className="mx-auto mt-6 max-w-lg text-muted md:text-lg"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          We don&apos;t write our own reviews — our members do. Here&apos;s
          what training at IronForge actually looks like.
        </p>
      </section>

      <section className="container-forge pb-24 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-canvas-soft py-20 text-center">
        <p className="font-mono text-sm text-muted" data-aos="fade-up">
          Want to see it for yourself? Your first session is free.
        </p>
        <a href="/membership" className="btn-primary mt-6 inline-flex" data-aos="fade-up">
          Claim Your Free Session
        </a>
      </section>
    </>
  );
}
