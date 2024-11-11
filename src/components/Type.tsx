import React, { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

const Type: FC = () => {
  return (
    <Typewriter
      words={[
        "AI/ML Development",
        "Blockchain Development",
        "Fullstack Development",
      ]}
      loop={0}
      cursor
      cursorStyle=""
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default Type;
