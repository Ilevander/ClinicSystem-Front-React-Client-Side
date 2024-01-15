import React, { createContext, useReducer } from 'react';
import axios from 'axios';

import appReducer from './AppReducer';

const initialState = {
  appointments: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  async function loadAppointments() {
    try {
      const response = await axios.get('https://localhost:7171/api/Appointments');
      dispatch({ type: 'LOAD_APPOINTMENTS', payload: response.data });
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  }

  function addAppointment(appointment) {
    dispatch({
      type: 'ADD_APPOINTMENT',
      payload: appointment,
    });
  }

  function editAppointment(appointment) {
    dispatch({
      type: 'EDIT_APPOINTMENT',
      payload: appointment,
    });
  }

  function removeAppointment(id) {
    dispatch({
      type: 'REMOVE_APPOINTMENT',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        appointments: state.appointments,
        loadAppointments,
        addAppointment,
        editAppointment,
        removeAppointment,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
