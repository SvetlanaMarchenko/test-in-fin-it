import './event-form.css'; 
import React, { useState } from 'react';
import { Box, Stack, TextField } from '@mui/material';

const fields = [
  { label: 'Должность', valueKey: 'position' },
  { label: 'Отдел', valueKey: 'department' },
  { label: 'Компания', valueKey: 'company' },
];

export default function EventForm() {
  const [formData, setFormData] = useState({
    position: '',
    department: '',
    company: '',
  });

  const handleChange = (event, key) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: event.target.value,
    }));
  };

  return (
    <Box>
      <Stack spacing={2}>
        {fields.map(({ label, valueKey }) => (
          <div className="event-item" key={valueKey}>
            <p className="event">{label}</p>
            <TextField
              className="event-form"
              value={formData[valueKey]}
              onChange={(e) => handleChange(e, valueKey)}
              placeholder="Не указано"
              fullWidth
            />
          </div>
        ))}
      </Stack>
    </Box>
  );
}
