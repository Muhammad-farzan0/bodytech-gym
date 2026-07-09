import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services — BodyTech Gym",
};

const services = [
  {
    icon: "strength" as const,
    title: "Ladies & Gents Wings",
    copy: "Separate, fully-equipped floors so every member trains in a comfortable environment.",
  },
  {
    icon: "cardio" as const,
    title: "Taekwondo",
    copy: "Classes for adults and kids alike, taught by certified instructors on our dedicated floor.",
  },
  {
    icon: "yoga" as const,
    title: "Pilates & Yoga",
    copy: "Flexibility, core strength, and recovery-focused classes for every fitness level.",
  },
  {
    icon: "personal" as const,
    title: "Personal Training",
    copy: "1-on-1 programming with certified trainers, physiotherapists, and nutritionists.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="container-forge pb-16 pt-40 md:pt-48">
        <span className="eyebrow" data-aos="fade-up">
          Facilities
        </span>
        <h1
          className="mt-4 max-w-2xl text-5xl leading-[1.02] text-paper md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Personalized fitness solutions for every age.
        </h1>
        <p
          className="mt-6 max-w-xl text-muted md:text-lg"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          Hover a service to flip the tile. Scroll to watch each one take its
          place on the floor.
        </p>
      </section>

      <section className="container-forge pb-24 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              copy={s.copy}
              index={i}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-canvas-soft py-24 md:py-32">
        <div className="container-forge grid gap-10 md:grid-cols-2 md:items-center">
          <div data-aos="fade-right">
            <span className="eyebrow">What We Offer</span>
            <h2 className="mt-4 text-4xl text-paper md:text-5xl">
              Classes &amp; services for every goal.
            </h2>
          </div>
          <div className="space-y-4 font-mono text-sm text-muted" data-aos="fade-left">
            {[
              ["Taekwondo", "Adults & Kids"],
              ["Pilates", "All Levels"],
              ["Yoga", "All Levels"],
              ["Personal Training", "1-on-1 Coaching"],
              ["Physiotherapy", "By Appointment"],
              ["Nutrition Consultation", "By Appointment"],
            ].map(([item, tag]) => (
              <div
                key={item}
                className="flex justify-between border-b border-line pb-3"
              >
                <span className="text-paper">{item}</span>
                <span className="text-coral">{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}