import styled from "styled-components";
import { screenPixelWidths } from "../../data/data";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5vw 0;
  z-index: 1;
  width: 97%;

  @media (min-width: ${screenPixelWidths.tabletL}) {
    margin: 3vw 0;
  }
`;

const Spacer = styled.div`
  width: 50%;
`;

const TitleSpacer = ({ info }) => {
  return (
    <Wrapper>
      <h2>{info}</h2>
      <Spacer></Spacer>
    </Wrapper>
  )
};

export default TitleSpacer;