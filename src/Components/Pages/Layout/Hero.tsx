import logo from "../../../Assets/Img/SVG/starlingLogo.svg"
import ReactCodeSinppet from "react-code-snippet"

const Hero = () => {
    return (
        <div className="container p-centered">
            <Introduction />
            <HeroContent />
            <HeroVarient />
        </div>
    )
}

const HeroContent = () => {
    return (
        <>
            <div className="container m-2 p-4 bg-gray s-rounded">
                <ReactCodeSinppet
                    lang="jsx"
                    code={`   
<div class="hero bg-gray">
  <div class="hero-body">
    <h1>Hero title</h1>
    <p>This is a hero example</p>
  </div>
</div>`}
                >
                    <div className="hero bg-gray">
                        <div className="hero-body">
                            <h1>Title</h1>
                            <p>This is a hero example</p>
                        </div>
                    </div>
                </ReactCodeSinppet>
                <p>
                    Use <strong>hero-sm</strong> and <strong>hero-lg</strong> to the hero
                    container for smaller and larger padding.
                </p>
            </div>
        </>
    )
}
const HeroVarient = () => {
    return (
        <>
            <div className="container m-2 p-4 s-rounded">
                <h2 className="h2 text-primary">Hero size</h2>
                <br />
                <ReactCodeSinppet
                    lang="jsx"
                    code={`   
<div class="hero hero-sm bg-secondary">
  <div class="hero-body">
    <h1>Hero title</h1>
    <p>This is a hero example</p>
  </div>
</div>`}
                >
                    <div className="hero hero-sm bg-secondary ">
                        <div className="hero-body">
                            <h1>Title</h1>
                            <p>This is a hero example</p>
                        </div>
                    </div>
                </ReactCodeSinppet>

                <p>
                    Use <strong>bg-primary</strong> to change color.
                </p>
                <ReactCodeSinppet
                    lang="jsx"
                    code={`   
<div class="hero hero-lg bg-primary">
  <div class="hero-body">
    <h1>Hero title</h1>
    <p>This is a hero example</p>
  </div>
</div>`}
                >
                    <div className="hero hero-lg bg-primary">
                        <div className="hero-body">
                            <h1>Title</h1>
                            <p>This is a hero example</p>
                        </div>
                    </div>
                </ReactCodeSinppet>
            </div>
        </>
    )
}

const Introduction = () => {
    return (
        <section className="container p-2 m-2">
            <h1 className="h1 s-subtitle text-primary my-3">Hero</h1>
            <article>
                The <b>"hero"</b> of a website is a term used to describe a large,
                prominent banner or image that is typically the first thing a user sees
                when they arrive on a website. The hero area is often used to showcase a
                product, service, or message that the website wants to promote or
                highlight. It typically takes up a significant portion of the viewable
                area and is placed "above the fold" so that it can be seen without
                having to scroll. The hero often includes text, images, and buttons that
                encourage users to take a specific action, such as signing up for a
                newsletter or learning more about a product. In summary, the hero of a
                website serves as a key visual element and call to action that helps to
                capture the attention of visitors and guide them towards the main goals
                of the site.
            </article>
        </section>
    )
}

export default Hero
