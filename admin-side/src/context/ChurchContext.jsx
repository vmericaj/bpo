import React, { useState } from 'react';

const applicants = ["Mitchell", "Truman", "Clarence", "Mariano", "Reilly", "Brenton", "Sophia"];
const members = ["Chenelyn Hernandez", "Kyla Shingaling", "Wreckit Ralph", "America Joy"];

export const ChurchContext = React.createContext();

const ChurchProvider = ({ children }) => {
    const [membersState, setMembersState] = useState(members);
    const [applicantsState, setApplicantsState] = useState(applicants);


    return (
        <ChurchContext.Provider value={[membersState, setMembersState, applicantsState, setApplicantsState]}>
            {children}
        </ChurchContext.Provider>
    );
};

export default ChurchProvider;
