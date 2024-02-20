import React, { useState, useEffect } from "react";
import styles from "../../styles/Components_Style/ReadingMask.module.scss";

const ReadingMask = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className={styles.readingMask} style={{ top: position.y, left: position.x }}></div>;
};

export default ReadingMask;
