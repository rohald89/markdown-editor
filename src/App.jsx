import { useEffect, useState } from "react"
import Header from "./components/header"
import NoteContent from "./components/noteContent"
import Sidebar from "./components/sidebar"
import Wrapper from "./components/wrapper"
import useLocalStorage from "./hooks/useLocalStorage"

function App() {
  const [theme, setTheme] = useLocalStorage("theme", null)

  useEffect(() => {
    if (theme) {
        setTheme(theme)
    } else {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark")
        } else {
        setTheme("light")
        }
    }
  }, []);

  useEffect(() => {
    if(theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [theme])

  const [sidebarVisible, setSidebarVisible] = useState(false)
  return (
    <div className="relative overflow-hidden min-h-screen">
        <Sidebar sidebarVisible={sidebarVisible} theme={theme} setTheme={setTheme} />

        <Wrapper sidebarVisible={sidebarVisible}>
            <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />

            <NoteContent />
        </Wrapper>
    </div>
  )
}

export default App
