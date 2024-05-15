import React, { createContext, useContext, useState } from 'react';

// Create the context
const ChurchContext = createContext();

// Custom hook to use the context
export const useChurch = () => useContext(ChurchContext);

// Provider component
export const ChurchProvider = ({ children }) => {
    const [pendingMembers, setPendingMembers] = useState(["Member 1", "Member 2", "Member 3"]); // Sample initial data
    const [churchMembers, setChurchMembers] = useState(["Chenelyn Hernandez", "Kyla Shingaling", "Wreckit Ralph", "America Joy"]);
    const [totalMembers, setTotalMembers] = useState(50); // Assuming 50 is the total capacity or slots
    const [acceptedMembers, setAcceptedMembers] = useState(churchMembers.length);
    const [notifications, setNotifications] = useState(pendingMembers.length + churchMembers.length);

    // Function to accept a member
    const acceptMember = (member) => {
        setPendingMembers(prev => prev.filter(m => m !== member));
        setChurchMembers(prev => [member, ...prev]);
        setAcceptedMembers(prev => prev + 1); // Increment the count of accepted members
        setNotifications(prev => prev - 1); // Update notifications
    };

    // Function to decline a member
    const declineMember = (member) => {
        setPendingMembers(prev => prev.filter(m => m !== member));
        setNotifications(prev => prev - 1);
    };

    return (
        <ChurchContext.Provider value={{
            pendingMembers,
            churchMembers,
            totalMembers,
            acceptedMembers,
            notifications,
            acceptMember,
            declineMember
        }}>
            {children}
        </ChurchContext.Provider>
    );
};

export default ChurchProvider;
