import { useTheme } from "../context/ThemeContext";
import { SunIcon,MoonIcon } from "lucide-react";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
    >
    {theme === "dark" ? <SunIcon/> : <MoonIcon/> } 
    </button>
  );
}

export default ThemeToggleButton;
