import { createContext,useState } from 'react';

export const ThemeContext = createContext("");

function Theme({children}) {

    const [theme, setTheme] = useState(true);

    const handleTheme = () => {
        setTheme(!theme);
    }

    return (
        <ThemeContext.Provider value={{theme,handleTheme}}>{ children}</ThemeContext.Provider>
    )
    


}

export default Theme;