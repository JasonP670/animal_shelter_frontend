import { Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';

export default function MuiPicker({ selectedDate, handleDateChange }) {
  // const [selectedDate, setSelectedDate] = useState(null);
  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker label='Intake Date' renderInput={(params) => <TextField {...params} />} value={selectedDate} onChange={(newValue) => handleDateChange(newValue)} />
    </Stack>
  );
}