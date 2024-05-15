// src/contexts/MemberContext.js
import React, { createContext, useState, useContext } from 'react';

const MemberContext = createContext();

export const MemberProvider = ({ children }) => {
    const [membersState, setMembers] = useState(["Member 1", "Member 2", "Member 3", "Member 4", "Member 5"]);
    const [churchMembersState, setChurchMembers] = useState(["Chenelyn Hernandez", "Kyla Shingaling", "Wreckit Ralph", "America Joy"]);

    return (
        <MemberContext.Provider value={{ membersState, setMembers, churchMembersState, setChurchMembers }}>
            {children}
        </MemberContext.Provider>
    );
};

export const useMemberContext = () => useContext(MemberContext);
