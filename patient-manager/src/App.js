import React from 'react';
import './App.css';
import Appointments from './components/Appointments';
import Form from './components/Form';

function App() {
  return (
    <div>
      <h1>Patients Manager</h1>
      <div className="container "></div>
      <div className="row">
        <div className="one-half column">
          <Form />
        </div>
        <div className="one-half column">
          <Appointments />
        </div>
      </div>
    </div>
  );
}

export default App;
