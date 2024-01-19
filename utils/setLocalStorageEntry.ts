import dispatchStorageEvent from "./dispatchStorageEvent.js";

const setLocalStorageEntry = (key: string, value: any) => {
  const stringifiedValue = JSON.stringify(value);
  window.localStorage.setItem(key, stringifiedValue);
  dispatchStorageEvent(key, stringifiedValue);
};

export default setLocalStorageEntry;
