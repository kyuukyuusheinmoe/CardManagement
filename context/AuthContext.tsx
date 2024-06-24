import { ReactNode, createContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { createCardUser } from "../services/customer";
import { Card } from "../types";

// hard coded default email
const USER_EMAIL = "johndoe@gmail.com"
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

    //TODO: if the system used the authentication, the user should be ready and no need to create as follows
    useEffect(() => {
        const createUser = async () => {
            const res = await createCardUser(USER_EMAIL);
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