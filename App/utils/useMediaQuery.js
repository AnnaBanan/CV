import { useEffect, useState } from "react";

export const useMediaQuery = (mediaQuery) => {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mqList = window.matchMedia(mediaQuery);
    const e = () => setMatch(mqList.matches);
    mqList.addEventListener("change", e);
    e();
    return () => mqList.removeEventListener("change", e);
  }, [mediaQuery]);

  return match;
};
