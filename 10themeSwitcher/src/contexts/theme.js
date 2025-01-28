import { createContext, useContext } from "react"; // ye hooks hai

export const ThemeContext = createContext({
      // ye  default value hai
       themeMode : "light",
       // ye do just function or methods hai
      darkTheme : () => {},       
      lightTheme : () => {},       
}) 
/*ThemeContext.Provider method ko ThemeProvider ke name se use karne ke liye define kiya gaya hai
 aur usko export kiya gaya hai dusre component me use karne ke liye */
export const ThemeProvider = ThemeContext.Provider

/* yaha useTheme function declare karke ThemeContext ki sari default value ye function me le liti hai */
export default function useTheme() {
    return useContext(ThemeContext);
}