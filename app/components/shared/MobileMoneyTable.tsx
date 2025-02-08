'use client';

import React from 'react';
import DataTable from './DataTable';

interface MobileTransaction {
  id: string;
  date: string;
  operateur: 'Orange Money' | 'MTN Mobile Money' | 'Wave';
  numeroTransaction: string;
  expediteur: string;
  destinataire: string;
  montant: number;
  statut: 'réussi' | 'en cours' | 'échoué';
}

const MobileMoneyTable = () => {
  const transactions: MobileTransaction[] = [
    {
      id: '1',
      date: '2024-01-20',
      operateur: 'Orange Money',
      numeroTransaction: 'OM123456789',
      expediteur: '+225 0701234567',
      destinataire: '+225 0709876543',
      montant: 50000,
      statut: 'réussi',
    },
    {
      id: '2',
      date: '2024-01-21',
      operateur: 'MTN Mobile Money',
      numeroTransaction: 'MTN987654321',
      expediteur: '+225 0501234567',
      destinataire: '+225 0509876543',
      montant: 75000,
      statut: 'en cours',
    },
  ];

  const headers = [
    'Date',
    'Opérateur',
    'N° Transaction',
    'Expéditeur',
    'Destinataire',
    'Montant',
    'Statut',
    'Actions',
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Transactions Mobile Money</h2>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg">
            Nouvelle Transaction
          </button>
        </div>
      </div>
      <DataTable
        headers={headers}
        data={transactions.map((t) => ({
          ...t,
          montant: `${t.montant.toLocaleString()} FCFA`,
          statut: (
            <span
              className={`px-2 py-1 rounded-full text-sm ${
                t.statut === 'réussi'
                  ? 'bg-green-100 text-green-800'
                  : t.statut === 'en cours'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
              }`}
            >
              {t.statut}
            </span>
          ),
          actions: (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800">Détails</button>
              <button className="text-orange-600 hover:text-orange-800">Reçu</button>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default MobileMoneyTable;
