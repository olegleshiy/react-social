import React, {useState, useContext} from 'react';

const SpinnerContext = React.createContext();

export const useSpinner = () => {
    return useContext(SpinnerContext);
}

export const SpinnerProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const toggle = () => setLoading(false);

    return (
        <SpinnerContext.Provider value={{
            visible: loading,
            toggle,
        }}>
            { children }
        </SpinnerContext.Provider>
    )
}
