import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useButtonAnimationTimeout = () => {
  const [buttonAnimation, setButtonAnimation] = useState(false);

  useEffect(() => {
    if (buttonAnimation) {
      const timeAnimation = setTimeout(() => setButtonAnimation(false), 1000);
      return () => {
        clearTimeout(timeAnimation);
      };
    }
  }, [buttonAnimation]);

  return {
    buttonAnimation,
    setButtonAnimation,
  };
};
