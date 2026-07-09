import type { Metadata } from "next";
import TrainerCard from "@/components/TrainerCard";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About — BodyTech Gym",
};

const trainers = [
  {
    name: "Strength & Fitness Trainers",
    role: "Certified Coaches",
    focus: "Personalized programming for members of every age and fitness level.",
    initials: "ST",
  },
  {
    name: "Taekwondo Instructors",
    role: "Adults & Kids Programs",
    focus: "Certified instructors leading classes for both adults and children.",
    initials: "TK",
  },
  {
    name: "Physiotherapists",
    role: "Recovery & Rehab",
    focus: "On-site physiotherapy support to keep members training injury-free.",
    initials: "PT",
  },
  {
    name: "Nutritionists",
    role: "Diet & Wellness",
    focus: "Nutrition guidance tailored to your training goals.",
    initials: "NT",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-forge pb-20 pt-40 md:pt-48">
        <span className="eyebrow" data-aos="fade-up">
          Our Story
        </span>
        <h1
          className="mt-4 max-w-2xl text-5xl leading-[1.02] text-paper md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Built for your
          <br /> transformation.
        </h1>
        <p
          className="mt-6 max-w-xl text-muted md:text-lg"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          With over 5 years of dedicated experience, BodyTech has grown into
          one of Lahore&apos;s leading fitness centers — certified to ISF
          (International Standard for Facilities) industry standards, with
          three branches and a team that genuinely cares about your progress.
        </p>
      </section>

      <section className="border-t border-line bg-canvas-soft py-24 md:py-32">
        <div className="container-forge">
          <span className="eyebrow" data-aos="fade-up">
            Our Team
          </span>
          <h2 className="mt-4 text-4xl text-paper md:text-5xl" data-aos="fade-up">
            A Team Dedicated to Your Progress
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((t) => (
              <TrainerCard key={t.name} trainer={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-forge py-24 md:py-32">
        <span className="eyebrow" data-aos="fade-up">
          Milestones
        </span>
        <h2 className="mt-4 text-4xl text-paper md:text-5xl" data-aos="fade-up">
          Our Journey So Far
        </h2>
        <div className="mt-16">
          <Timeline />
        </div>
      </section>
    </>
  );
}