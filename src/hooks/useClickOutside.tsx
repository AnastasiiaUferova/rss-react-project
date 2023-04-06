import { useEffect, RefObject, useRef } from 'react';

const useClickOutside = (handler: () => void): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const maybeHandler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', maybeHandler);
    };
  }, [handler]);

  return ref;
};

export default useClickOutside;
