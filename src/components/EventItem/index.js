import './index.css'

const EventItem = props => {
  const {details, onClickItem} = props
  const {id, imageUrl, name, location, registrationStatus} = details
  const onClickEvent = () => {
    console.log('hi')
    onClickItem(registrationStatus)
  }
  return (
    <li className="event-item" id={id} onClick={onClickEvent}>
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-item-image" />
      </button>
      <p className="event-item-heading">{name}</p>
      <p className="event-item-location">{location}</p>
    </li>
  )
}

export default EventItem
