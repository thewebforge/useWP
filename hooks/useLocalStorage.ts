import { useCallback, useEffect, useSyncExternalStore } from "@wordpress/element";
import setLocalStorageEntry from "../utils/setLocalStorageEntry.js";
import deleteLocalStorageEntry from "../utils/deleteLocalStorageEntry.js";
import getLocalStorageEntry from "../utils/getLocalStorageEntry.js";

const subscribe = (callback: EventListenerOrEventListenerObject) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const useLocalStorage = (key:string, initialValue: any) => {
  const getSnapshot = () => getLocalStorageEntry(key);
  const getServerSnapshot = () => {
    throw Error("useLocalStorage is client-only");
  };

  const store = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setState = useCallback(
    (value: any) => {
      try {
        if (!store) return;
        const newState = typeof value === "function" ? value(JSON.parse(store)) : value;

        if (newState === undefined || newState === null) {
          deleteLocalStorageEntry(key);
        } else {
          setLocalStorageEntry(key, newState);
        }
      } catch (error) {
        console.warn(error);
      }
    },
    [key, store]
  );

  useEffect(() => {
    if (
      getLocalStorageEntry(key) === null &&
      typeof initialValue !== "undefined"
    ) {
      setLocalStorageEntry(key, initialValue);
    }
  }, [key, initialValue]);

  return [store ? JSON.parse(store) : initialValue, setState];
};

export default useLocalStorage;



