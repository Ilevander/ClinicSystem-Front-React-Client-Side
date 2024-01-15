export default function appReducer(state, action) {
    switch (action.type) {
      case 'LOAD_APPOINTMENTS':
        return {
          ...state,
          appointments: action.payload,
        };
  
      case 'ADD_APPOINTMENT':
        return {
          ...state,
          appointments: [...state.appointments, action.payload],
        };
  
      case 'EDIT_APPOINTMENT':
        const updatedAppointment = action.payload;
  
        const updatedAppointments = state.appointments.map((appointment) => {
          if (appointment.id === updatedAppointment.id) {
            return updatedAppointment;
          }
          return appointment;
        });
  
        return {
          ...state,
          appointments: updatedAppointments,
        };
  
      case 'REMOVE_APPOINTMENT':
        return {
          ...state,
          appointments: state.appointments.filter(
            (appointment) => appointment.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  }
  