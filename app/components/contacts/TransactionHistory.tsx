'use client';

import React from 'react';

const TransactionHistory = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Description
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
              Montant
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
              Solde
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {/* Données de démonstration */}
          <tr>
            <td className="px-6 py-4">2024-01-15</td>
            <td className="px-6 py-4">Vente</td>
            <td className="px-6 py-4">Facture N°2024-001</td>
            <td className="px-6 py-4 text-right text-green-600">+250,000 FCFA</td>
            <td className="px-6 py-4 text-right">450,000 FCFA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
