'use client';

import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const DeclarationsPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Déclarations Fiscales</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Déclarations Périodiques</h2>
          {/* Formulaires de déclarations */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DeclarationsPage;
