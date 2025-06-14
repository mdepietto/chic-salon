import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Home, Face2, CalendarMonth } from '@mui/icons-material';
import ServicesModal from './ServicesModal';
import heart from '../pics/heart.png';
import styled from 'styled-components';

const StyledHeart = styled.img`
  width: 3vw;
  transform: rotate(315deg);
`;

const HorizontalNavBar = ({ navItems }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "transparent",
          marginTop: '.5vw',
        }}
        elevation={0}
        position='fixed'
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
                ariaLabel={name}
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
    </Box>
  );
};

const VerticalNavBar = ({ navItems }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{
          bgcolor: "transparent",
          marginTop: '1vw',
        }}
        elevation={0}
        position='fixed'
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {navItems.map(({ icon, name, onClick, style }) => (
              <Tooltip
                arrow
                title={<p>{name}</p>}
                placement='left'
                sx={{ color: 'success.main' }}
              >
                <IconButton
                  ariaLabel={name}
                  key={name}
                  onClick={onClick}
                  sx={{
                    marginBottom: '1vw',
                    ...style
                  }}
                >
                  {icon}
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const NavBar = ({ isHalfway }) => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const iconStyles = {
    height: '4vw',
    width: '4vw',
  };

  const VerticalNavItems = [
    {
      icon: <Home sx={iconStyles} />,
      name: 'Home',
      onClick: scrollToTop,
    },
    {
      icon: <Face2 sx={iconStyles} />,
      name: 'Services',
      onClick: handleOpenModal,
    },
    {
      icon: <CalendarMonth sx={iconStyles} />,
      name: 'Book Now',
      onClick: () => console.log('add this later'),
      style: {
        backgroundColor: 'var(--bb)',
        border: '2px solid white',
      },
    }
  ];

  const HorizontalNavItems = [
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
      },
    },
  ];

  // make navbar fixed until bottom of homepage reaches halfway point of screen, then transition it
  // to a vertical navbar at the top right corner of the page with icons instead of words

  return (
    <div>
      { isHalfway ?
        <VerticalNavBar navItems={VerticalNavItems} /> :
        <HorizontalNavBar navItems={HorizontalNavItems} />
      }
      { isModalOpen && (
        <ServicesModal
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default NavBar;
