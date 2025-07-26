import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import Modal from './shared/Modal';

// continue styling with similarities between old calendar
const dateTimePickerStyles = {
  backgroundColor: 'var(--theme-pink)',
  borderRadius: '10px',
  width: '100%',

  // uppermost title
  '& .MuiPickersToolbar-title': {
    display: 'none',
  },

  // top month/day
  '& .MuiDateTimePickerToolbar-dateContainer': {
    '& span': {
      color: 'white',
    },
  },

  // tab underline
  '& .MuiTabs-indicator': {
    backgroundColor: 'transparent',
  },

  // bottom month/year header
  '& .MuiPickersCalendarHeader-label': {
    fontSize: '4.5vw',
    fontFamily: '"Arial", serif',
  },

  // weekday
  '& .MuiDayCalendar-weekDayLabel': {
    fontSize: '5vw',
  },

  // top section text and days of the week
  '& .MuiTypography-root': {
    color: 'white',
  },

  // number
  '& .MuiPickersDay-root': {
    color: 'white',
    fontSize: '3.7vw',
  },

  // selected day
  '& .Mui-selected': {
    backgroundColor: 'var(--theme-coral) !important',
  },

  // today circle
  '& .MuiPickersDay-today': {
    borderColor: 'var(--theme-brown)',
  },

  // cancel/next
  '& .MuiButton-text': {
    color: 'var(--theme-brown)',
  },

  // am/pm selected
  '& .MuiTypography-subtitle2[data-selected="true"]': {
    color: 'var(--theme-coral)'
  },

  // close button
  '& .MuiPickersLayout-actionBar button:nth-of-type(1)': {
    display: 'none',
  },
}

// TODO: move AcceptedModal to the NavBar level so that
// when you accept the date, the calendar closes,
// and opens the AcceptedModal

const Calendar = ({ onClose }) => {
  const [isAcceptedModalOpen, setIsAcceptedModalOpen] = useState(false);
  const handleCloseAcceptedModal = () => setIsAcceptedModalOpen(false);

  const [dateSelected, setDateSelected] = useState();

  const handleSubmit = (newDate) => {
    setDateSelected(newDate);

    setIsAcceptedModalOpen(true);

    onClose();
  }

  const AcceptedModal = () => {
    return (
      <div>scheduled for {JSON.stringify(dateSelected)}</div>
    )
  }
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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