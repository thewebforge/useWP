import { useEffect } from "@wordpress/element";
import useMediaQuery from "./useMediaQuery.js"
import { useLocalStorage } from "./useStorage.js"

export default function useDarkMode(key: string, iframeSelector: string | null = null) {
  const [darkMode, setDarkMode] = useLocalStorage(key, true)
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode

  useEffect(() => {
    document.firstElementChild?.setAttribute(
      "data-theme",
      enabled ? "dark" : "light"
    );
    if (iframeSelector) (document
      .getElementById(iframeSelector) as HTMLIFrameElement)
      ?.contentDocument?.firstElementChild?.setAttribute(
        "data-theme",
        enabled ? "dark" : "light"
      );
  }, [enabled])

  return [enabled, setDarkMode]
}