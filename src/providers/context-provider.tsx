import React, { createContext, useContext, useState } from 'react'

type AuthUser = {
    name: string;
    email: string;
    accessToken: string;
}

type Cart = {
    products: Array<any>;
};

type AppContextType = {
    user: AuthUser | null;
    cart: Cart | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
    setCart: React.Dispatch<React.SetStateAction<Cart | null>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface Props {
    children: React.ReactNode;
}


export const AppContextProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<Cart | null>(null);
    const [user, setUser] = useState<AuthUser | null>(null);

    return (
        <AppContext.Provider value={{ cart, setCart, user, setUser }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    return context;
};