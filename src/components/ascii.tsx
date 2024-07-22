import React, { useState, useEffect } from "react";

const AsciiAnimation = () => {
  const frames = [
    "(•_•)",
    "( •_•)>⌐■-■",
    "(⌐■_■)",
    "(⌐■_■)",
    "(⌐■_■)",
    "(⌐■_■)",
    "( •_•)>⌐■-■",
    "(•_•)",
    "(•_•)",
    "(•_•)",
  ];

  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 500); // Change frame every 500ms

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [frames.length]);

  return (
    <pre style={{ fontSize: "16px", lineHeight: "1em" }}>
      {frames[currentFrame]}
    </pre>
  );
};

export default AsciiAnimation;
