import './event-form.css'; 
import React from 'react';
import { Box, Stack, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const fields = [
  { label: 'Должность', valueKey: 'jobTitle' },
  { label: 'Отдел', valueKey: 'department' },
  { label: 'Компания', valueKey: 'company' },
];

export default function EventForm({selectedItem, setSelectedItem}) {
  // const [setFormData] = useState({
  //   jobTitle: '',
  //   department: '',
  //   company: '',
  // });
  // const [isChanged, setIsChanged] = useState(false); 

  const handleChange = (event, key) => {
    const updatedItem = { ...selectedItem, [key]: event.target.value }
    setSelectedItem(updatedItem) 
    handleUpdate(updatedItem)
  };

  const handleUpdate = async (updatedItem) => {
    if (!updatedItem?.id) return;

    try {
      const response = await fetch(`http://localhost:3002/users/${updatedItem.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [Object.keys(updatedItem).pop()]: Object.values(updatedItem).pop() }),
      });

      if (!response.ok) {
      throw new Error('Не удается обновить данные');
      }
      } catch (error) {
        console.error('Ошибка:', error);
      }
      };

  // const handleCancel = () => {
  //   setFormData('')
  //   setIsChanged(false);
  // };

  return (
    <Box>
      <div className="selectedArea">
        <Box component="section" className="selectedItem">
          {selectedItem ? `${selectedItem.first_name} ${selectedItem.last_name}` : 'Выберите элемент из списка'}
        </Box>
      </div>

      <Box className="infoBlock">
        <Avatar src="/broken-image.jpg" className="avatarStyle"/>
        <Stack spacing={2}>
          {fields.map(({ label, valueKey }) => (
            <div className="event-item" key={valueKey}>
              <p className="event">{label}</p>
              <TextField
                value={selectedItem?.[valueKey] || ''}
                onChange={(e) => handleChange(e, valueKey)}
                placeholder="Не указано"
                fullWidth
              />
            </div>
          ))}
          {/* {isChanged && (
                <div>
                  <Button
                    type="secondary"
                    size="large"
                    onClick={handleCancel}
                    htmlType="reset"
                  >
                    Отмена
                  </Button>
                  <Button type="primary" size="large" htmlType="submit">Сохранить</Button>
                </div>
              )} */}
        </Stack>
      </Box>
    </Box>
  );
}
