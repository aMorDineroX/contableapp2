'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import ContactTable from '@/components/contacts/ContactTable';
import Modal from '@/components/shared/Modal';
import ContactForm from '@/components/contacts/ContactForm';
import { BarChart } from '@/components/charts/StatisticsChart';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Gestion des Contacts</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Nouveau Contact
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Total Clients</h3>
              <p className="text-2xl font-bold text-blue-600">156</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Total Fournisseurs</h3>
              <p className="text-2xl font-bold text-green-600">43</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Créances Clients</h3>
              <p className="text-2xl font-bold text-red-600">2,850,000 FCFA</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-gray-500">Dettes Fournisseurs</h3>
              <p className="text-2xl font-bold">1,750,000 FCFA</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Répartition des Contacts</h2>
              <BarChart />
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Top Clients</h2>
              <ContactTable type="client" limit={5} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <ContactTable />
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ContactForm />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default ContactsPage;
