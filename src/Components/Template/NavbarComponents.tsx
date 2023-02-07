import { useState } from "react"
import logo from "../../Assets/Img/SVG/starlingFull.svg"

const NavbarComponents = () => {

  const [closeBtn, setCloseBtn] = useState(false)


  const openBtn = <a className="off-canvas-toggle btn btn-primary btn-action" href="#sidebar-id">
    <i className="icon icon-menu"></i>
  </a>

  const clsBtn = <a className="off-canvas-toggle btn btn-action" href="#close">
    <i className="icon icon-close"></i>
  </a>





  return (
    <header className="container z-5  navbar navbar-elevated p-fixed">
      <section className="navbar-section ">
        {closeBtn ? <a className="off-canvas-toggle btn btn-action" href="#sidebar-id" onClick={() => setCloseBtn(!closeBtn)}>
          <i className="icon icon-cross"></i>
        </a> : <a className="off-canvas-toggle btn btn-primary btn-action" href="#close" onClick={() => setCloseBtn(!closeBtn)}>
          <i className="icon icon-menu"></i>
        </a>}
        <img src={logo} className="navbar-brand img-fit-contain mx-2 " />
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input className="form-input" type="text" placeholder="search" />
          <button className="btn btn-primary input-group-btn">Search</button>
        </div>
      </section>
    </header>
  )
}
export default NavbarComponents