import { useTheme } from 'next-themes'
import { FaRegSun, FaRegMoon } from "react-icons/fa"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function ThemeButtton() {
    const { resolvedTheme, setTheme } = useTheme()
    return (
        <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {resolvedTheme === "dark" ? <HiOutlineMoon className="text-white" /> : <HiOutlineSun />}
        </button>
    )
}