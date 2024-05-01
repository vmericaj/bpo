
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from '../manage-account/Account';
import PersonalInformation from '../manage-account/PersonalInformation';
import ChangePassword from '../manage-account/ChangePassword';
import PrivacySettings from '../manage-account/PrivacySettings';
import NewAdmin from '../manage-account/NewAdmin';


const ManageAccount = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/privacy-settings" element={<PrivacySettings />} />
        <Route path="/new-admin" element={<NewAdmin />} />
        
      </Routes>
    </Router>
  );
};

export default ManageAccount;
