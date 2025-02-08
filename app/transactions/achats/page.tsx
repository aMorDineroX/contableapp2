'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import AchatTable from '@/components/shared/AchatTable';
import Modal from '@/components/shared/Modal';
import AchatForm from '@/components/forms/AchatForm';
import { LineChart } from '@/components/charts/StatisticsChart';

const AchatsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Gestion des Achats</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Nouvel Achat
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Achats du Jour</h3>
              <p className="text-2xl font-bold text-green-600">450,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Achats du Mois</h3>
              <p className="text-2xl font-bold text-blue-600">2,850,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Factures Impayées</h3>
              <p className="text-2xl font-bold text-red-600">175,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Total Achats</h3>
              <p className="text-2xl font-bold">3,475,000 FCFA</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Évolution des Achats</h2>
              <LineChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Achats Récents</h2>
              <AchatTable />
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <AchatForm />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default AchatsPage;
