'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface AuthErrorProps {
  error?: string;
  reset?: () => void;
}

export default function AuthError({ error, reset }: AuthErrorProps) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="max-w-md w-full p-8 bg-card rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-destructive mb-4">Erreur d'authentification</h1>
        <p className="text-muted-foreground mb-6">
          {error || "Une erreur s'est produite lors de l'authentification"}
        </p>
        <div className="flex justify-end space-x-4">
          <button onClick={() => router.push('/auth/signin')} className="btn bg-primary">
            Retour à la connexion
          </button>
          {reset && (
            <button onClick={reset} className="btn bg-secondary">
              Réessayer
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
