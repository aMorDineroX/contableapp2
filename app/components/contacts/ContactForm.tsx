'use client';

import React from 'react';

const ContactForm = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Nouveau Contact</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Type</label>
            <select className="w-full p-2 border rounded-lg">
              <option value="client">Client</option>
              <option value="fournisseur">Fournisseur</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nom</label>
            <input type="text" className="w-full p-2 border rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Téléphone</label>
            <input type="tel" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Adresse</label>
          <textarea className="w-full p-2 border rounded-lg" rows={3}></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Crédit Maximum</label>
            <input type="number" className="w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Délai de Paiement (jours)</label>
            <input type="number" className="w-full p-2 border rounded-lg" />
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button type="button" className="px-4 py-2 border rounded-lg">
            Annuler
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
