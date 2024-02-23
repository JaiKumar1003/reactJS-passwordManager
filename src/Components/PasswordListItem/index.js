import './index.css'

const PasswordListItem = props => {
  const {eachItem, deletePasswordItem, isPassShowed} = props
  const {id, website, username, password, bgColor} = eachItem
  const initialValue = website[0].toUpperCase()
  const showAndHidePass = isPassShowed ? (
    <p className="password">{password}</p>
  ) : (
    <img
      className="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )
  const onclickDelete = () => {
    deletePasswordItem(id)
  }
  return (
    <li className="password-item">
      <div className={`initial-card ${bgColor}`}>
        <p className="initial-value">{initialValue}</p>
      </div>
      <div className="website-username-delete-card">
        <div className="website-username-card">
          <p className="website">{website}</p>
          <p className="username">{username}</p>
          {showAndHidePass}
        </div>
        <button
          onClick={onclickDelete}
          className="button"
          type="button"
          data-testid="delete"
        >
          <img
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordListItem
