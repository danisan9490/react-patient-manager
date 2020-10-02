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
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppoinments(newAppointments)
  }

  const title = appointments.length === 0 ? 'No appointments' : 'Appointments';

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
          <h2>{title}</h2>
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
