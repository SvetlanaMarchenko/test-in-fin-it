
import './App.css';
import React from 'react';
import DataList from '../data-list/data-list'
import EventForm from '../event-form/event-form'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <DataList/>
        <EventForm/>
      </header>
    </div>
  );
}

export default App;
