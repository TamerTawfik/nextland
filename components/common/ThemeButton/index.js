import { useTheme } from 'next-themes'
import { FaRegSun, FaRegMoon } from "react-icons/fa"

export default function ThemeButtton() {
    const { theme, setTheme } = useTheme()
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <FaRegSun /> : <FaRegMoon />}
        </button>
    )
}