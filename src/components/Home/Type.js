import React from "react";
import Typewriter from "typewriter-effect";

function Type({ translations }) {
  return (
    <Typewriter
      options={{
        strings: [
          translations.softwareDeveloper,
          translations.freelancer,
        ],
        autoStart: true,
        loop: true,
        delay: 70,
        deleteSpeed: 90,
      }}
    />
  );
}

export default Type;
