import { useState, useEffect } from "react";

  const useSwipe = () => {

  // State to keep track of mouse position
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent the default behavior (text selection, etc.)
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent the default behavior (text selection, etc.)
    if (!isDragging) return;
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the multiplier as needed
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Cleanup event listeners when component unmounts
  useEffect(() => {
    const cleanup = () => {
      setIsDragging(false);
    };

    window.addEventListener("mouseup", cleanup);

    return () => {
      window.removeEventListener("mouseup", cleanup);
    };
  }, []);

  return {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp

  };

}

export default useSwipe