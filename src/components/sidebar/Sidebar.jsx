const Sidebar = ({sidebarVisible}) => {
  return (
    <div className={`${sidebarVisible ? "translate-x-0" : "-translate-x-[250px]"} fixed transition w-[250px] h-screen bg-grey-900 text-grey-100`}>
        Sidebar
    </div>
  )
};
export default Sidebar;
