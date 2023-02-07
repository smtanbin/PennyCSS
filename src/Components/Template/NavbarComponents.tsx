import logo from "../../Assets/Img/SVG/starlingFull.svg"

const NavbarComponents = ({ sidebtn }: any) => {
  return (
    <header className="container  navbar navbar-default p-fixed">
      <section className="navbar-section ">
        {sidebtn ? sidebtn : <></>}

        <img src={logo} className="navbar-brand img-fit-contain mx-2 " />

        {/* <a href="..." className="btn btn-link">Docs</a> */}
        {/* <a href="..." className="btn btn-link">GitHub</a> */}
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