'use client';

import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 min-h-screen text-white">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Contable App</h2>
      </div>
      <nav className="mt-6">
        <div className="px-4 py-2">
          <h3 className="text-xs uppercase text-gray-400">Transactions</h3>
          <Link href="/transactions/ventes" className="block py-2 hover:text-blue-400">
            Ventes
          </Link>
          <Link href="/transactions/achats" className="block py-2 hover:text-blue-400">
            Achats
          </Link>
          <Link href="/transactions/mobile-money" className="block py-2 hover:text-blue-400">
            Mobile Money
          </Link>
        </div>
        <div className="px-4 py-2">
          <h3 className="text-xs uppercase text-gray-400">Rapports</h3>
          <Link href="/rapports/bilan" className="block py-2 hover:text-blue-400">
            Bilan
          </Link>
          <Link href="/rapports/resultat" className="block py-2 hover:text-blue-400">
            Résultat
          </Link>
          <Link href="/rapports/tresorerie" className="block py-2 hover:text-blue-400">
            Trésorerie
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
