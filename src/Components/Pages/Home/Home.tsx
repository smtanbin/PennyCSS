import logo from "../../../Assets/Img/SVG/starlingFull.svg"
const Home = () => {
  return (
    <section>
      <Hero />
      <Introduction />
      <Introduction />
    </section>
  )
}


const Introduction = () => {
  return (
    <section className="column col-6 col-xs-12 bg-primary text-light p-4 wf block p-centered text-center">
      <p >
        <strong>Starling </strong>
        modern CSS framework that aims to provide a lightweight and responsive design for web development. It is a collection of CSS styles and JavaScript components that can be easily integrated into a website to help developers create a clean, fast and user-friendly interface. The framework is built using latest technologies and design principles to ensure that websites built with it are modern, accessible and optimized for both desktop and mobile devices.
      </p>

    </section>
  )
}
const Hero = () => {
  return (
    <div className="hero ">
      <div className="hero-body p-centered">
        <img src={logo} className="responsive " />
        <p className="mt-3">Modern, lightweight, responsive CSS framework for web development.</p>
        <div className="row">
          <a className="btn btn-primary" href="https://picturepan2.github.io/spectre/">Github</a>
        </div>
      </div>
    </div>
  )
}

export default Home