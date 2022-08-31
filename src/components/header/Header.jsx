import DeleteNote from "./DeleteNote"
import FileName from "./FileName"
import SaveNote from "./SaveNote"
import SidebarToggle from "./SidebarToggle"

const Header = ({ sidebarVisible, setSidebarVisible }) => {
  return (
    <header className="flex items-center gap-6 h-14 md:h-20 bg-grey-800 text-grey-100">
        <SidebarToggle sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
        <FileName />
        <DeleteNote />
        <SaveNote />
    </header>
  )
}
export default Header
