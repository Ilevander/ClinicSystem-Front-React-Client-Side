import React from 'react';
import SidebarDoctor from '../SidebarDoctor';


const DoctorLayout = ({ children }) => {
  const layoutStyle = {
    marginLeft: '250px',
    transition: 'margin-left 0.5s ease',
  };

  return (
    <div style={layoutStyle}>
      <SidebarDoctor />
      {children}
    </div>
  );
};

export default DoctorLayout;
