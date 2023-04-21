import React, { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";

import { SocketContext } from "../Context";
import styled from "styled-components";

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

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <Container>
      <Paper>
        <Form noValidate autoComplete="off">
          <Grid>
            <GridItem>
              <Typography>Account Info</Typography>
              <Input
                type="text"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={me}>
                <Button
                  color="blue"
                  type="button"
                  startIcon={<Assignment />}
                  onClick={() => {}}
                >
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </GridItem>
            <GridItem>
              <Typography>Make a call</Typography>
              <Input
                type="text"
                label="ID to call"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <Button
                  color="red"
                  startIcon={<PhoneDisabled />}
                  onClick={leaveCall}
                >
                  Hang Up
                </Button>
              ) : (
                <Button
                  color="green"
                  type="button"
                  startIcon={<Phone />}
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
  );
};

export default Sidebar;
