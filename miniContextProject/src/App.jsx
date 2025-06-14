import { useEffect, useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import UserContextProvider from './contexts/UserContextProvider.jsx'
import { ThemeProvider } from './contexts/theme.js'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <ThemeToggle />
      <UserContextProvider >
        <Login />
      </UserContextProvider>
    </ ThemeProvider>
  )
}

export default App
