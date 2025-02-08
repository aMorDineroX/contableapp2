import { useState, useCallback } from 'react';

interface ErrorState {
  hasError: boolean;
  message: string;
  code?: string;
}

const useErrorHandler = () => {
  const [error, setError] = useState<ErrorState>({
    hasError: false,
    message: '',
    code: undefined,
  });

  const handleError = useCallback((error: unknown) => {
    if (error instanceof Error) {
      setError({
        hasError: true,
        message: error.message,
        code: 'ERROR',
      });
    } else if (typeof error === 'string') {
      setError({
        hasError: true,
        message: error,
        code: 'ERROR',
      });
    } else {
      setError({
        hasError: true,
        message: 'Une erreur inattendue est survenue',
        code: 'UNKNOWN_ERROR',
      });
    }
  }, []);

  const clearError = useCallback(() => {
    setError({
      hasError: false,
      message: '',
      code: undefined,
    });
  }, []);

  return {
    error,
    handleError,
    clearError,
  };
};

export default useErrorHandler;
