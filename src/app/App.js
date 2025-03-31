import './App.css';
import React, { useState } from 'react';
import DataList from '../data-list/data-list';
import EventForm from '../event-form/event-form';

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleUpdateItem = (updatedItem) => {
    setData(prevData =>
      prevData.map(item => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <DataList data={data} setData={setData} onItemClick={handleItemClick} />
        <EventForm 
          selectedItem={selectedItem} 
          setSelectedItem={setSelectedItem} 
          onUpdate={handleUpdateItem} 
        />
      </header>
    </div>
  );
}

export default App;
