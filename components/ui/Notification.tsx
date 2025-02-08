'use client';

import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

export interface NotificationProps {
  title: string;
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose?: () => void;
}

export function Notification({ title, message, type = 'info', onClose }: NotificationProps) {
  const [show, setShow] = useState(true);

  const icons = {
    success: CheckCircleIcon,
    error: XCircleIcon,
    info: CheckCircleIcon
  };

  const colors = {
    success: 'bg-green-50 text-green-800',
    error: 'bg-red-50 text-red-800',
    info: 'bg-blue-50 text-blue-800'
  };

  const Icon = icons[type];

  return (
    <Transition
      show={show}
      as={Fragment}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className={`rounded-md p-4 ${colors[type]}`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium">{title}</h3>
            <div className="mt-2 text-sm">{message}</div>
          </div>
          <div className="ml-auto pl-3">
            <button
              type="button"
              className="inline-flex rounded-md p-1.5 hover:bg-white hover:bg-opacity-20"
              onClick={() => {
                setShow(false);
                onClose?.();
              }}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}
