import Container from "./container";
import { Link } from "react-router-dom";
import { FaTelegram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const quickLinks = [
  { to: "/cuisine/Italian", label: "Italian" },
  { to: "/cuisine/American", label: "American" },
  { to: "/cuisine/Thai", label: "Thai" },
  { to: "/cuisine/Japanese", label: "Japanese" },
];

const socials = [
  { href: "https://t.me/Mj_majlesi", label: "Telegram", Icon: FaTelegram },
  { href: "mailto:mohammadjavadmajlesi313@gmail.com", label: "Email", Icon: FaEnvelope },
  { href: "https://github.com/mjmajlesi", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: FaLinkedin },
];

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0a0f1b]">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 py-12 md:flex-row">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Savora home">
            <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="30" r="16" fill="none" stroke="#f59e0b" strokeWidth="4" />
              <path d="M20 52h24M26 46h12" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <span className="font-display text-lg font-semibold text-white">Savora</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Footer">
            {quickLinks.map(({ to, label }) => (
              <Link key={to} to={to} className="text-sm text-white/60 transition-colors hover:text-accent">
                {label}
              </Link>
            ))}
            <Link to="/about" className="text-sm text-white/60 transition-colors hover:text-accent">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-white/10 p-2.5 text-white/60 transition-all hover:border-accent/50 hover:text-accent"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <p className="border-t border-white/5 py-5 text-center text-xs text-white/35">
          © {new Date().getFullYear()} Mohammad Javad Majlesi · Data from TheMealDB
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
