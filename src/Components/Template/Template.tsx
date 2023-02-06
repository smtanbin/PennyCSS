import GettingStarted from "./Home/GettingStarted"
import Navbar from "./Navbar"
import Sidenav from "./Sidenav"

const Template = () => {
    
    return (
        <main className="container">
            <Navbar sidebtn={     <a className="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
                <i className="icon icon-menu"></i>
            </a>} />
            <div className="off-canvas">
            <div id="sidebar-id" className="off-canvas-sidebar">
                {/* <!-- off-screen sidebar --> */}
                <Sidenav/>
            </div>

            <a className="off-canvas-overlay" href="#close"></a>

            <div className="off-canvas-content">
                <GettingStarted/>
            </div>
        </div></main>
    )

}
export default Template