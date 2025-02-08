'use client';

import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import TransactionHistory from '@/components/contacts/TransactionHistory';
import RelanceSystem from '@/components/contacts/RelanceSystem';
import { LineChart } from '@/components/charts/StatisticsChart';

const ContactDetailPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Détails Contact</h1>
          <div className="flex space-x-3">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
              Envoyer Relance
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Nouvelle Transaction
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Solde Actuel</h3>
              <p className="text-2xl font-bold text-blue-600">450,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Crédit Disponible</h3>
              <p className="text-2xl font-bold text-green-600">550,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Échéances en Retard</h3>
              <p className="text-2xl font-bold text-red-600">3</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Délai Moyen Paiement</h3>
              <p className="text-2xl font-bold">15 jours</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Évolution du Solde</h2>
              <LineChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Système de Relance</h2>
              <RelanceSystem />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Historique des Transactions</h2>
            <TransactionHistory />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContactDetailPage;
