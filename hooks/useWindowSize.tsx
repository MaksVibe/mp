import { useLayoutEffect, useState } from 'react';

const windowState = {
  width: 0,
  height: 0,
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(windowState);

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();
  }, []);

  return windowSize;
};

export default useWindowSize;
