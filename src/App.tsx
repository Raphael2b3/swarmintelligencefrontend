import { createContext, useState } from "react";
import styled from 'styled-components'
import Searchbar from "./components/searchbar";

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
  max-width: 400px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 10px;
`


function App() {
  return (
    <Frame>
      <PhoneFrame>
        Test
        <Searchbar/>
      </PhoneFrame>
    </Frame>
  );
}

export default App;
