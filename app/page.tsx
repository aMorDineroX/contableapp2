'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              <span className="text-blue-600">SYSCOHADA</span> : Votre Solution de Comptabilité Africaine
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Une plateforme moderne et intuitive pour gérer votre comptabilité en conformité avec les normes SYSCOHADA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/register"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                S'inscrire
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/auth/login"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Conformité Totale</h3>
              <p className="text-gray-600">
                100% conforme aux exigences SYSCOHADA révisé et aux normes comptables africaines
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Gestion Simplifiée</h3>
              <p className="text-gray-600">
                Interface intuitive pour la saisie des écritures et la génération des états financiers
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Rapports Détaillés</h3>
              <p className="text-gray-600">
                Génération automatique des bilans, comptes de résultats et autres états financiers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt à moderniser votre comptabilité ?</h2>
          <Link 
            href="/auth/register"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            S'inscrire
          </Link>
        </div>
      </section>
    </div>
  );
}
