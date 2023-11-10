import styled from 'styled-components';
import { Data } from '../data/data';
import SpeechBubble from './speechbubble';
import { useState } from 'react';

interface StyledImage {
  $imageUrl: string;
}

const StyledContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 10rem;
  height: 10rem;
`;

const StyledImage = styled.div<StyledImage>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  bottom: -2rem;
  background: url(${(p) => p.$imageUrl}) no-repeat center;
  background-position: center;
  background-size: contain;
`;

const Clippord = () => {
  const [ textIdx, setTextIdx ] = useState(0);

  const pickRandomText = () => {
    setTextIdx(Math.floor(Math.random() * Data.zebra.phrases.length))
  }
  const text = Data.zebra.phrases[textIdx];

  return (
    <StyledContainer>
      <StyledImage $imageUrl={Data.zebra.talking} onClick={() => pickRandomText()}/>
      <SpeechBubble text={text}/>
    </StyledContainer>
  );
};

export default Clippord;
