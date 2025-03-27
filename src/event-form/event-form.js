import './event-form.css'; 
import React from 'react';
import { Box, Paper, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 

export default function EventForm() {
  const theme = useTheme();
  const themeClass = theme.palette.mode === 'dark' ? 'dark-theme' : 'light-theme';

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
      
        <div className={`event-item ${themeClass}`}>
          <p> Должность</p>
          <Paper className="event-form">
            Не указано
          </Paper>
        </div>

        
        <Paper className={`event-item ${themeClass}`}>
          Item 2
        </Paper>
        <Paper className={`event-item ${themeClass}`}>
          Item 3
        </Paper>
      </Stack>
    </Box>
  );
}
