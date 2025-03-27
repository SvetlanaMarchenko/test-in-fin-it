import './event-form.css'; 
import React, { useState } from 'react';
import { Box, Stack, TextField } from '@mui/material';

export default function EventForm() {
  const [position, setPosition] = useState('');

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  return (
    <Box >
      <Stack spacing={2}>
      
        <div className="event-item">
          <p className="event">Должность</p>
            <TextField
              className="event-form"
              value={position} 
              onChange={handlePositionChange} 
              label="Не указано"
            />
        </div>

        <div className={`event-item`}>
          <p className="event">Отдел</p>
            <TextField
              className="event-form"
              value={position}
              onChange={handlePositionChange} 
              label="Не указано"
            />
        </div>
        <div className={`event-item`}>
          <p className="event">Компания</p>
            <TextField
              className="event-form"
              value={position} 
              onChange={handlePositionChange} 
              label="Не указано"
            />
        </div>
      </Stack>
    </Box>
  );
} 
