import styled from 'styled-components';
import palmTrees from '../videos/palmTrees.mp4';
import sakura from '../videos/sakura2.mp4';
import logoWhite from '../pics/logo-white.png';
import ScrollInWrapperHOC from './shared/ScrollInWrapperHOC';

const HomePageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    transparent,
    rgba(0, 0, 0, .2)
  );
`;

const StyledVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  z-index: -1;
`;

const StyledImage = styled.img`
  width: 50vw;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  flex-direction: column;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <ScrollInWrapperHOC Component={InfoWrapper}>
        <StyledImage src={logoWhite} alt='logo' />
      </ScrollInWrapperHOC>
      <StyledVideo autoPlay muted loop id='palmTrees'>
        {/* <source src={palmTrees} type='video/mp4' /> */}
        <source src={sakura} type='video/mp4' />
      </StyledVideo>
    </HomePageWrapper>
  );
};

export default HomePage;