import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ServicesModal from './ServicesModal';
import heart from '../pics/heart.png';
import styled from 'styled-components';

const StyledHeart = styled.img`
  width: 3vw;
  transform: rotate(315deg);
`;

function DrawerAppBar() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const navItems = [
    {
      name: 'Home',
    },
    {
      name: 'Services',
      onClick: handleOpenModal,
    },
    {
      name: 'Book Now',
      onClick: () => console.log('add this later'),
      style: {
        backgroundColor: 'var(--bb)',
        border: '2px solid white',
        opacity: .9,
      },
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "transparent",
          marginTop: '.5vw',
        }}
        elevation={0}
        position='absolute'
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <StyledHeart src={heart} alt='heart' />
          <Box>
            {navItems.map(({ name, onClick, style }) => (
              <Button
                key={name}
                onClick={onClick}
                sx={{
                  color: '#fff',
                  fontSize: '1.5vw',
                  marginLeft: '1vw',
                  ...style,
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      { isModalOpen && (
        <ServicesModal
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      )}
    </Box>
  );
}

export default DrawerAppBar;
