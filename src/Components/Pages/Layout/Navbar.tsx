import logo from "../../../Assets/Img/starlingLogo.png"
import ReactCodeSinppet from "react-code-snippet"

const Navbar = () => {
    return (
        <div className="container p-centered">
            <Introduction />
            <RagulerNavbar />
            <CenterNavbar />
        </div>
    )
}

const RagulerNavbar = () => {
    return (
        <>
            <div className="container m-2 p-4 bg-gray s-rounded">
                <ReactCodeSinppet
                    lang="jsx"
                    code={`   
                <header class="navbar m-4 ">
                    <section class="navbar-section">
                        <a href="#navbar" class="navbar-brand text-bold mr-2">Navbar</a>
                        <a href="#navbar" class="btn btn-link">Docs</a>
                        <a href="https://github.com" class="btn btn-link">GitHub</a>
                    </section>
                </header>`}
                >
                    <header className="navbar bg-secondary m-4 ">
                        <section className="navbar-section">
                            <a href="#navbar" className="navbar-brand text-bold mr-2">
                                Navbar
                            </a>
                            <a href="#navbar" className="btn btn-link">
                                Docs
                            </a>
                            <a href="https://github.com" className="btn btn-link">
                                GitHub
                            </a>
                        </section>
                    </header>
                </ReactCodeSinppet>
                <p>
                    The navbar component can include logo brand, nav links and buttons,
                    search box or any combination of those elements. Each section with the{" "}
                    <span className="mark">navbar-section</span> class will be evenly
                    distributed in the container.
                </p>
            </div>
        </>
    )
}
const CenterNavbar = () => {
    return (
        <div className="container m-2 p-4 bg-gray s-rounded">
            <ReactCodeSinppet
                lang="jsx"
                code={`   
<header class="navbar">
  <section class="navbar-section">
    <a href="#" class="btn btn-link">Docs</a>
    <a href="#" class="btn btn-link">Examples</a>
  </section>
  <section class="navbar-center">
    <!-- centered logo or brand -->
  </section>
  <section class="navbar-section">
    <a href="#" class="btn btn-link">Twitter</a>
    <a href="#" class="btn btn-link">GitHub</a>
  </section>
</header>`}
            >
                <header className="navbar">
                    <section className="navbar-section">
                        <a href="#" className="btn btn-link">
                            Docs
                        </a>
                        <a href="#" className="btn btn-link">
                            Examples
                        </a>
                    </section>
                    <section className="navbar-center">
                        {/* <img src={logo} className="col-1" /> */}
                    </section>
                    <section className="navbar-section">
                        <a href="#" className="btn btn-link">
                            Twitter
                        </a>
                        <a href="#" className="btn btn-link">
                            GitHub
                        </a>
                    </section>
                </header>
            </ReactCodeSinppet>
            <p>
                The navbar component can include logo brand, nav links and buttons,
                search box or any combination of those elements. Each section with the{" "}
                <span className="mark">navbar-section</span> class will be evenly
                distributed in the container.
            </p>
        </div>
    )
}

const Introduction = () => {
    return (
        <section className="container p-2 m-2">
            <h1 className="h1 s-subtitle text-primary my-3">Navbar</h1>
            <article>
                The navbar of a website serves as a navigation header and is usually
                displayed at the top of the page. It contains links to the main sections
                of the website, allowing users to quickly find what they are looking
                for. A navbar can be designed to match the overall look and feel of a
                website, and often contains the logo or brand name of the site. Some
                common elements found in a navbar include:
                <ol>
                    <li>Links to main sections of the site</li>
                    <li>Drop-down menus for sub-sections</li>
                    <li>Search form for quick access to site content</li>
                    <li>Login or sign-up buttons</li>
                    <li>Responsive design to adjust to different screen sizes</li>
                </ol>
                Navbars play an important role in improving user experience and making
                it easier for visitors to find the information they need on a website.
            </article>
        </section>
    )
}

export default Navbar
