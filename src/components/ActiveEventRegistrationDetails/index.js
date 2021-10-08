// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus, setRegistrationStatus} = props

  const renderNoActiveEvent = () => (
    <div className="no-active-event-container">
      <p className="no-active-event-text">
        Click on an event, to view it&#39;s registration details
      </p>
    </div>
  )

  const onClickRegister = () => {
    setRegistrationStatus('REGISTERED')
  }

  const renderYetToRegister = () => (
    <div className="Yet-to-register-container">
      <div>
        <img
          className="Yet-to-register-image"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
        <p className="Yet-to-register-text">
          A live performance brings so much to your relationship with dance,
          Seeing dance live can often make you fall totally in love with the
          beautiful art form.
        </p>
        <button
          type="button"
          className="Register-button"
          onClick={onClickRegister}
        >
          Register Here
        </button>
      </div>
    </div>
  )

  const renderRegistered = () => (
    <div className="registered-container">
      <img
        className="registered-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registered-text">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationsClosed = () => (
    <div className="registrations-closed-container">
      <img
        className="registrations-closed-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="registrations-closed-text">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen <br />
        the registrations soon!
      </p>
    </div>
  )

  const renderRegistrationStatus = () => {
    switch (registrationStatus) {
      case 'YET_TO_REGISTER':
        return renderYetToRegister()
      case 'REGISTERED':
        return renderRegistered()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationsClosed()
      default:
        return renderNoActiveEvent()
    }
  }

  return renderRegistrationStatus()
}

export default ActiveEventRegistrationDetails
