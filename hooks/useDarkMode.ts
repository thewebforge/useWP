import { useEffect } from "@wordpress/element";
import useMediaQuery from "./useMediaQuery.js"
import { useLocalStorage } from "./useStorage.js"

export default function useDarkMode(key: string) {
  const [darkMode, setDarkMode] = useLocalStorage(key, true)
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode

  useEffect(() => {
    const root = document.body;
    root?.setAttribute("data-theme", enabled ? "dark" : "light");
  }, [enabled])

  return [enabled, setDarkMode]
}