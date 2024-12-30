import { useEffect, useState } from "react";

export function useLocalStorage(key, iniValue) {
  const [value, setValue] = useState(() => {
    const valueLocalStorage = localStorage?.getItem(key);
    return valueLocalStorage !== null
      ? JSON.parse(valueLocalStorage)
      : iniValue;
  });
  useEffect(() => {
    localStorage?.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}
