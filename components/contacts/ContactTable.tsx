'use client';

import React from 'react';

// Interface pour les props du composant
interface ContactTableProps {
  type?: 'client' | 'fournisseur' | 'all';
  limit?: number;
}

export default function ContactTable({ type = 'all', limit }: ContactTableProps) {
  // Données de démonstration
  const contacts = [
    { id: 1, name: 'Entreprise A', type: 'client', total: 1500000 },
    { id: 2, name: 'Entreprise B', type: 'fournisseur', total: 750000 },
    { id: 3, name: 'Entreprise C', type: 'client', total: 2250000 },
    { id: 4, name: 'Entreprise D', type: 'fournisseur', total: 500000 },
    { id: 5, name: 'Entreprise E', type: 'client', total: 1000000 },
    { id: 6, name: 'Entreprise F', type: 'fournisseur', total: 650000 },
  ];

  // Filtrer les contacts selon le type
  const filteredContacts = contacts
    .filter((contact) => type === 'all' || contact.type === type)
    .slice(0, limit || contacts.length);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3">
              Nom
            </th>
            <th scope="col" className="px-4 py-3">
              Type
            </th>
            <th scope="col" className="px-4 py-3">
              Total Transactions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.id} className="bg-white border-b hover:bg-gray-50">
              <td className="px-4 py-3">{contact.name}</td>
              <td className="px-4 py-3 capitalize">{contact.type}</td>
              <td className="px-4 py-3">{contact.total.toLocaleString()} FCFA</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
