'use client';

import React from 'react';
import DataTable from './DataTable';

interface Transaction {
  id: string;
  date: string;
  description: string;
  montant: number;
  type: 'crédit' | 'débit';
  statut: 'complété' | 'en attente' | 'annulé';
}

const TransactionTable = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      date: '2024-01-20',
      description: 'Vente de marchandises',
      montant: 150000,
      type: 'crédit',
      statut: 'complété',
    },
    {
      id: '2',
      date: '2024-01-21',
      description: 'Achat fournitures',
      montant: 75000,
      type: 'débit',
      statut: 'complété',
    },
  ];

  const headers = ['Date', 'Description', 'Montant', 'Type', 'Statut', 'Actions'];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Transactions Récentes</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Nouvelle Transaction
          </button>
        </div>
      </div>
      <DataTable
        headers={headers}
        data={transactions.map((t) => ({
          ...t,
          montant: `${t.montant.toLocaleString()} FCFA`,
          actions: (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800">Éditer</button>
              <button className="text-red-600 hover:text-red-800">Supprimer</button>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default TransactionTable;
