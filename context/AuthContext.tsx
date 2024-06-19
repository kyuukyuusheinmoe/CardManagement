import { ReactNode, createContext, useEffect, useState } from "react";
import { View } from "react-native";
import { createCardUser } from "../services/customer";
import { Card } from "../types";

interface AuthContextProps {
    customerData: {
        id: string;
        cards: Card[]
    } | null
}

export const AuthContext = createContext<AuthContextProps>({ customerData: null })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [customerData, setCustomerData] = useState(null)

    useEffect(() => {
        const createUser = async () => {
            const res = await createCardUser("kyukyusheinmoe97@gmail.com");
            if (res) {
                setCustomerData(res)
            }
        }
        createUser()
    }, [])

    return (<AuthContext.Provider value={{ customerData }}><View>{children}</View></AuthContext.Provider>)
}