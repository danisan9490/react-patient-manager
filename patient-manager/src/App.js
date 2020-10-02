import React, { useState, useEffect } from 'react';
import Appointment from './components/Appointment';
import Form from './components/Form';

function App() {

  // check local storage
  let localStorageAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!localStorageAppointments) {
    localStorageAppointments = [];
  }

  const [appointments, setAppoinments] = useState([]);

  useEffect(() => {
    let localStorageAppointments = JSON.parse(localStorage.getItem('appointments'));
    if (localStorageAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
      console.log(appointments)

    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments])

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
