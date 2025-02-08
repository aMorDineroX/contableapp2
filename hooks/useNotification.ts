import { useState, useCallback } from 'react';

interface NotificationOptions {
  title: string;
  message: string;
  type?: 'success' | 'error';
  duration?: number;
}

export function useNotification() {
  const [notification, setNotification] = useState<NotificationOptions & { show: boolean }>({
    show: false,
    title: '',
    message: '',
    type: 'success',
  });

  const showNotification = useCallback((options: NotificationOptions) => {
    setNotification({ ...options, show: true });
    if (options.duration !== 0) {
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, show: false }));
      }, options.duration || 3000);
    }
  }, []);

  const hideNotification = useCallback(() => {
    setNotification((prev) => ({ ...prev, show: false }));
  }, []);

  return {
    notification,
    showNotification,
    hideNotification,
  };
}
