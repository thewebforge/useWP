import dispatchStorageEvent from "./dispatchStorageEvent.js";

const deleteLocalStorageEntry = (key: string) => {
  window.localStorage.removeItem(key);
  dispatchStorageEvent(key, null);
};

export default deleteLocalStorageEntry;
