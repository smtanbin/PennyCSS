import { Outlet } from 'react-router-dom';
import NavbarComponents from "./NavbarComponents"
import Sidenav from "./Sidenav"

const Template = () => {

    return (
        <main className="container">
            <NavbarComponents sidebtn={<a className="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
                <i className="icon icon-menu"></i>
            </a>} />
            <br />
            <br />
            <div className="off-canvas">
                <div id="sidebar-id" className="off-canvas-sidebar off-canvas-sidebar-full">
                    <Sidenav />
                </div>
                <a className="off-canvas-overlay" href="#close"></a>
                <div className="off-canvas-content ">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}
export default Template