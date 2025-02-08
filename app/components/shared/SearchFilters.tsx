'use client';

import React, { useState } from 'react';

const SearchFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-white border rounded-lg hover:bg-gray-50"
      >
        <span>Filtres</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 p-4 bg-white rounded-lg shadow-lg border w-64">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" className="mt-1 w-full rounded-md border-gray-300" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Catégorie</label>
              <select className="mt-1 w-full rounded-md border-gray-300">
                <option>Toutes</option>
                <option>Ventes</option>
                <option>Achats</option>
                <option>Mobile Money</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Montant</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="mt-1 w-full rounded-md border-gray-300"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="mt-1 w-full rounded-md border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
