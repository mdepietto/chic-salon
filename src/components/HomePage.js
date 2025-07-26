import styled from 'styled-components';
import sakura from '../videos/sakura2.mp4';
import logoWhite from '../pics/logo-white.png';
import ScrollInWrapperHOC from './shared/ScrollInWrapperHOC';
import { screenPixelWidths } from '../data/data';

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
  width: 85vw;

  @media (min-width: ${screenPixelWidths.tablet}) {
    width: 70vw;
  }

  @media (min-width: ${screenPixelWidths.tabletL}) {
    width: 50vw;
  }

  @media (min-width: ${screenPixelWidths.laptop}) {
    width: 45vw;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  flex-direction: column;
`;

const HomePage = ({ ref }) => {

  return (
    <HomePageWrapper ref={ref}>
      <ScrollInWrapperHOC Component={InfoWrapper}>
        <StyledImage className='main-logo' src={logoWhite} alt='logo' />
      </ScrollInWrapperHOC>
      <StyledVideo autoPlay muted loop id='palmTrees'>
        <source src={sakura} type='video/mp4' />
      </StyledVideo>
    </HomePageWrapper>
  );
};

export default HomePage;