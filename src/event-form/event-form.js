import './event-form.css'; 
import React, { useState } from 'react';
import { Box, Stack, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const fields = [
  { label: 'Должность', valueKey: 'position' },
  { label: 'Отдел', valueKey: 'department' },
  { label: 'Компания', valueKey: 'company' },
];

export default function EventForm({selectedItem}) {
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
      <div className="selectedArea">
        <Box component="section" className="selectedItem">
          {selectedItem ? ` ${selectedItem}` : 'Выберите элемент из списка'}
        </Box>
      </div>

      <Box className="infoBlock">
        <Avatar src="/broken-image.jpg" className="avatarStyle"/>
        <Stack spacing={2}>
          {fields.map(({ label, valueKey }) => (
            <div className="event-item" key={valueKey}>
              <p className="event">{label}</p>
              <TextField
                value={formData[valueKey]}
                onChange={(e) => handleChange(e, valueKey)}
                placeholder="Не указано"
                fullWidth
              />
            </div>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
