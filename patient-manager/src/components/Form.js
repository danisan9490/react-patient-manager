import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ createappointment }) => {

  const [appointment, setappointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: ''
  });

  const [error, setError] = useState(false)
  const { pet, owner, date, time, symptoms } = appointment


  const handleChange = (e) => {
    setappointment({
      ...appointment,
      [e.target.name]: e.target.value
    })
    // console.log(e.target.value)
  }

  const submitappointment = (e) => {
    e.preventDefault();
    // validation
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    appointment.id = uuidv4();
    createappointment(appointment);
    setappointment({
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
        onSubmit={submitappointment}
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
        >Create appointment</button>
      </form>
      {error ? <p className="alert-error ">All files are required</p> : null}
    </Fragment>
  )
}

export default Form;