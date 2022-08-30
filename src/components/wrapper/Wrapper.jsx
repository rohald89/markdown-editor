const Wrapper = ({sidebarVisible, children}) => {
  return (
    <div className={`${sidebarVisible ? "translate-x-[250px]" : "translate-x-0"} transition w-screen`}>{children}</div>
  )
}
export default Wrapper
