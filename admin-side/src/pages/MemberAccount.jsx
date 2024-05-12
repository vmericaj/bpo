import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberInfo from '../member-account/MemberInfo';
import MemberModal from '../member-account/MemberModal';
import MemberAcc from '../member-account/MemberAcc';

export default function ChurchAccount(){
   return (
    <Router>
    <Routes>
        <Route path="/" element={<MemberAcc />} />
        <Route path="/MemberInfo" element={<MemberInfo />} />
    </Routes>
    </Router>
   )
}