import React, { useState } from "react";
import "./Fullscreen.style.css";

export default function Fullscreen() {
  const [fullscreen, setFullscreen] = useState(false);

  const toggleFullScreen = () => {
    let doc = window.document;
    let docEl = doc.getElementsByClassName("chat")[0];

    let requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    let cancelFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
      setFullscreen(true);
    } else {
      cancelFullScreen.call(doc);
      setFullscreen(false);
    }
  };

  return fullscreen ? (
    <div className="fullscreen-toggle fullscreen-toggle--fullscreen">
      <img
        className="fullscreen-toggle__img"
        src="./svg/fullscreen-exit-btn.svg"
        alt="Exit fullscreen button"
        onClick={toggleFullScreen}
      />
    </div>
  ) : (
    <div className="fullscreen-toggle">
      <img
        className="fullscreen-toggle__img"
        src="./svg/fullscreen-btn.svg"
        alt="Fullscreen button"
        onClick={toggleFullScreen}
      />
    </div>
  );
}


