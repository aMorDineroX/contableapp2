import { useState, useEffect } from 'react';

interface Account {
  id: string;
  name: string;
  balance: number;
  type: 'checking' | 'savings' | 'credit';
}

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addAccount = async (newAccount: Omit<Account, 'id'>) => {
    try {
      setLoading(true);
      // TODO: Implement API call to add account
      const account = { ...newAccount, id: Date.now().toString() };
      setAccounts((prev) => [...prev, account]);
      return account;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error adding account');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const deleteAccount = async (id: string) => {
    try {
      setLoading(true);
      // TODO: Implement API call to delete account
      setAccounts((prev) => prev.filter((account) => account.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error deleting account');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updateAccount = async (id: string, updates: Partial<Account>) => {
    try {
      setLoading(true);
      // TODO: Implement API call to update account
      setAccounts((prev) =>
        prev.map((account) => (account.id === id ? { ...account, ...updates } : account))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error updating account');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    accounts,
    loading,
    error,
    addAccount,
    deleteAccount,
    updateAccount,
  };
};
