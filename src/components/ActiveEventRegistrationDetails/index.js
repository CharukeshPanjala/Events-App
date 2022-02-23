import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {details} = props
  const {id} = details
  console.log(id)
  const renderRegistrationClosed = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-image"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-text">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="closed-image"
      />
      <p className="closed-text">
        A live performance brings so much to your relationship with dance.Seeing
        dance live can often make you fall totally in love with this beautiful
        art form.
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="closed-image"
      />
      <h1 className="closed-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  switch (id) {
    case 'REGISTRATIONS_CLOSED':
      return renderRegistrationClosed()
    case 'YET_TO_REGISTER':
      return renderYetToRegister()
    case 'REGISTERED':
      return renderRegistered()
    default:
      return (
        <p className="no-active-event">
          Click on an event, to view its registration details
        </p>
      )
  }
}

export default ActiveEventRegistrationDetails
