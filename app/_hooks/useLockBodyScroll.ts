import { useEffect } from 'react';

const useLockBodyScroll = (isLocked: boolean, shouldWork: boolean = true): void => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const mainLayout = document.getElementById('mainLayout');
    if (!shouldWork || !mainLayout) return;

    const preventScroll = (e: TouchEvent): void => {
      e.preventDefault();
    };

    let savedScrollY = 0;

    if (isLocked) {
      savedScrollY = window.scrollY;

      // Save current classes in case we need to restore exactly
      const hadHdvH = mainLayout.classList.contains('h-dvh');

      // Add overflow-hidden to prevent scrolling
      mainLayout.classList.add('overflow-hidden');
      // Remove h-dvh temporarily — it would cut off content below viewport
      mainLayout.classList.remove('h-dvh');

      // Fix the layout at current scroll position and make it full-screen
      mainLayout.style.position = 'fixed';
      mainLayout.style.top = `-${savedScrollY}px`;
      mainLayout.style.left = '0';
      mainLayout.style.right = '0';
      mainLayout.style.bottom = '0';        // This makes it cover full height
      mainLayout.style.width = '100%';

      // Critical for iOS
      mainLayout.addEventListener('touchmove', preventScroll, { passive: false });

      // Store data for cleanup
      (mainLayout as HTMLElement & { _savedScrollY?: number; _hadHdvH?: boolean })._savedScrollY = savedScrollY;
      (mainLayout as HTMLElement & { _savedScrollY?: number; _hadHdvH?: boolean })._hadHdvH = hadHdvH;
    } else {
      // Restore
      savedScrollY = (mainLayout as HTMLElement & { _savedScrollY?: number })._savedScrollY ?? 0;
      const hadHdvH = (mainLayout as HTMLElement & { _hadHdvH?: boolean })._hadHdvH ?? false;

      mainLayout.classList.remove('overflow-hidden');
      if (hadHdvH) {
        mainLayout.classList.add('h-dvh');
      }

      mainLayout.style.position = '';
      mainLayout.style.top = '';
      mainLayout.style.left = '';
      mainLayout.style.right = '';
      mainLayout.style.bottom = '';
      mainLayout.style.width = '';

      mainLayout.removeEventListener('touchmove', preventScroll);

      window.scrollTo(0, savedScrollY);

      // Cleanup
      delete (mainLayout as Partial<HTMLElement & { _savedScrollY?: number; _hadHdvH?: boolean }>)._savedScrollY;
      delete (mainLayout as Partial<HTMLElement & { _hadHdvH?: boolean }>)._hadHdvH;
    }

    return () => {
      if (!mainLayout || !isLocked) return;

      const storedScrollY = (mainLayout as HTMLElement & { _savedScrollY?: number })._savedScrollY ?? 0;
      const hadHdvH = (mainLayout as HTMLElement & { _hadHdvH?: boolean })._hadHdvH ?? false;

      mainLayout.classList.remove('overflow-hidden');
      if (hadHdvH) {
        mainLayout.classList.add('h-dvh');
      }

      mainLayout.style.position = '';
      mainLayout.style.top = '';
      mainLayout.style.left = '';
      mainLayout.style.right = '';
      mainLayout.style.bottom = '';
      mainLayout.style.width = '';

      mainLayout.removeEventListener('touchmove', preventScroll);

      window.scrollTo(0, storedScrollY);
    };
  }, [isLocked, shouldWork]);
};

export default useLockBodyScroll;