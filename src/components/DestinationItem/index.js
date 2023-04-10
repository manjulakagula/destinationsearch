import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="list-container">
      <div className="list-item">
        <img src={imgUrl} alt={name} className="list-image" />
        <p className="para">{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
