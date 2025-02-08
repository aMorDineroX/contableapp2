'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter((p) => p);

  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            <HomeIcon className="h-4 w-4" />
          </Link>
        </li>
        {paths.map((path, index) => (
          <li key={path} className="flex items-center">
            <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
            <Link
              href={`/${paths.slice(0, index + 1).join('/')}`}
              className={`ml-1 text-sm font-medium ${
                index === paths.length - 1
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
