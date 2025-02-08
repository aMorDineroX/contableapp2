'use client';

import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { LineChart, BarChart } from '@/components/charts/StatisticsChart';

const ResultatPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Compte de Résultat</h1>
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
              <h3 className="text-gray-500">Chiffre d'Affaires</h3>
              <p className="text-2xl font-bold text-blue-600">8,500,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Charges</h3>
              <p className="text-2xl font-bold text-red-600">6,250,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Marge Brute</h3>
              <p className="text-2xl font-bold text-green-600">2,250,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Résultat Net</h3>
              <p className="text-2xl font-bold">1,250,000 FCFA</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Évolution du Résultat</h2>
              <LineChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Répartition des Charges</h2>
              <BarChart />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Détail des Produits</h2>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Ventes de Marchandises</td>
                    <td className="px-6 py-4 text-right">6,500,000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Prestations de Services</td>
                    <td className="px-6 py-4 text-right">1,750,000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Autres Produits</td>
                    <td className="px-6 py-4 text-right">250,000 FCFA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Détail des Charges</h2>
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Catégorie
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                      Montant
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Achats</td>
                    <td className="px-6 py-4 text-right">4,250,000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Charges de Personnel</td>
                    <td className="px-6 py-4 text-right">1,500,000 FCFA</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Charges Externes</td>
                    <td className="px-6 py-4 text-right">500,000 FCFA</td>
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

export default ResultatPage;
