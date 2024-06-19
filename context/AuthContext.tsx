import { ReactNode, createContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { createCardUser } from "../services/customer";
import { Card } from "../types";

interface CustomerDataProps {
    id: string;
    cards: { data: Card[] }
}

interface AuthContextProps {
    customerData: CustomerDataProps | null,
    updateCards?: (cards: { data: Card[] }) => void
}

export const AuthContext = createContext<AuthContextProps>({ customerData: null })

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [customerData, setCustomerData] = useState<CustomerDataProps | null>(null)

    useEffect(() => {
        const createUser = async () => {
            const res = await createCardUser("kyukyusheinmoe97@gmail.com");
            if (res) {
                setCustomerData(res)
            }
        }
        createUser()
    }, [])

    const updateCards = (cards: { data: Card[] }) => {
        if (customerData) {
            setCustomerData({ ...customerData, cards })
        }
    }

    return (<AuthContext.Provider value={{ customerData, updateCards }}><View style={styles.layout}>{children}</View></AuthContext.Provider>)
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
    }
})