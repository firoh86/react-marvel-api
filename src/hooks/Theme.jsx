import { useState } from 'react';
// use a const to save an specific theme as default must be light mode (false)
const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const switchTheme = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  return [switchTheme, darkMode];
};
export default Theme;
