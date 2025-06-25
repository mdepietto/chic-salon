import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ArrowUpward, Face2, CalendarMonth } from '@mui/icons-material';
import ServicesModal from './ServicesModal';
import heart from '../pics/heart.png';
import styled from 'styled-components';

const StyledHeart = styled.img`
  width: 7vw;
  transform: rotate(315deg);
`;

const NavBarSwitcher = ({ isHalfway, navItems }) => (
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
          justifyContent: isHalfway ? 'end' : 'space-between',
        }}
      >
        {!isHalfway && <StyledHeart src={heart} alt='heart' />}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isHalfway ? 'column' : 'row',
          }}
        >
          {navItems.map(({ icon, name, onClick, style }) =>
            isHalfway ? (
              <Tooltip
                arrow
                key={name}
                title={<p>{name}</p>}
                placement='left'
                slotProps={{
                  tooltip: {
                    sx: {
                      bgcolor: 'transparent',
                      '& .MuiTooltip-arrow': {
                        color: 'transparent',
                      },
                    },
                  },
                }}
              >
                <IconButton
                  aria-label={name}
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
            ) : (
              <Button
                aria-label={name}
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
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

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
    height: '8vw',
    width: '8vw',
  };

  const navItems = [
    ...(isHalfway ? [{
      icon: <ArrowUpward sx={iconStyles} />,
      name: 'Top',
      onClick: scrollToTop,
    }] : []),
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
        backgroundColor: 'var(--theme-gold)',
        border: '2px solid white',
      },
    }
  ];

  return (
    <div>
      <NavBarSwitcher
        isHalfway={isHalfway}
        navItems={navItems}
      />

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
