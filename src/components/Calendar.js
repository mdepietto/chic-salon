import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import Modal from './shared/Modal';
import styled from 'styled-components';
import { TextField } from '@mui/material';

// continue styling with similarities between old calendar
const dateTimePickerStyles = {
  backgroundColor: 'var(--theme-pink)',
  borderRadius: 'var(--border-radius)',
  width: '100%',
  minWidth: 'auto',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',

  // remove uppermost title
  '& .MuiPickersToolbar-title': {
    display: 'none',
  },

  // top year
  '& .MuiTypography-subtitle1': {
    fontSize: 'min(4vw, 20px)',
  },

  // top month/day
  '& .MuiTypography-h4': {
    color: 'white !important',
    fontSize: 'min(8vw, 36px)',
  },

  // time
  '& .MuiTypography-h3': {
    alignContent: 'center',
    color: 'white',
    fontSize: 'min(9vw, 36px)',
  },

  '& .MuiTypography-h3[data-selected="true"]': {
    color: 'white',
  },

  // am/pm
  '& .MuiTypography-subtitle2': {
    fontSize: 'min(4vw, 20px)',
  },

  // am/pm selected
  '& .MuiTypography-subtitle2[data-selected="true"]': {
    color: 'var(--theme-coral)'
  },

  // all icons
  '& .MuiSvgIcon-root:not(.upArrow)': {
    fontSize: 'min(7vw, 26px)',
  },

  // tab underline
  '& .MuiTabs-indicator': {
    display: 'none',
  },

  // bottom section
  '& .MuiDateCalendar-root': {
    width: 'auto',
    height: 'auto',
  },

  // bottom month/year header
  '& .MuiPickersCalendarHeader-label': {
    fontSize: 'min(5vw, 20px)',
    fontFamily: '"Arial", serif',
  },

  // calendar picker body
  '& .MuiDateCalendar-viewTransitionContainer': {
    padding: '2vw',
  },

  // weekday
  '& .MuiDayCalendar-weekDayLabel': {
    fontSize: 'min(5vw, 26px)',
  },

  // top section text and days of the week
  '& .MuiTypography-root': {
    color: 'white',
  },

  // number
  '& .MuiPickersDay-root': {
    color: 'white',
    fontSize: 'min(4vw, 20px)',
  },

  // selected day
  '& .Mui-selected': {
    backgroundColor: 'var(--theme-coral) !important',
  },

  // today circle
  '& .MuiPickersDay-today': {
    borderColor: 'var(--theme-brown)',
  },

  // cancel/next/ok
  '& .MuiDialogActions-root': {
    '& .MuiButton-text': {
      color: 'var(--theme-brown)',
      fontSize: 'min(4vw, 20px)',
    },
  },

  // remove close button
  '& .MuiPickersLayout-actionBar button:nth-of-type(1)': {
    display: 'none',
  },

  // time tab - time body
  '& .MuiMultiSectionDigitalClock-root': {
    width: 'stretch',
    minWidth: '280px',
  },

  // number/am pm
  '& .MuiMenuItem-root': {
    fontSize: 'min(4vw, 22px)',
  },
}

const StyledAcceptedModal = styled.div`
  text-align: center;
  > h3 {
    margin-top: 0;
  }
`;

const Calendar = ({ onClose }) => {
  const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useState(false);
  const handleCloseAcceptedModal = () => {
    setIsAcceptedModalOpen(false);

    onClose();
  };

  const [name, setName] = useState('');

  const [dateSelected, setDateSelected] = useState();

  const [scheduleError, setScheduleError] = useState(false);

  const handleSubmit = (newDate) => {
    setIsAcceptedModalOpen(true);

    if (!newDate) {
      return setScheduleError(true);
    }

    setDateSelected(newDate);
  }

  const AcceptedModal = () => {
    const dateString = dateSelected?.toDate().toLocaleString('en-US', {
      hourCycle: 'h12',
      dateStyle: 'long',
      timeStyle: 'short',
    })

    return (
      scheduleError ? (
        <h3>Please make sure to fill in name, date, and time</h3>
      ) : (
        <StyledAcceptedModal>
          <p style={{ color: 'var(--theme-peach)' }}>{name}, you're scheduled for:</p>
          <h3>{dateString}</h3>
        </StyledAcceptedModal>
      )
    )
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TextField
        id='name'
        label='Your Name'
        variant='standard'
        onChange={({ target: { value } }) => setName(value)}
        margin='normal'
        sx={{
          marginTop: '0',
          padding: '1vw',
          backgroundColor: 'var(--theme-pink)',
          borderRadius: 'var(--border-radius)',
          label: {
            color: 'white',
          },
          '& .MuiFormLabel-root': {
            color: 'white',
            left: '1vw',
            top: '1vw',
          },
          '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
            color: 'var(--theme-coral)',
            fontSize: '20px',
          },
          '& .MuiFormLabel-filled': {
            color: 'white',
          },
          input: {
            color: 'white',
          },
          '& .MuiInput-root::before': {
            borderBottom: '1px solid white',
          },
          '& .MuiInput-root::after': {
            borderBottom: '2px solid var(--theme-coral)',
          },
          '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error)::before': {
              borderBottom: '2px solid var(--theme-coral)'
          }
        }}
      />
      <StaticDateTimePicker
        sx={dateTimePickerStyles}
        onAccept={(newDate) => handleSubmit(newDate)}
      />

      <Modal
        isModalOpen={isAcceptedModalOpen}
        handleCloseModal={handleCloseAcceptedModal}
        Component={AcceptedModal}
      />
    </LocalizationProvider>
  );
};

export default Calendar;