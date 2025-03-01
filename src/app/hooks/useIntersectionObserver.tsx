// hooks/useIntersectionObserver.ts
import { useEffect, useState, RefObject } from 'react';

export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {}
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Only update visibility if the section is intersecting (visible)
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isVisible;
};