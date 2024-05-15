import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ChurchModal from './ChurchModal';
import logoImage from '../assets/logo_placeholder.png';
import { ChurchContext } from '../context/ChurchContext';


export default function ChurchAccountPage() {
    const [membersState, setMembersState, applicantsState, setApplicantsState] = useContext(ChurchContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const navigate = useNavigate();

    const handleViewClick = (member) => {
        navigate('/church-account/ChurchInfo', { state: { member } }); // Ensure correct path
    };

    const openModal = (member) => {
        setSelectedApplicant(member);
        setIsModalOpen(true);
    };

    const closeModal = () => setIsModalOpen(false);

    const handleAcceptApplicant = (member) => {
        setApplicantsState(currentMembers => currentMembers.filter(m => m !== member));
        setMembersState(currentChurchMembers => [member, ...currentChurchMembers]);
    };

    const handleDecline = (member) => {
        setApplicantsState(currentMembers => currentMembers.filter(m => m !== member));
    };

    return (
        <div className="p-6 max-w-[375px] font-poppins mx-auto">
            <h1 className="text-[28px] font-extrabold text-center mt-8 mb-6">CHURCH ACCOUNT</h1>
            <div className="flex items-center mb-4">
                <span className="font-semibold text-[0.75rem]">Pending Applications</span>
                <div className="relative ml-2">
                    <div className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {applicantsState.length}
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg w-full">
                {applicantsState.map((member, index) => (
                    <div key={index} className="flex justify-between text-[0.75rem] items-center my-3">
                        <div className="flex items-center">
                            <img src={logoImage} alt="Logo" className="w-10 h-10 object-cover mr-2 ml-2" />
                            <span>{member}</span>
                        </div>
                        <div>
                            <button onClick={() => openModal(member)} className="bg-green-500 text-white ml-4 px-2 py-1 rounded text-xs">ACCEPT</button>
                            <button onClick={() => handleDecline(member)} className="bg-red-500 text-white ml-2 px-2 py-1 rounded text-xs">DECLINE</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg w-full mt-4">
                <h2 className="font-semibold text-[0.75rem] inline">Church Members <span className="bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs">{membersState.length}</span></h2>
                {membersState.map((member, index) => (
                    <div key={index} className="flex justify-between text-[0.75rem] items-center my-2">
                        <div className="flex items-center">
                            <img src={logoImage} alt="Logo" className="w-10 h-10 object-cover mr-2 ml-2" />
                            <span>{member}</span>
                        </div>
                        <button onClick={() => handleViewClick(member)} className="bg-black text-white ml-4 px-2 py-1 rounded text-xs">VIEW</button>
                    </div>
                ))}
            </div>
            {isModalOpen && <ChurchModal member={selectedApplicant} closeModal={closeModal} acceptHandler={handleAcceptApplicant} />}
        </div>
    );
}