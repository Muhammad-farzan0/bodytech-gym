import HeroScene from "@/components/HeroScene";
import StatsMarquee from "@/components/StatsMarquee";
import BigStat from "@/components/BigStat";
import ClassSchedule from "@/components/ClassSchedule";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroScene />

      <StatsMarquee />

      <BigStat />

      {/* Philosophy / quote section */}
      <section className="container-forge py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div data-aos="fade-right">
            <span className="eyebrow">Our Philosophy</span>
            <h2 className="mt-4 text-4xl leading-[1.05] text-paper md:text-5xl">
              Your journey,
              <br />
              our expertise.
            </h2>
          </div>
          <div className="space-y-5" data-aos="fade-left">
            <p className="text-muted md:text-lg">
              With over 5 years of dedicated experience, BodyTech is built on
              one goal: helping every member reach their health and wellness
              potential, whatever their starting point.
            </p>
            <p className="text-muted md:text-lg">
              Our facility holds ISF (International Standard for Facilities)
              certification, and our team of certified trainers,
              physiotherapists, and nutritionists design personalized fitness
              solutions for members of every age.
            </p>
            <Link href="/about" className="btn-outline mt-2 inline-flex">
              Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-line bg-canvas-soft py-24 md:py-32">
        <div className="container-forge">
          <span className="eyebrow" data-aos="fade-up">
            What Sets Us Apart
          </span>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ladies & Gents Wings",
                copy: "Separate, fully-equipped floors so every member trains comfortably.",
              },
              {
                title: "3 Branches, Lahore",
                copy: "EME, Rahbar & Bahria Town — a BodyTech floor near you.",
              },
              {
                title: "Classes For Everyone",
                copy: "Taekwondo, Pilates & Yoga, plus dedicated kids' Taekwondo programs.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="panel p-8 transition-transform duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="font-mono text-xs text-coral">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl text-paper">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClassSchedule />

      {/* Testimonials teaser */}
      <section className="border-t border-line bg-canvas-soft py-24 md:py-32">
        <div className="container-forge">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div data-aos="fade-up">
              <span className="eyebrow">Member Stories</span>
              <h2 className="mt-4 text-4xl text-paper md:text-5xl">
                Real members. Real reviews.
              </h2>
            </div>
            <Link
              href="/testimonials"
              className="btn-outline"
              data-aos="fade-up"
            >
              See All Reviews
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
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
            ].map((t, i) => (
              <TestimonialCard
                key={`${t.name}-${i}`}
                testimonial={t}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-forge py-24 text-center md:py-32">
        <h2
          className="mx-auto max-w-2xl text-4xl leading-tight text-paper md:text-5xl"
          data-aos="zoom-in"
        >
          Visit us and <span className="text-coral">see for yourself.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted" data-aos="zoom-in">
          Walk in, meet a coach, and take a tour of the floor at your nearest
          BodyTech branch.
        </p>
        <Link
          href="/membership"
          className="btn-primary mt-8 inline-flex"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          View Membership Plans
        </Link>
      </section>
    </>
  );
}
