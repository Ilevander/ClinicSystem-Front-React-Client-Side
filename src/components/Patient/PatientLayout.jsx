import React from 'react';
import SidebarPatient from '../SidebarPatient';



const PatientLayout = ({ children }) => {
  const layoutStyle = {
    marginLeft: '250px', 
    transition: 'margin-left 0.5s ease',
  };

  return (
    <div style={layoutStyle}>
      <SidebarPatient />
      {children}
    </div>
  );
};

export default PatientLayout;
