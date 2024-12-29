import { useState, useEffect } from "react";

export function useDebounce<T>(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    console.log('value: ', value);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
