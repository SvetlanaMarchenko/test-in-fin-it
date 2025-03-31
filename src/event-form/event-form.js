import './event-form.css'; 
import React, { useEffect, useState } from 'react';
import { Box, Stack, TextField, Button, Snackbar, Alert } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const fields = [
  { label: 'Должность', valueKey: 'jobTitle' },
  { label: 'Отдел', valueKey: 'department' },
  { label: 'Компания', valueKey: 'company' },
];

export default function EventForm({ selectedItem, setSelectedItem, onUpdate }) {
  const [formData, setFormData] = useState({
    jobTitle: '',
    department: '',
    company: '',
  });
  const [isChanged, setIsChanged] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (selectedItem) {
      setFormData({
        jobTitle: selectedItem.jobTitle || '',
        department: selectedItem.department || '',
        company: selectedItem.company || '',
      });
      setIsChanged(false); 
    }
  }, [selectedItem]);

  const handleChange = (event, key) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: event.target.value,
    }));
    setIsChanged(true);
  };

  const handleUpdate = async () => {
    if (!selectedItem?.id) return;

    try {
      const response = await fetch(`http://localhost:3002/users/${selectedItem.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Не удается обновить данные');
      } 
      const updatedItem = { ...selectedItem, ...formData };
      setSelectedItem(updatedItem);
      setIsChanged(false);
      setOpenSnackbar(true);
      if (onUpdate) onUpdate(updatedItem);
      

    } catch (error) {
      console.error('Ошибка при обновлении:', error);
    }
  };

  const handleCancel = () => {
    if (selectedItem) {
      setFormData({
        jobTitle: selectedItem.jobTitle || '',
        department: selectedItem.department || '',
        company: selectedItem.company || '',
      });
    }
    setIsChanged(false);
  };

  return (
    <Box>
      <div className="selectedArea">
        <Box component="section" className="selectedItem">
          {selectedItem ? `${selectedItem.first_name} ${selectedItem.last_name}` : 'Выберите элемент из списка'}
        </Box>
      </div>

      <Box className="infoBlock">
        <Avatar src="/broken-image.jpg" className="avatarStyle" />
        <Stack spacing={2}>
          {fields.map(({ label, valueKey }) => (
            <div className="event-item" key={valueKey}>
              <p className="event">{label}</p>
              <TextField
                value={formData[valueKey] || ''}
                onChange={(e) => handleChange(e, valueKey)}
                placeholder="Не указано"
                fullWidth
              />
            </div>
          ))}
            <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
              <Button variant="outlined" onClick={handleCancel} color="default"  disabled={!isChanged}>
                Отмена
              </Button>
              <Button variant="outlined" color="primary" onClick={handleUpdate} disabled={!isChanged}>
                Сохранить
              </Button>
            </Stack>
          
        </Stack>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        className="snackbarAria"
      >
        <Alert onClose={() => setOpenSnackbar(false)}>
          Данные успешно обновлены!
        </Alert>
      </Snackbar>
    </Box>
  );
}
