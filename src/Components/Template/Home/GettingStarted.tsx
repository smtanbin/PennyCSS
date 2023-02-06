import logo from "../../../Assets/Img/SPECTRE-PennyAsset 1.svg"
export default () => {
  return (
    <><Hero /><Introduction /></>
  )
}


const Introduction = () => {
  return (
    <section className="column col-6 col-xs-12 bg-primary text-light p-4 wf block p-centered text-center">
      <p >
        <strong>Penny </strong>
        is a new lightweight, responsive and modern CSS framework that foke Spectre.css from for faster and extensible development.
      </p>
      <p>Penny provides basic styles for typography and elements, flexbox based responsive layout system, pure CSS components and utilities with best practice coding and consistent design language.
      </p>
    </section>
  )
}
const Hero = () => {
  return (
    <div className="hero ">
      <div className="hero-body p-centered">
        <img src={logo} className="responsive " />
        <p className="mt-3">A Lightweight, Responsive and Modern CSS Framework</p>
        <div className="row">
          <button className="btn btn-primary">Github</button>
        </div>
      </div>
    </div>
  )
}