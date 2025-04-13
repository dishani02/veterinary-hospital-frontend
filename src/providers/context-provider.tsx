import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthUser = {
    name: string;
    email: string;
    role: string;
    accessToken: string;
};

type Cart = {
    products: Array<any>;
};

type AppContextType = {
    user: AuthUser | null;
    cart: Cart | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
    setCart: React.Dispatch<React.SetStateAction<Cart | null>>;
    logOut: () => void
};

const AppContext = createContext<AppContextType | undefined>(undefined);

interface Props {
    children: React.ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<AuthUser | null>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [cart, setCart] = useState<Cart | null>(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : null;
    });

    // Sync user to localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    // Sync cart to localStorage
    useEffect(() => {
        if (cart) {
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.removeItem('cart');
        }
    }, [cart]);

    const logOut = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
    };

    return (
        <AppContext.Provider value={{ user, setUser, cart, setCart, logOut }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
};
