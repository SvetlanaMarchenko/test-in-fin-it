import './App.css';
import React, { useState } from 'react';
import DataList from '../data-list/data-list';
import EventForm from '../event-form/event-form';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="app">
      <header className="app-header">
        <DataList onItemClick={handleItemClick} />
        <EventForm selectedItem={selectedItem} />
      </header>
    </div>
  );
}

export default App;
