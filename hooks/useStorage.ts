import { useCallback, useState, useEffect } from "@wordpress/element";

export const useLocalStorage = (key: string, defaultValue: any) => {
  return useStorage(key, defaultValue, window.localStorage);
};

export const useSessionStorage = (key: string, defaultValue: any) => {
  return useStorage(key, defaultValue, window.sessionStorage);
};

const useStorage = (
  key: string,
  defaultValue: any,
  storageObject: { [key: string]: any }
) => {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
};

export default useStorage;
