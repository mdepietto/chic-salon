import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Calendar from './Calendar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { ArrowUpward, Face2, CalendarMonth, Menu as MenuIcon } from '@mui/icons-material';
import Modal from './shared/Modal';
import Services from './Services';
import heart from '../pics/heart.png';
import styled from 'styled-components';
import { screenPixelWidths, screenWidths } from '../data/data';

const StyledHeart = styled.img`
  width: 7vw;
  transform: rotate(315deg);

  @media (min-width: ${screenPixelWidths.tabletL}) {
    padding-left: 1vw;
  }

  @media (min-width: ${screenPixelWidths.tabletL}) {
    padding-left: 1.5vw;
    width: 5vw;
  }
`;

const DropDownMenu = ({ navItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  
  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuButtonStyles = {
    position: 'fixed',
    top: '2vw',
    right: '2vw',
    zIndex: '3',
  }

  return (
    <div>
      <IconButton
        aria-label='menu'
        sx={menuButtonStyles}
        onClick={handleClick}
      >
        <MenuIcon sx={{ fontSize: '12vw' }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              backgroundColor: 'var(--theme-coral)',
              padding: '1vw',
            },
          },
        }}
      >
        {navItems.map(({ icon, name, onClick }) => (
          <MenuItem
            key={name}
            onClick={() => {
              onClick()
              handleClose()
            }}
          >
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <Typography
              variant='inherit'
              sx={{
                marginLeft: '3vw',
                fontSize: '8vw',
              }}
            >
              {name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

const NavBarSwitcher = ({ isHalfway, navItems }) => (
  <Box sx={{ display: 'flex' }}>
    <AppBar
      component="nav"
      sx={{
        bgcolor: "transparent",
        marginTop: '2vw',
        marginRight: '1vw',
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
                    marginBottom: '2vw',
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
                  fontSize: '2.2vw',
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
  const [isFullNavBarShown, setIsFullNavBarShown] = useState(false);
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    window.screen.width >= screenWidths.tablet ? setIsFullNavBarShown(true) : setIsFullNavBarShown(false);
  }, []);

  const handleOpenServicesModal = () => setIsServicesModalOpen(true);
  const handleCloseServicesModal = () => setIsServicesModalOpen(false);

  // right now, just opening, no option to close
  const handleOpenCalendar = () => setIsCalendarOpen(true);
  const handleCloseCalendar = () => setIsCalendarOpen(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const iconStyles = {
    height: '8vw',
    width: '8vw',

    [`@media (min-width: ${screenPixelWidths.tabletL})`]: {
      height: '6vw',
      width: '6vw',
    },
    [`@media (min-width: ${screenPixelWidths.laptop})`]: {
      height: '5vw',
      width: '5vw',
    },
  };
  
  const scrollUpButtonStyles = {
    position: 'fixed',
    bottom: '2vw',
    right: '1vw',
    zIndex: '3',
  }

  const navItems = [
    {
      icon: <Face2 sx={iconStyles} />,
      name: 'Services',
      onClick: handleOpenServicesModal,
      // for just words navBar
      style: {
        [`@media (min-width: ${screenPixelWidths.tabletL})`]: {
          fontSize: '2vw',
        },
        [`@media (min-width: ${screenPixelWidths.laptop})`]: {
          fontSize: '1.6vw',
        },
      }
    },
    {
      icon: <CalendarMonth sx={iconStyles} />,
      name: 'Book Now',
      onClick: handleOpenCalendar,
      style: {
        backgroundColor: 'var(--theme-gold)',
        border: '2px solid white',
        // for just words navBar
        [`@media (min-width: ${screenPixelWidths.tabletL})`]: {
          fontSize: '2vw',
        },
        [`@media (min-width: ${screenPixelWidths.laptop})`]: {
          fontSize: '1.6vw',
        },
      },
    }
  ];

  return (
    <div>
      { isFullNavBarShown ? (
        <NavBarSwitcher isHalfway={isHalfway} navItems={navItems} />
      ) : (
        <DropDownMenu navItems={navItems} />
      )}

      <Modal
        isModalOpen={isServicesModalOpen}
        handleCloseModal={handleCloseServicesModal}
        Component={Services}
      />

      <Modal
        isModalOpen={isCalendarOpen}
        handleCloseModal={handleCloseCalendar}
        Component={Calendar}
      />

      {isHalfway && (
        <IconButton
          aria-label='scrollToTop'
          sx={scrollUpButtonStyles}
          onClick={scrollToTop}
        >
          <ArrowUpward
            sx={{
              fontSize: '12vw',

              [`@media (min-width: ${screenPixelWidths.tabletL})`]: {
                fontSize: '10vw',
              },
              [`@media (min-width: ${screenPixelWidths.laptop})`]: {
                fontSize: '8vw',
              },
            }}
          />
        </IconButton>
      )}
    </div>
  );
}

export default NavBar;
