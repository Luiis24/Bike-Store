import React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
      })

      useEffect(() => {
        sessionStorage.setItem('user', JSON.stringify(user));
      }, [user])

    return (
        <StoreContext.Provider value={{user, setUser}}>
            {children}
        </StoreContext.Provider>
    )
};
export const useAuth = () => {
    return useContext(StoreContext)
};