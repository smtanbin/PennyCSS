import logo from "../../Assets/Img/Penny.svg"

const Navbar = ({ sidebtn }: any) => {
    return (
        <header className="navbar p-2">
            <section className="navbar-section">
                {sidebtn?sidebtn:<></>}
               
                    <img src={logo} className="navbar-brand responsive mx-2 col-1" />
                    
    {/* <a href="..." className="btn btn-link">Docs</a> */}
    {/* <a href="..." className="btn btn-link">GitHub</a> */}
  </section>
  <section className="navbar-section">
    <div className="input-group input-inline">
      <input className="form-input" type="text" placeholder="search"/>
      <button className="btn btn-primary input-group-btn">Search</button>
    </div>
  </section>
</header>
    )
}
export default Navbar