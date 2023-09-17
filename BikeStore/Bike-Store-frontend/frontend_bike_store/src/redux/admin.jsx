import { createContext, useState, useEffect } from "react";
import { useContext } from "react";

const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(() => {
        const storedAdmin = sessionStorage.getItem('admin');
        return storedAdmin ? JSON.parse(storedAdmin) : null;
      })

      useEffect(() => {
        sessionStorage.setItem('admin', JSON.stringify(admin));
      }, [admin])



    return (
        <AdminContext.Provider value={{ admin, setAdmin }}>
            {children}
        </AdminContext.Provider>
    )
}

export const useAdmin = () => {
    return useContext(AdminContext)
}