
import './data-list.css';
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';


function DataList() {
  return (
    <div className="data-list">
    <List className="data-list-info"
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
    </div>
  );
}

export default DataList;
