import styled from 'styled-components';

const StyledContainer = styled.div`
  position: absolute;
  color: black;
  width: 15rem; // acts a max width
  top: 2rem;
  right: 100%;
  margin-right: -1rem;
  padding: 0.5rem;
  background-color: white;
  /* border: 0.25rem solid black; */
  border-radius: 1rem;
  height: auto;

  /* box-shadow: 0 0 .5rem .5rem blue; */
  filter: drop-shadow(0 0 .25rem black);
`;

const Text = styled.p`
  margin: 0;
`;

const StyledCarat = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  right: 0;
  top: 50%;
  transform: translate(25%, -50%) rotate(45deg);

  background-color: white;
  border-radius: .2rem;
  z-index:-1;
`

interface Props {
  text: string;
}
const SpeechBubble = ({ text }: Props) => {
  return (
    <StyledContainer>
      <StyledCarat />
      <Text>
        {text}
      </Text>
    </StyledContainer>
  );
};

export default SpeechBubble;
