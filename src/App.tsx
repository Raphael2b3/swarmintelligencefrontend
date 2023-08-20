import { createContext, useState } from "react";
import styled from 'styled-components'
import Searchbar from "./components/searchbar";
import Statement from "./components/statement";

const Frame = styled.div`
  height: inherit;
  width: inherit;

  display: flex;
  flex-direction: column;

  jusitfy-content: center;
  align-items: center;
`

const PhoneFrame = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 10px;
`

const StatementFrame = styled.div`
  flex: 1 1 auto;

`



function App() {
  return (
    <Frame>
      <PhoneFrame>
        
        <Searchbar/>
        <StatementFrame>
          <Statement/>
        </StatementFrame>
      </PhoneFrame>
    </Frame>
  );
}

export default App;
