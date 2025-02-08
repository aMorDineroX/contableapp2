'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

const navSections: NavSection[] = [
  {
    title: 'Transactions',
    links: [
      { href: '/transactions/ventes', label: 'Ventes' },
      { href: '/transactions/achats', label: 'Achats' },
      { href: '/transactions/mobile-money', label: 'Mobile Money' },
    ],
  },
  {
    title: 'Rapports Financiers',
    links: [
      { href: '/rapports/bilan', label: 'Bilan' },
      { href: '/rapports/resultat', label: 'Compte de Résultat' },
      { href: '/rapports/tresorerie', label: 'Flux de Trésorerie' },
    ],
  },
  {
    title: 'Conformité OHADA',
    links: [
      { href: '/conformite/syscohada', label: 'SYSCOHADA Révisé' },
      { href: '/conformite/declarations', label: 'Déclarations Fiscales' },
      { href: '/conformite/audit', label: 'Audit et Contrôle' },
    ],
  },
];

export function NavSection({ title, links }: NavSection) {
  const pathname = usePathname();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block transition-colors hover:text-primary ${
              pathname === link.href
                ? 'text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function NavLinks() {
  return navSections.map((section) => <NavSection key={section.title} {...section} />);
}
