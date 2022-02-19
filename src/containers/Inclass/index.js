import { useCallback, useEffect, useRef, useState } from "react";
import { StreamCard } from "../../components/StreamCard";
import RTCInterface from "../../Interfaces/AgoraRTC";
import "./styles.scss";

export const Inclass = () => {
  const [remoteStreams, setRemoteStreams] = useState({});
  const RTCClient = useRef();
  const clientId = "MT-12345";
  const channelId = "121212";
  const appId = "dd1bdd5406a642fea84499861dcef2e3";

  const createClient = useCallback(async () => {
    try {
      RTCClient.current = new RTCInterface(
        appId,
        channelId,
        null,
        clientId,
        {}
      );
      RTCClient.current.initialise();
      setRemoteStreams({ ...remoteStreams });
    } catch (err) {
      console.error(err);
    }
  }, [remoteStreams]);

  useEffect(() => {
    // createClient();
  }, [createClient]);

  const playVideoStream = () => {
    return;
  };

  return (
    <div className="inclass">
      <div className="inclass__streamCard">
        {Object.entries(remoteStreams).map((key, value) => (
          <StreamCard playVideoStream={playVideoStream} userId={key} />
        ))}
      </div>
    </div>
  );
};
