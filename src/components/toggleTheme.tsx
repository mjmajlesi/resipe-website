import React, { createContext, ReactNode, useEffect, useState } from 'react'

interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    Toggle: () => void;
}

interface Tchildren {
    children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextType)


const getTheme = (): string => {
    const theme = localStorage.getItem("Theme")
    if (!theme) {
        localStorage.setItem("Theme", "Dark-mode")
        return "Dark-mode"
    } else return theme
}


const ThemeProvider = ({ children }: Tchildren) => {
    const [theme, setTheme] = useState<string>(getTheme)

    const Toggle = (): void => {
        theme === "Light-mode" ? setTheme("Dark-mode") : setTheme("Light-mode")
    }
    useEffect(() => {
        const refreshTheme = () => {
            localStorage.setItem("Theme", theme)
        };

        refreshTheme();
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                Toggle
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider };