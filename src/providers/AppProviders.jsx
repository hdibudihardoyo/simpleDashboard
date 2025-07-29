import { ThemeProvider } from "../contexts/ThemeContext";
import { UserProvider } from "../contexts/UserContext";

// Combined Providers Component
export const AppProviders = ({ children }) => {
    return (
        <ThemeProvider>
            <UserProvider>
                {children}
            </UserProvider>
        </ThemeProvider>
    );
};


export default AppProviders;