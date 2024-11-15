// TypingAnimation.js
import React, { useState, useEffect } from "react";

const words = [
  "Full Stack Developer",
  "Responsive Web Developer",
  "Front-end Developer",
];

const TypingAnimation = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (letterIndex < words[index].length) {
        setDisplayText((prev) => prev + words[index][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayText("");
          setLetterIndex(0);
          setIndex((prev) => (prev + 1) % words.length);
        }, 1000); // Delay before switching to the next word
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [index, letterIndex]);

  return <h2>{displayText}</h2>;
};

export default TypingAnimation;