import { useState } from "@wordpress/element";

const useValueWithDefault = (initialValue: any, defaultValue: any) => {
  const [state, setState] = useState(initialValue);

  if (typeof state === "undefined" || state === null) {
    return [defaultValue, setState];
  }

  return [state, setState];
}

export default useValueWithDefault;
