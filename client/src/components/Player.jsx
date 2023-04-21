import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SocketContext } from "../Context";
import CopyToClipboard from "react-copy-to-clipboard";

const Video = styled.video`
  width: 100%;
`;

const VideoPlayer = ({ children }) => {
  const {
    me,
    name,
    callAccepted,
    setName,
    leaveCall,
    callUser,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <VideoWrapper>
      {stream && (
        <section className="i_called">
          <div className="callers_frame">
            <h5>{name || "Name"}</h5>
            <Video playsInline muted ref={myVideo} autoPlay />
          </div>
          {/* Input Name */}
          <Container className="middle">
            <Paper className="paper">
              <Form noValidate autoComplete="off">
                <Grid className="grided">
                  <GridItem className="grid_items">
                    <Typography>Your Name</Typography>
                    <Input
                      type="text"
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <CopyToClipboard text={me}>
                      <Button color="black" type="button" onClick={() => {}}>
                        Copy Your ID
                      </Button>
                    </CopyToClipboard>
                  </GridItem>
                  <GridItem className="grid_items">
                    <Typography>Make a call</Typography>
                    <Input
                      type="text"
                      label="ID to call"
                      value={idToCall}
                      onChange={(e) => setIdToCall(e.target.value)}
                    />
                    {callAccepted && !callEnded ? (
                      <Button color="red" onClick={leaveCall}>
                        Hang Up
                      </Button>
                    ) : (
                      <Button
                        color="green"
                        type="button"
                        onClick={() => callUser(idToCall)}
                      >
                        Call
                      </Button>
                    )}
                  </GridItem>
                </Grid>
              </Form>
              {children}
            </Paper>
          </Container>
          {/* Ends */}
          <div className="drone_cam">
            <h3>How to use</h3>
            <p>
              Kindly read the guide on how to use
            </p>

            <ol>
              <li>Make sure you have a server running at localhost: 3005</li>
              <li>Input your name in the name field</li>
              <li>Copy your ID and give it to someone that you want to join you </li>
              <li>Start Enjoying !!!</li>
            </ol>
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

const Container = styled.div`
  width: 600px;
  margin: 35px 0;
  padding: 0;
  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Paper = styled.div`
  padding: 10px 20px;
  border: 2px solid black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const GridItem = styled.div`
  width: 100%;
  padding: 20px;
`;

const Typography = styled.div`
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const VideoWrapper = styled.div`
  .i_called,
  .u_called {
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    h5 {
      position: absolute;
    
      top: 20px;
      left: 20px;
      color: white;
      background-color: gray;
      font-size: 16px;
      padding: 0 10px;
      border-radius: 5px;
    }
  }
  .u_called {
    video {
      max-width: 400px;
      border-radius: 5px;
    }
  }
  .paper {
    padding: 0;
    border: 0;
  }
  .callers_frame {
    position: relative;
    video {
      border-radius: 20px;
    }
    h5 {
      position: absolute;
      top: 20px;
      left: 20px;
      color: white;
      background-color: gray;
      font-size: 16px;
      padding: 0 10px;
      border-radius: 5px;
    }
  }
  .i_called,
  .u_called {
    @media (min-width: 1024px) {
      display: flex;
      background: #f2f2f2;
      justify-content: space-between;
      .paper {
        padding: 0;
        border: 0;
      }
      input {
        width: 85%;
      }
      .grided {
        display: block;
        padding: 10px !important;
        margin: 0;
        .grid_items {
          padding: 0px !important;
          margin: 0;
          margin-bottom: 20px;
          button {
            margin: 0;
          }
        }
      }
      .callers_frame {
        width: 48%;
      }
      .middle {
        width: 18%;
      }
      .drone_cam {
        width: 28%;
      }
    }
  }
  .drone_cam {
    margin-top: 30px;
    max-width: 300px;
    margin: 0 30px;
    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 30px 0;
    }
    ol {
      li {
        margin: 20px 0;
      }
    }
    p {
      font-size: 1rem;
      font-weight: bold;
      margin: 30px 0;
    }
  }
  h5 {
    text-align: center;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
  }
`;
