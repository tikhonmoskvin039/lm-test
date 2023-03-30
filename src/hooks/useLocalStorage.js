import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue !== null ? JSON.parse(savedValue) : defaultValue;
    } catch (error) {
      console.log(`Error parsing stored JSON for key '${key}':`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(`Error storing JSON for key '${key}':`, error);
    }
  }, [key, value]);

  return [value, setValue];
};
