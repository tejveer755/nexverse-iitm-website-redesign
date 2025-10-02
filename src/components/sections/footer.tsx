import Link from 'next/link';
import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';

type FooterLink = {
  label: string;
  href: string;
};

const aboutLinks: FooterLink[] = [
  { label: 'Our Mission', href: '#' },
  { label: 'The Team', href: '#' },
  { label: 'Join Us', href: '#' },
  { label: 'Contact', href: '#' },
];

const eventLinks: FooterLink[] = [
  { label: 'Workshops', href: '#' },
  { label: 'Hackathons', href: '#' },
  { label: 'Guest Lectures', href: '#' },
  { label: 'Annual Fest', href: '#' },
];

const resourceLinks: FooterLink[] = [
  { label: 'Blog', href: '#' },
  { label: 'Whitepapers', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Documentation', href: '#' },
];

const teamLinks: FooterLink[] = [
  { label: 'Core Team', href: '#' },
  { label: 'Mentors', href: '#' },
  { label: 'Alumni', href: '#' },
  { label: 'Careers', href: '#' },
];

const FooterLinkColumn = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <div>
    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">{title}</h3>
    <ul className="mt-6 space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="text-base text-white hover:text-accent transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-[40px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-8 lg:pb-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_400px] lg:gap-16">
          <div>
            <div className="mb-12">
              <Link href="/" className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white text-black">
                <span className="text-xl font-bold tracking-tight">NI</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <FooterLinkColumn title="About" links={aboutLinks} />
              <FooterLinkColumn title="Events" links={eventLinks} />
              <FooterLinkColumn title="Resources" links={resourceLinks} />
              <FooterLinkColumn title="Team" links={teamLinks} />
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-secondary p-8 text-foreground">
            <p className="font-bold text-xs uppercase tracking-widest text-muted-foreground">Project Spotlight</p>
            <h4 className="mt-4 text-2xl font-bold leading-tight">Pioneering the Metaverse for Education</h4>
            <div className="mt-6 flex-grow rounded-xl bg-muted"></div>
            <Link href="#" className="mt-8 flex items-center font-semibold text-foreground group">
              Read Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-x-6">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:gap-6">
              <p className="text-sm text-gray-400">© 2024 Nexverse IITM. All rights reserved.</p>
              <div className="flex gap-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;