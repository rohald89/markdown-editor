const Wrapper = ({sidebarVisible, children}) => {
  return (
    <div className={`${sidebarVisible ? "translate-x-[250px]" : "translate-x-0"} transition h-screen w-screen flex flex-col`}>{children}</div>
  )
}
export default Wrapper
