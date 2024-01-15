import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import AppointmentCrud from './components/Appointment/AppointmentCrud';
import PatientCrud from './components/Patient/PatientCrud';
import DoctorCrud from './components/Doctor/DoctorCrud';
import BookingCrud from './components/Booking/BookingCrud';
import ClinicCrud from './components/Clinic/ClinicCrud';
import FeeCrud from './components/Fee/FeeCrud';
import ScheduleCrud from './components/Schedule/ScheduleCrud';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Team from './components/Team';
import Login from './components/Login';
import Registration from './components/Registration';
import ContactWindow from './components/ContactWindow';
import SidebarPatient from './components/SidebarPatient';
import PatientLayout from './components/Patient/PatientLayout';
import PatientHome from './components/Patient/PatientHome'
import SidebarDoctor from './components/SidebarDoctor';
import DoctorLayout from './components/Patient/PatientLayout'
import DoctorHome from './components/Doctor/DoctorHome';



const App = () => {
  const [showFooter, setShowFooter] = useState(true);

  const handleSidebarLinkClick = () => {
    setShowFooter(false);
  };

  return (
    <Router>
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/sidebarPatient" component={SidebarPatient} />
          <Route path="/sidebarDoctor" component={SidebarDoctor} />

          
          <Route path="/" exact component={LandingPage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactWindow} />
          <Route path="/team" component={Team} />
          <Route
            path="/login"
            render={() => <Login onSidebarLinkClick={handleSidebarLinkClick} />}
          />
          <Route path="/registration" component={Registration} />
          <Route path="/appointments" component={AppointmentCrud} />
          <Route path="/clinics" component={ClinicCrud} />

          <Route path="/bookings" render={() => <PatientLayout><BookingCrud /></PatientLayout>} />
          <Route path="/doctors" render={() => <PatientLayout><DoctorCrud /></PatientLayout>} />
          <Route path="/fees" render={() => <PatientLayout><FeeCrud /></PatientLayout>} />
          <Route path="/schedules" render={() => <PatientLayout><ScheduleCrud /></PatientLayout>} />
          <Route path="/homePatient" render={() => <PatientLayout><PatientHome /></PatientLayout>} />

          <Route path="/appointments" render={() => <DoctorLayout><AppointmentCrud /></DoctorLayout>} />
          <Route path="/clinics" render={() => <DoctorLayout><ClinicCrud /></DoctorLayout>} />
          <Route path="/fees" render={() => <DoctorLayout><FeeCrud /></DoctorLayout>} />
          <Route path="/schedules" render={() => <DoctorLayout><ScheduleCrud /></DoctorLayout>} />
          <Route path="/homeDoctor" render={() => <DoctorLayout><DoctorHome /></DoctorLayout>} />

          <Route path="/patients" component={PatientCrud} />
        </Switch>
        {showFooter && <Footer />}
      </div>
    </Router>
  );
};

export default App;

