
import './data-list.css';
import React from 'react';
import { List, ListItem, ListItemText,ListSubheader } from '@mui/material';


function DataList() {
  return (
    <div className="App">
      <header className="App-header">


    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
      </header>
    </div>
  );
}

export default DataList;
