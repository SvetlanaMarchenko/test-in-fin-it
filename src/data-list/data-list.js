import './data-list.css';
import React, { useState, useEffect } from 'react';  
import { List, ListItem, ListItemText } from '@mui/material';

function DataList({ onItemClick }) {
  const [data, setData] = useState([]);  

  useEffect(() => {
    fetch('http://localhost/1')
      .then((response) => response.json())  
      .then((data) => setData(data))  
      .catch((error) => console.error('Error fetching data:', error));
  }, []); 

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
