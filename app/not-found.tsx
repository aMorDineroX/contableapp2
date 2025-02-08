'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold">404 - Page non trouvée</h2>
      <p className="mt-4">La page que vous recherchez n'existe pas.</p>
      <Link href="/" className="mt-6 text-blue-600 hover:underline">
        Retour à l'accueil
      </Link>
    </div>
  );
}
