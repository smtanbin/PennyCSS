import { v4 as uuidv4 } from 'uuid';

const Sidenav = () => {
    return (
<GettingStartedMent/>
    )
}

const GettingStartedMent = () => { 
    const accordionId = uuidv4()
    return (
       <div className="accordion">
  <input type="radio" id={accordionId} name="accordion-radio" hidden/>
  <label className="accordion-header" htmlFor={accordionId}>
    Getting Started
  </label>
  <div className="accordion-body">
    {/* <!-- Accordions content --> */}
  </div>
</div> 
    )
}

export default Sidenav

