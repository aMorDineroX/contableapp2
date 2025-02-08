'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import TransactionTable from '@/components/shared/TransactionTable';
import Modal from '@/components/shared/Modal';
import VenteForm from '@/components/forms/VenteForm';
import { LineChart } from '@/components/charts/StatisticsChart';

const VentesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Gestion des Ventes</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Nouvelle Vente
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Ventes du Jour</h3>
              <p className="text-2xl font-bold text-blue-600">750,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Ventes du Mois</h3>
              <p className="text-2xl font-bold text-green-600">3,850,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Factures Impayées</h3>
              <p className="text-2xl font-bold text-red-600">275,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Total Ventes</h3>
              <p className="text-2xl font-bold">4,875,000 FCFA</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Évolution des Ventes</h2>
              <LineChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Ventes Récentes</h2>
              <TransactionTable />
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <VenteForm />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default VentesPage;
