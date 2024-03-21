import { useRef } from '@wordpress/element';

export function useFirstMount(): boolean {
  const isFirstMount = useRef(true);
  if (isFirstMount.current) {
    isFirstMount.current = false;
    return true;
  }
  return isFirstMount.current;
}

export default useFirstMount;