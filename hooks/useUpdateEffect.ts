import { useEffect } from '@wordpress/element';
import useFirstMount from './useFirstMount.js';

const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const isFirstMount = useFirstMount();
  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;