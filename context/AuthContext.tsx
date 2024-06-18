import { ReactNode, createContext, useEffect, useState } from "react";
import { View } from "react-native";
import { createCustomer } from "../services/customer";

export const AuthContext = createContext({ customerId: null })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [customerId, setCustomerId] = useState(null)
    useEffect(() => {
        const createUser = async () => {
            const res = await createCustomer("johndoe@example.com");
        }
        createUser()
    }, [])
    return (<AuthContext.Provider value={{ customerId }}><View>{children}</View></AuthContext.Provider>)
}