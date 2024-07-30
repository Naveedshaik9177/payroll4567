import React, { useState } from 'react';
import './Employee.css';
import NavBar from '../Navbar';
import Employeesidebar from './Employeesidebar';
import LeaveApplication from './LeaveApplication';
import SalaryReport from '../SalaryReport';
import ImageSlider from '../ImageSlider';

const Employee = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <main>
      <NavBar />
      <ImageSlider />
      <div className="employee-page">
        <Employeesidebar onButtonClick={handleButtonClick} />
        <div className="content">
          <div className={`component ${selectedComponent === 'leave' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
            {selectedComponent === 'leave' && <LeaveApplication />}
          </div>
          <div className={`component ${selectedComponent === 'salaryReports' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
            {selectedComponent === 'salaryReports' && <SalaryReport />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;
