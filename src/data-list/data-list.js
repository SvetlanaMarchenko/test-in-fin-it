import './data-list.css';
import React, { useState, useEffect, useCallback } from 'react';  
import { List, ListItem, ListItemText, Button } from '@mui/material';

function DataList({ onItemClick, refreshTrigger }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = useCallback(() => {
    fetch(`http://localhost:3002/users?_page=${page}&_limit=10`)
      .then((response) => {
        const total = Number(response.headers.get('X-Total-Count'))
        setTotalPages(Math.ceil(total / 10))
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error('Ошибка при загрузке данных:', error))
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData, refreshTrigger]);

  return (
    <div className="data-list">
      <List className="data-list-info">
        {data.map((item) => (
          <ListItem button key={item.id} onClick={() => onItemClick(item)}>
            <ListItemText primary={`${item.first_name} ${item.last_name}`} />
          </ListItem>
        ))}
      </List>

      <div className="pagination-buttons">
        <Button
          variant="outlined"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          &lt;&lt;
        </Button>

        <span>Страница {page} из {totalPages}</span>

        <Button
          variant="outlined"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page >= totalPages}
        >
          &gt;&gt;
        </Button>
      </div>
    </div>
  );
}

export default DataList;
