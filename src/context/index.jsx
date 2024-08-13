import { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const AppContext = createContext(null);

const GlobalContext = ({ children }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <AppContext.Provider value={{
            theme,
            toggleTheme,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export default GlobalContext;
