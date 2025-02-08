type ErrorResponse = {
  message: string;
  code?: string;
  status?: number;
};

export const handleError = (error: unknown): ErrorResponse => {
  if (error instanceof Response) {
    return {
      message: 'Erreur serveur',
      status: error.status,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: 'ERROR',
    };
  }

  return {
    message: 'Une erreur inconnue est survenue',
    code: 'UNKNOWN',
  };
};
