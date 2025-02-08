'use client';

import React from 'react';

const RelanceSystem = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Paramètres de Relance</h3>
        <button className="text-blue-600 hover:text-blue-700">Configurer</button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">Première Relance</p>
            <p className="text-sm text-gray-500">3 jours avant échéance</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg">
              Email
            </button>
            <button className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-lg">
              SMS
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">Deuxième Relance</p>
            <p className="text-sm text-gray-500">Jour de l'échéance</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-lg">
              Email
            </button>
            <button className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-lg">
              SMS
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium">Relance Finale</p>
            <p className="text-sm text-gray-500">7 jours après échéance</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-orange-100 text-orange-600 rounded-lg">
              Appel
            </button>
            <button className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-lg">
              Courrier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelanceSystem;
