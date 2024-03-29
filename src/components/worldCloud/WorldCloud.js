            
import React, { useEffect } from "react";
import "./WorldStyle.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const WorldCloud = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "React",
        "Typescript",
        "NextJS",
        "NodeJS",
        "ThreeJS",
        "Tailwindcss",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default WorldCloud;
          