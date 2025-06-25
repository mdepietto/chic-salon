import styled from 'styled-components';

const PaletteWrapper = styled.div`
  position: fixed;
  top: 30%;
  z-index: 2;
`;

const Box = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${({ color }) => color};
`;

const Palette = () => {
  return (
    <PaletteWrapper>
      <Box color='var(--theme-peach)' />
      <Box color='var(--theme-pink)' />
      <Box color='var(--theme-brick)' />
      <Box color='var(--theme-brown)' />
      <Box color='var(--theme-cream)' />
      <Box color='var(--theme-green)' />
      <Box color='var(--theme-red-sand)' />
      <Box color='var(--theme-gold)' />
      <Box color='var(--theme-coral)' />
    </PaletteWrapper>
  );
};

export default Palette;