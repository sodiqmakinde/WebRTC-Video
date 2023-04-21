import React, { useContext } from "react";
import styled from "styled-components";

import { SocketContext } from "../Context";

const VideoWrapper = styled.div`
  .i_called {
    max-width: 700px;
    display: flex;
    .drone_cam {
    }
  }
  h5 {
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
  }
`;

const Video = styled.video`
  width: 100%;
`;

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <VideoWrapper>
      {stream && (
        <section>
          <div className="i_called">
            <h5>{name || "Name"}</h5>
            <Video playsInline muted ref={myVideo} autoPlay />
          </div>
          <div className="drone_cam">
            <h3>DroneCam</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              deserunt odit! Mollitia harum eaque numquam ex quibusdam, saepe
              laborum voluptate id inventore sint consequatur? Dicta error sit
              voluptatem magni culpa!
            </p>
          </div>
        </section>
      )}
      {callAccepted && !callEnded && (
        <section className="u_called">
          <h5>{call.name || "Name"}</h5>
          <Video playsInline ref={userVideo} autoPlay />
        </section>
      )}
    </VideoWrapper>
  );
};

export default VideoPlayer;
