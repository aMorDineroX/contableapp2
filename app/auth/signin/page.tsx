'use client';

import { signIn } from 'next-auth/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLoadingStore } from '@/stores/loadingStore';

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const setGlobalLoading = useLoadingStore((state) => state.setLoading);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      setGlobalLoading(true);
      await signIn('auth0', {
        callbackUrl: 'https://contable-app.local:3001/',
        redirect: true,
      });
    } catch (error) {
      console.error('Erreur de connexion:', error);
    } finally {
      setIsLoading(false);
      setGlobalLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 p-8 bg-card rounded-xl shadow-lg"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">ContableApp</h2>
          <p className="mt-2 text-muted-foreground">Application de comptabilité africaine</p>
        </div>

        <button
          onClick={handleSignIn}
          disabled={isLoading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Connexion...' : 'Se connecter avec Auth0'}
        </button>
      </motion.div>
    </div>
  );
}
