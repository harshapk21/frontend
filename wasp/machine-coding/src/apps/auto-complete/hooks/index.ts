import { useRef } from "react";
export const useCache = () => {
  const cacheRef = useRef({});
  const getCache = (key) => {
    if (cacheRef.current[key]) return cacheRef.current[key];
    return null;
  };
  const setCache = (key, value) => {
    cacheRef.current[key] = value;
  };
  return {
    getCache,
    setCache,
  };
};
