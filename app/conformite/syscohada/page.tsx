'use client';

import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const SyscohadaPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">SYSCOHADA Révisé</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Plan Comptable OHADA</h2>
            {/* Liste des comptes SYSCOHADA */}
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">États Financiers Normalisés</h2>
            {/* Modèles d'états financiers */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SyscohadaPage;
