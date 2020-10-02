import React, { useState } from 'react';
import './App.css';
import Appointment from './components/Appointment';
import Form from './components/Form';

function App() {
  const [appointments, setAppoinments] = useState([]);

  const createappointment = appointment => {
    setAppoinments([...appointments, appointment])
  }

  const deleteAppointment = id => {
    console.log(id)
  }

  return (
    <div>
      <h1>Patients Manager</h1>
      <div className="container "></div>
      <div className="row">
        <div className="one-half column">
          <Form
            createappointment={createappointment}
          />
        </div>
        <div className="one-half column">
          <h2>Appointments</h2>

          {appointments.map(appointment => (
            <Appointment
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
