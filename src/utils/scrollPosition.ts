import { useEffect, useState } from "react";

const useScrollPosition = (positionToCheck: number): boolean => {
  const [isScrollBelowPosition, setIsScrollBelowPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      setIsScrollBelowPosition(scrollY > positionToCheck);
    };

    window.addEventListener("scroll", handleScroll);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [positionToCheck]);

  return isScrollBelowPosition;
};

export default useScrollPosition;
