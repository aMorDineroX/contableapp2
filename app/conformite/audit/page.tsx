'use client';

import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const AuditPage = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Audit et Contrôle</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Rapports d&apos;Audit</h2>
          {/* Outils d'audit et contrôle */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AuditPage;
