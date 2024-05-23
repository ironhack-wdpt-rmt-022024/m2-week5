import { createContext, useState } from 'react';

const ThemeContext = createContext();

// ThemeContext - context object
// ThemeContext.Provider - used for providing values through context


// Wrapper component - used to provide context and store some state
function ContextWrapper (props) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    }
    else {
      setTheme('dark')
    }
  }

  return(
    <ThemeContext.Provider value={  
      { 
        theme: theme,
        toggleTheme: toggleTheme 
      }  
      } >
     {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
export { ContextWrapper };