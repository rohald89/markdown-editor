import SidebarToggle from "./SidebarToggle"

const Header = ({ sidebarVisible, setSidebarVisible }) => {
  return (
    <div className="h-12 md:h-20 bg-grey-800 text-grey-100">
        <SidebarToggle sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />

    </div>
  )
}
export default Header
