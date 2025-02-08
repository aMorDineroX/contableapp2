'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import SearchFilters from './SearchFilters';

const Header = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Nouvelle facture reçue', time: 'Il y a 5 min' },
    { id: 2, message: 'Rapport mensuel disponible', time: 'Il y a 1 heure' },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-3">
        <div className="flex-1 flex items-center space-x-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <SearchFilters />
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                  {notifications.map((notif) => (
                    <div key={notif.id} className="py-2 border-b last:border-0">
                      <p className="text-sm">{notif.message}</p>
                      <span className="text-xs text-gray-500">{notif.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <img
              src={`https://ui-avatars.com/api/?name=${user?.name}`}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">{user?.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
