import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ParallaxMap from "@/components/ParallaxMap";
import WorkoutTimer from "@/components/WorkoutTimer";
import { ThumbsUp, Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — BodyTech Gym",
};

const social = [
  { icon: ThumbsUp, href: "https://www.facebook.com/bodytech.pk/", label: "Facebook" },
];

const branches = [
  {
    name: "EME",
    address: "18, 22-D Commercial, DHA Phase-XII EME, Multan Road, Lahore",
    phone: "+92 300 4492851",
    landline: "042 378 82654",
  },
  {
    name: "Rahbar",
    address: "Bodytech Sports Complex, C Block Sector-1, DHA Phase-XI Rahbar, Lahore",
    phone: "+92 306 0440966",
    landline: "042 378 24514",
  },
  {
    name: "Bahria Town",
    address: "1st Floor, Pearl One Tower, Plot 10C-18C Jinnah Ave, Iqbal Block, Bahria Town, Lahore",
    phone: "+92 333 1114561",
    landline: "042 374 51817",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="container-forge pb-16 pt-40 md:pt-48">
        <span className="eyebrow" data-aos="fade-up">
          Get In Touch
        </span>
        <h1
          className="mt-4 max-w-2xl text-5xl leading-[1.02] text-paper md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Come see the floor for yourself.
        </h1>
        <p
          className="mt-6 max-w-xl text-muted md:text-lg"
          data-aos="fade-up"
          data-aos-delay="160"
        >
          Questions about coaching, classes, or membership? Send a message and
          our team will get back to you, or reach your nearest branch directly
          below.
        </p>
      </section>

      <section className="container-forge grid gap-10 pb-20 md:grid-cols-2 md:pb-28">
        <div data-aos="fade-right">
          <ContactForm />
        </div>

        <div className="space-y-8" data-aos="fade-left">
          <ParallaxMap />

          <div className="panel flex items-start gap-3 p-5">
            <Mail size={18} className="mt-0.5 shrink-0 text-coral" />
            <div>
              <p className="text-xs text-muted">Email</p>
              <p className="text-sm text-paper">info@bodytechpk.com</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {branches.map((b) => (
              <div key={b.name} className="panel flex flex-col gap-2 p-5">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="shrink-0 text-coral" />
                  <p className="text-sm text-paper">{b.name}</p>
                </div>
                <p className="text-xs text-muted">{b.address}</p>
                <div className="flex items-center gap-2 pt-1">
                  <Phone size={14} className="shrink-0 text-coral" />
                  <p className="text-xs text-muted">{b.phone}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-sm border border-line text-muted
                transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:text-coral"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-canvas-soft py-24 md:py-32">
        <div className="container-forge">
          <div className="text-center">
            <span className="eyebrow" data-aos="fade-up">
              Try It Out
            </span>
            <h2 className="mt-4 text-4xl text-paper md:text-5xl" data-aos="fade-up">
              Your Rest Timer, Ready to Go
            </h2>
          </div>
          <div className="mt-12" data-aos="zoom-in">
            <WorkoutTimer />
          </div>
        </div>
      </section>
    </>
  );
}
