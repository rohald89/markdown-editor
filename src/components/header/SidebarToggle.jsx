const SidebarToggle = ({ sidebarVisible, setSidebarVisible}) => {
  return (
    <button className="flex justify-center items-center h-full w-12 bg-grey-700 md:w-20" onClick={() => setSidebarVisible(!sidebarVisible)}>
        {
            sidebarVisible ? (
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z"/><path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z"/></g></svg>
            ) : (
                <svg width="30" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z"/></g></svg>
            )
        }
    </button>
  )
}
export default SidebarToggle
