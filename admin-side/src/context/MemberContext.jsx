import React, { useState } from 'react';

const applicants = ["Janae", "Deshaun", "Kaia", "Andrew", "Draven", "Landen", "Kailey", "Nathen"];
const members = ["Chenelyn Hernandez", "Kyla Shingaling", "America Joy"];

export const MemberContext = React.createContext();

const MemberProvider = ({ children }) => {
    const [membersState, setMembersState] = useState(members);
    const [applicantsState, setApplicantsState] = useState(applicants);


    return (
        <MemberContext.Provider value={[membersState, setMembersState, applicantsState, setApplicantsState]}>
            {children}
        </MemberContext.Provider>
    );
};

export default MemberProvider;
