'use client';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import { useLoadingStore } from '@/stores/loadingStore';

export default function TransactionsPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Transactions</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p>Sélectionnez un type de transaction dans le menu</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
