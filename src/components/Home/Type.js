import React from "react";
import Typewriter from "typewriter-effect";

function Type({ translations }) {
  return (
    <Typewriter
      options={{
        strings: [
          translations.softwareDeveloper,
          translations.digitalDesigner,
          translations.freelancer,
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
