const getLocalStorageEntry = (key: string) => {
  return window.localStorage.getItem(key);
};

export default getLocalStorageEntry;
