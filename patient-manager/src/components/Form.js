import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ createAppointment }) => {

  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  });

  const [error, setError] = useState(false)
  const { pet, owner, date, time, symptoms } = appointment


  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
    // console.log(e.target.value)
  }

  const submitAppointment = (e) => {
    e.preventDefault();
    // validation
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    appointment.id = uuidv4();
    createAppointment(appointment);
    setAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: ''
    })
  }


  return (
    <Fragment>
      <h2>Form</h2>
      <form
        onSubmit={submitAppointment}
      >
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={handleChange}
          value={pet}
        />

        <label>Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner Name"
          onChange={handleChange}
          value={owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >Create Appointment</button>
      </form>
      {error ? <p className="alert-error ">All files are require</p> : null}
    </Fragment>
  )
}

export default Form;