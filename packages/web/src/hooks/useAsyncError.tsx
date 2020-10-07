import { useState, useCallback } from 'react';

const useAsyncError = (): ((error: unknown) => void) => {
  const [, setError] = useState();

  return useCallback(
    (error) => {
      setError(() => {
        throw error;
      });
    },
    [setError],
  );
};

export { useAsyncError };
