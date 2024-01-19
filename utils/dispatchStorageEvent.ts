const dispatchStorageEvent = (key: string, newValue: any) => {
  window.dispatchEvent(new StorageEvent("storage", { key, newValue }));
};

export default dispatchStorageEvent;
