import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';
import styled from 'styled-components';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <TrackPple>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </TrackPple>
  );
};

export default Notifications;

let TrackPple = styled.div`
  max-width: 400px;
  position: absolute;
  padding: 20px;
  top: 40px;
  background: gray;
  border-radius: 10px;
  color: white;
  right: 10px;

`
