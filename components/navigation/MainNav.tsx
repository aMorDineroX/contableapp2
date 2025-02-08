'use client';

import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useNotifications } from '@/providers/NotificationProvider';

export function MainNav() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const { showNotification } = useNotifications();

  const handleLogout = async () => {
    try {
      await logout();
      showNotification('success', 'Déconnexion réussie');
    } catch (error) {
      showNotification('error', 'Erreur lors de la déconnexion');
    }
  };

  // ...existing code...
}
