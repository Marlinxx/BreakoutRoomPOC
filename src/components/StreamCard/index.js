import { useEffect, useRef } from "react";
import "./styles.scss";

export const StreamCard = ({ playVideoStream }) => {
  const streamRef = useRef(null);
  useEffect(() => {
    playVideoStream(streamRef.current);
  }, [playVideoStream]);
  return <div calssname="streamCard" ref={streamRef}></div>;
};
