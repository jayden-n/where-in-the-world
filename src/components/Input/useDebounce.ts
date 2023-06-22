import { useRef } from 'react';

type DebouncedFunction = (...args: any[]) => void;

export default function useDebounce(search: DebouncedFunction, delay: number) {
  const timeout = useRef<number | null>(null);

  function debounced(...params: any[]) {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => {
      search(...params);
    }, delay);
  }

  return debounced;
}
