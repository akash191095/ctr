import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useMemo } from "react"

function useTheme() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  let theme = useMemo(
    () =>
      createMuiTheme({
        typography: {
          fontFamily: "'Open Sans', sans-serif",
        },
        palette: {
          primary: {
            main: prefersDarkMode ? "#eee" : "#222",
          },
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  )

  theme = responsiveFontSizes(theme)

  return theme
}

export default useTheme
