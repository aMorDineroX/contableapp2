'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ConfirmationPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirection automatique vers le dashboard après 5 secondes
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto text-center">
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500" />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
          Inscription réussie !
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Votre compte a été créé avec succès. Vous allez être redirigé vers votre tableau de bord dans quelques secondes.
        </p>
        <div className="mt-8 flex flex-col space-y-4">
          <button
            onClick={() => router.push('/dashboard')}
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Accéder au tableau de bord maintenant
          </button>
          <button
            onClick={() => router.push('/')}
            className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Retour à l'accueil
          </button>
        </div>
        <div className="mt-4">
          <div className="animate-pulse">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mr-1"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600 mr-1"></span>
            <span className="inline-block h-2 w-2 rounded-full bg-blue-600"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
