import React, { createContext, useState, useContext } from 'react';

const ChurchMemberContext = createContext();

export const ChurchMemberProvider = ({ children }) => {
    const [members, setMembers] = useState(["Member 1", "Member 2", "Member 3", "Member 4", "Member 5"]);
    const [churchMembers, setChurchMembers] = useState(["Chenelyn Hernandez", "Kyla Shingaling", "Wreckit Ralph", "America Joy"]);

    const getPendingCount = () => members.length;
    const getCurrentCount = () => churchMembers.length;

    return (
        <ChurchMemberContext.Provider value={{ getPendingCount, getCurrentCount, setMembers, setChurchMembers }}>
            {children}
        </ChurchMemberContext.Provider>
    );
};

export const useChurchMember = () => useContext(ChurchMemberContext);
