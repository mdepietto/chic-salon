import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { SwipeDown } from '@mui/icons-material';

const UpButton = () => {
  const [ showUpButton, setShowUpButton ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowUpButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showUpButton && (
        <IconButton
          aria-label="SwipeDown"
          sx={{
            position: 'fixed',
            bottom: 10,
            right: 10,
            backgroundColor: 'var(--theme-orange)',
            zIndex: 9999,
          }}
          onClick={scrollToTop}
        >
          <SwipeDown sx={{ fontSize: 60 }} />
        </IconButton>
      )}
    </div>
  )
}

export default UpButton;