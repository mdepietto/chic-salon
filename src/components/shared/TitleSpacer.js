import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2vw 1vw;
  z-index: 1;
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