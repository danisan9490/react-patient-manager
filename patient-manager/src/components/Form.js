import React, { Fragment, useState } from 'react';


const Form = () => {


  return (
    <Fragment>
      <h2>Form</h2>

      <form
      // onSubmit={submitCita}
      >
        <label>Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
        // onChange={actualizarState}
        // value={pet}
        />

        <label>Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner Name"
        // onChange={actualizarState}
        // value={owner}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
        // onChange={actualizarState}
        // value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
        // onChange={actualizarState}
        // value={time}
        />

        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
        // onChange={actualizarState}
        // value={symptoms}
        ></textarea>

        <button
          type="submit"
          className="u-full-width button-primary"
        >Create Appointment</button>
      </form>
    </Fragment>
  )
}

export default Form;