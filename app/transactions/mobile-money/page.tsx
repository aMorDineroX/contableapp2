'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import MobileMoneyTable from '@/components/shared/MobileMoneyTable';
import Modal from '@/components/shared/Modal';
import MobileMoneyForm from '@/components/forms/MobileMoneyForm';
import { BarChart } from '@/components/charts/StatisticsChart';

const MobileMoneyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Transactions Mobile Money</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
          >
            Nouvelle Transaction
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Orange Money</h3>
              <p className="text-2xl font-bold text-orange-600">1,250,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">MTN Money</h3>
              <p className="text-2xl font-bold text-yellow-600">950,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Wave</h3>
              <p className="text-2xl font-bold text-blue-600">750,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Total Transactions</h3>
              <p className="text-2xl font-bold">2,950,000 FCFA</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Répartition par Opérateur</h2>
              <BarChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Transactions Récentes</h2>
              <MobileMoneyTable />
            </div>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <MobileMoneyForm />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default MobileMoneyPage;
