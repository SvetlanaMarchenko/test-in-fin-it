import './data-list.css';
import React, { useState, useEffect } from 'react';  
import { List, ListItem, ListItemText } from '@mui/material';

function DataList({ onItemClick, refreshTrigger }) {
  const [data, setData] = useState([]);  


  const fetchData = () => {
    fetch('http://localhost:3002/users')
      .then((response) => response.json())  
      .then((data) => setData(data))  
      .catch((error) => console.error('Ошибка при загрузке данных:', error));
    };

  useEffect(() => {
    fetchData()
  },[fetchData,refreshTrigger])

  return (
    <div className="data-list">
      <List className="data-list-info">
        {data.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => onItemClick(item)}
          >
            <ListItemText primary={`${item.first_name} ${item.last_name}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DataList;

 
