import Link from "next/link";
import { ThumbsUp } from "lucide-react";

const social = [
  { icon: ThumbsUp, href: "https://www.facebook.com/bodytech.pk/", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line px-4 pb-4 pt-20 md:px-6">
      <div className="container-forge panel overflow-hidden !rounded-5xl px-8 py-14 md:px-16 md:py-20">
        <div className="text-center">
          <h2 className="mx-auto max-w-xl text-4xl leading-[1.05] text-paper md:text-5xl">
            Ready to start
            <br /> your journey?
          </h2>
          <div className="mt-8 flex justify-center">
            <Link href="/membership" className="btn-primary">
              Join BodyTech Today
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-display text-lg text-paper">BodyTech</span>
            <p className="mt-3 max-w-sm text-sm text-muted">
              Lahore&apos;s premier fitness center — certified trainers,
              separate ladies &amp; gents wings, and classes for every goal
              across our three branches.
            </p>
            <div className="mt-5 flex gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted
                  transition-all duration-300 hover:-translate-y-1 hover:border-coral/40 hover:text-paper"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-muted">Navigate</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-paper">About</Link></li>
              <li><Link href="/services" className="hover:text-paper">Services</Link></li>
              <li><Link href="/membership" className="hover:text-paper">Membership</Link></li>
              <li><Link href="/testimonials" className="hover:text-paper">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-paper">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-muted">Our Branches</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <span className="text-paper">EME</span>
                <br />
                18, 22-D Commercial, DHA Phase-XII, Multan Road
              </li>
              <li>
                <span className="text-paper">Rahbar</span>
                <br />
                C Block Sector-1, DHA Phase-XI Rahbar
              </li>
              <li>
                <span className="text-paper">Bahria Town</span>
                <br />
                1st Floor, Pearl One Tower, Jinnah Ave
              </li>
              <li className="pt-1">info@bodytechpk.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-line pt-6 text-xs text-muted md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} BodyTech. All rights reserved.</span>
          <span>Train smarter. Lift heavier.</span>
        </div>
      </div>
    </footer>
  );
}
