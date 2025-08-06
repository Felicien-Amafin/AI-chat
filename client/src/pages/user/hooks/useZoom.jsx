import { useState, useEffect } from 'react';

const useZoom = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyZoomed = window.devicePixelRatio > 1.20;
      setIsZoomed(isCurrentlyZoomed);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isZoomed;
};

export default useZoom;