import './index.css'

const List = props => {
  const {resourceList, getFeedBack} = props
  const {name, imageUrl} = resourceList

  const getStatus = () => {
    getFeedBack()
  }

  let text
  if (name === 'Sad') {
    text = 'sad'
  } else if (name === 'None') {
    text = 'none'
  } else {
    text = 'happy'
  }
  return (
    <li className="container">
      <img src={imageUrl} alt={name} className="img-icon" onClick={getStatus} />
      <p className={text}>{name}</p>
    </li>
  )
}
export default List
