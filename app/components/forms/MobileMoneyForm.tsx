'use client';

import React from 'react';

const MobileMoneyForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Nouvelle Transaction Mobile Money</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Opérateur</label>
            <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Orange Money</option>
              <option>MTN Mobile Money</option>
              <option>Wave</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Envoi</option>
              <option>Réception</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Numéro Expéditeur</label>
            <input
              type="tel"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="+225 07XXXXXXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Numéro Destinataire</label>
            <input
              type="tel"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="+225 07XXXXXXXX"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Montant</label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="0 FCFA"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button type="button" className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            Annuler
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default MobileMoneyForm;
