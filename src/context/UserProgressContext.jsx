import React, { createContext, useContext } from 'react';

const UserProgressContext = createContext(null);

export const UserProgressProvider = ({ children, value }) => {
    return (
        <UserProgressContext.Provider value={value}>
            {children}
        </UserProgressContext.Provider>
    );
};

export const useUserProgress = () => {
    const context = useContext(UserProgressContext);
    if (!context) {
        throw new Error('useUserProgress must be used within UserProgressProvider');
    }
    return context;
};