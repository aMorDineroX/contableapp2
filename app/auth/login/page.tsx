'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { GoogleIcon, MicrosoftIcon, FacebookIcon, GitHubIcon } from '@/components/icons';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    router.push('/api/auth/login');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="sm:mx-auto sm:w-full sm:max-w-md px-4"
      >
        {/* Logo et titre */}
        <motion.div variants={itemVariants} className="text-center">
          <Link href="/" className="inline-block">
            <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl flex items-center justify-center mb-8 hover:shadow-2xl transition-shadow">
              <span className="text-4xl font-bold text-white">S</span>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight hover:text-blue-600 transition-colors">
              SYSCOHADA
            </h1>
          </Link>
          <p className="mt-3 text-lg text-gray-600">
            Système de Comptabilité Moderne
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 bg-white py-10 px-8 shadow-xl rounded-2xl sm:px-12 border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm 
                  focus:border-blue-500 focus:outline-none focus:ring-blue-500
                  text-gray-900 placeholder-gray-400 bg-white"
                placeholder="nom@exemple.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm 
                  focus:border-blue-500 focus:outline-none focus:ring-blue-500
                  text-gray-900 placeholder-gray-400 bg-white"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Se souvenir de moi
                </label>
              </div>

              <Link href="/auth/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                Mot de passe oublié?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg shadow-blue-500/30"
            >
              Se connecter
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Ou continuer avec</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => router.push('/api/auth/google')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <GoogleIcon className="h-5 w-5 mr-2" />
                Google
              </button>
              <button
                type="button"
                onClick={() => router.push('/api/auth/microsoft')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <MicrosoftIcon className="h-5 w-5 mr-2" />
                Microsoft
              </button>
              <button
                type="button"
                onClick={() => router.push('/api/auth/facebook')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FacebookIcon className="h-5 w-5 mr-2" />
                Facebook
              </button>
              <button
                type="button"
                onClick={() => router.push('/api/auth/github')}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <GitHubIcon className="h-5 w-5 mr-2" />
                GitHub
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Pas encore de compte?</span>
            <Link href="/auth/register" className="ml-1 font-medium text-blue-600 hover:text-blue-500">
              Créer un compte
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>© 2024 SYSCOHADA. Tous droits réservés.</p>
          <div className="mt-4 space-x-4">
            <Link href="/privacy" className="hover:text-gray-900">
              Confidentialité
            </Link>
            <Link href="/terms" className="hover:text-gray-900">
              Conditions
            </Link>
            <Link href="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
