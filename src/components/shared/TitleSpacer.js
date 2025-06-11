import styled from "styled-components";

const H2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 2vw 0;
  z-index: 1;
`;

const StyledH2 = styled.h2`
  padding: 2vw .5vw;
  line-height: 4vw;
`;

const Spacer = styled.div`
  width: 50%;
`;

const TitleSpacer = ({ info }) => {
  return (
    <H2Wrapper>
      <StyledH2>{info}</StyledH2>
      <Spacer></Spacer>
    </H2Wrapper>
  )
};

export default TitleSpacer;