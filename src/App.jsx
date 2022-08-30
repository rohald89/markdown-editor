import { useState } from "react"
import Header from "./components/header"
import Sidebar from "./components/sidebar"
import Wrapper from "./components/wrapper"

function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false)
  return (
    <div className="relative">
        <Sidebar sidebarVisible={sidebarVisible}/>

        <Wrapper sidebarVisible={sidebarVisible}>
            <Header sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible} />
            {/* <div>
                <h1 className="heading-md">In App Heading (M)</h1>
                <h2 className="heading-sm">In App Heading (S)</h2>
                <p className="app-body">In App Body (S)</p>
            </div>
            <div className="preview">
                <h1 className="heading-1">Preview H1</h1>
                <h2 className="heading-2">Preview H2</h2>
                <h3 className="heading-3">Preview H3</h3>
                <h4 className="heading-4">Preview H4</h4>
                <h5 className="heading-5">Preview H5</h5>
                <h6 className="heading-6">Preview H6</h6>

                <p className="p-reg">Preview Paragraph - Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                <p className="p-bold">Preview Paragraph Bold -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                <p className="p-mono">Preview Paragraph Bold -  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
            </div> */}
        </Wrapper>
    </div>
  )
}

export default App
