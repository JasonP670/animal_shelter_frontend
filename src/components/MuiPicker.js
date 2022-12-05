import { Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export default function MuiPicker({ selectedDate, handleChange }) {
  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker label='Intake Date' renderInput={(params) => <TextField {...params} />} value={selectedDate} onChange={handleChange} />
    </Stack>
  );
}
