import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 300): T | undefined {
  const [debouncedValue, setDebouncedValue] = useState<T>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
