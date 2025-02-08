'use client';

import React from 'react';
import DataTable from './DataTable';

interface Achat {
  id: string;
  date: string;
  fournisseur: string;
  description: string;
  montant: number;
  methodePaiement: string;
  statut: 'payé' | 'en attente' | 'annulé';
}

const AchatTable = () => {
  const achats: Achat[] = [
    {
      id: '1',
      date: '2024-01-20',
      fournisseur: 'Fournisseur ABC',
      description: 'Matériel informatique',
      montant: 250000,
      methodePaiement: 'Virement bancaire',
      statut: 'payé',
    },
    {
      id: '2',
      date: '2024-01-21',
      fournisseur: 'Fournisseur XYZ',
      description: 'Fournitures bureau',
      montant: 85000,
      methodePaiement: 'Espèces',
      statut: 'en attente',
    },
  ];

  const headers = [
    'Date',
    'Fournisseur',
    'Description',
    'Montant',
    'Paiement',
    'Statut',
    'Actions',
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Registre des Achats</h2>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Nouvel Achat</button>
        </div>
      </div>
      <DataTable
        headers={headers}
        data={achats.map((a) => ({
          ...a,
          montant: `${a.montant.toLocaleString()} FCFA`,
          actions: (
            <div className="flex space-x-2">
              <button className="text-blue-600 hover:text-blue-800">Modifier</button>
              <button className="text-green-600 hover:text-green-800">Payer</button>
              <button className="text-red-600 hover:text-red-800">Annuler</button>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default AchatTable;
