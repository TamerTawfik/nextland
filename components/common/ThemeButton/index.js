import { useTheme } from 'next-themes'
import { FaRegSun, FaRegMoon } from "react-icons/fa"

export default function ThemeButtton() {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {resolvedTheme === "dark" ? <FaRegSun /> : <FaRegMoon />}
        </button>
    )
}