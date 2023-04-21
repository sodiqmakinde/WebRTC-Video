import React from "react";
import styled from "styled-components";

import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";

const App = () => (
  <div className="">
    <Wrapper>
      <div className="bill_board">
        <div className="bills">
          <h2>TalentPlus WebRTC</h2>
        </div>
      </div>
      <Player />
      {/* <Sidebar /> */}

      <Notifications />
    </Wrapper>
  </div>
);

export default App;

const Wrapper = styled.div`
  width: 100%;
  .bill_board {
    border-bottom: 1px solid #ccc;
    .bills{
      max-width: 1300px;
      padding: 20px 0;
      margin: 0 auto;
    } h2 {
    }
  }
`;
