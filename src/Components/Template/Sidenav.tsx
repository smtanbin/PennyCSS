import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import logo from "../../Assets/Img/SVG/starlingLogo.svg"


const Sidenav = () => {
  return (
    <div className='container p-centered'>
      <Hero />
      <div className='ml-1'>
        <GettingStartedMent />
        <Elements />
        <Layout />
      </div>
    </div>
  )
}

const GettingStartedMent = () => {
  const accordionId = uuidv4()
  return (
    <div className="accordion">
      <input type="checkbox" id={accordionId} name="accordion-checkbox" hidden />
      <label className="accordion-header" htmlFor={accordionId}>

        Getting Started
      </label>
      <div className="accordion-body">
        <ul className="menu menu-nav">
          <li className="menu-item"><a href="../getting-started/installation.html">Installation</a>
          </li>
          <li className="menu-item"><a href="../getting-started/custom.html">Custom version</a>
          </li>
          <li className="menu-item"><a href="../getting-started/browsers.html">Browser support</a>
          </li>
          <li className="menu-item"><a href="../getting-started/whatsnew.html">What's new</a>
          </li>
        </ul>
      </div>

    </div>
  )
}
const Elements = () => {
  const accordionId = uuidv4()
  return (
    <div className="accordion">
      <input type="checkbox" id={accordionId} name="accordion-checkbox" hidden />
      <label className="accordion-header" htmlFor={accordionId}>

        Elements
      </label>
      <div className="accordion-body">
        <ul className="menu menu-nav">
          <li className="menu-item">
            <Link to={'typography'}>Typography</Link>
          </li>

        </ul>
      </div>

    </div>
  )
}
const Layout = () => {
  const accordionId = uuidv4()
  return (
    <div className="accordion">
      <input type="checkbox" id={accordionId} name="accordion-checkbox" hidden />
      <label className="accordion-header" htmlFor={accordionId}>

        Layout
      </label>
      <div className="accordion-body">
        <ul className="menu menu-nav">

          <li className="menu-item">
            <Link to={'Navbar'}>Navbar</Link>
          </li>
          <li className="menu-item">
            <Link to={'Hero'}>Hero</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

const Hero = () => {
  return (
    <div className="hero mx-3">
      <div className="hero-body">
        <img src={logo} className="img-fit-contain" />
      </div>
    </div>
  )
}

export default Sidenav

