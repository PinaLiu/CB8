import styles from "./no-auguri.module.scss";
import React from "react";
import YouTube from "react-youtube";

// npm install react-youtube!!!!!!!!
const NoAuguri = () => {
  // Opzioni video
  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Buon Non Compleanno!!!</h1>
      {/* video youTube */}
      <YouTube videoId="PVW0T0NzNBk" opts={opts} />
    </div>
  );
};

export default NoAuguri;
