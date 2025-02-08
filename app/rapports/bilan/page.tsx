'use client';

import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { LineChart, BarChart } from '@/components/charts/StatisticsChart';
const BilanPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Bilan Comptable</h1>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Exporter PDF
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Exporter Excel
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Total Actif</h3>
              <p className="text-2xl font-bold text-blue-600">15,750,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Total Passif</h3>
              <p className="text-2xl font-bold text-red-600">12,850,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Capitaux Propres</h3>
              <p className="text-2xl font-bold text-green-600">2,900,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Résultat Net</h3>
              <p className="text-2xl font-bold">1,250,000 FCFA</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Évolution de l'Actif</h2>
              <LineChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Répartition du Passif</h2>
              <BarChart />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Détail de l'Actif</h2>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Élément
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Immobilisations</td>
                    <td className="px-6 py-4 text-right">8,500,000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Stocks</td>
                    <td className="px-6 py-4 text-right">4,250,000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Créances</td>
                    <td className="px-6 py-4 text-right">3,000,000 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Détail du Passif</h2>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Élément
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Dettes Long Terme</td>
                    <td className="px-6 py-4 text-right">6,500,000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Dettes Court Terme</td>
                    <td className="px-6 py-4 text-right">4,350,000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Provisions</td>
                    <td className="px-6 py-4 text-right">2,000,000 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BilanPage;
