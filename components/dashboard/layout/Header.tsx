'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth'; // Correction du chemin d'importation

export default function Header() {
  const { user, logout } = useAuth(); // Add this line

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-blue-600 text-white">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-4">
        <div className="flex gap-6 md:gap-10">
          <button className="md:hidden">
            <Bars3Icon className="h-6 w-6 text-white" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
          <Link href="/dashboard" className="text-xl font-bold text-white hover:text-blue-100 transition-colors">
            SYSCOHADA
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="rounded-full p-2 hover:bg-blue-700 transition-colors">
            <BellIcon className="h-5 w-5 text-white" />
          </button>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-2 hover:bg-blue-700 rounded-full p-2 transition-colors">
              <UserCircleIcon className="h-6 w-6 text-white" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/dashboard/settings"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } flex px-4 py-2 text-sm text-gray-700 items-center`}
                    >
                      <Cog6ToothIcon className="h-4 w-4 mr-2" />
                      Paramètres
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        document.cookie = 'auth-session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
                        window.location.href = '/auth/login';
                      }}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } flex px-4 py-2 text-sm text-gray-700 w-full items-center`}
                    >
                      <ArrowRightOnRectangleIcon className="h-4 w-4 mr-2" />
                      Déconnexion
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="flex items-center space-x-2">
            {user?.picture && (
              <img src={user.picture} alt={user.name || ''} className="w-8 h-8 rounded-full" />
            )}
            <span className="text-sm font-medium">{user?.name}</span>
          </div>
          <button
            onClick={() => logout()}
            className="px-3 py-2 text-sm rounded-md hover:bg-blue-700 transition-colors"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </header>
  );
}
