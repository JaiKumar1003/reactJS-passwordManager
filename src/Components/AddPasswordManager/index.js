import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordManager from '../PasswordManager'
import './index.css'

const backgroundColorCode = [
  'yellow',
  'lightgreen',
  'lightorange',
  'lightblue',
  'darkred',
  'grey',
  'skyblue',
]

class AddPasswordManager extends Component {
  state = {website: '', username: '', password: '', passwordList: []}

  onSubmitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPasswordObject = {
      id: uuidv4(),
      website,
      username,
      password,
      bgColor:
        backgroundColorCode[
          Math.floor(Math.random() * backgroundColorCode.length)
        ],
    }

    if (website !== '' && username !== '' && password !== '') {
      this.setState(prevState => ({
        website: '',
        username: '',
        password: '',
        passwordList: [...prevState.passwordList, newPasswordObject],
      }))
    }
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  renderPasswordInput = () => {
    const {website, username, password} = this.state
    return (
      <div className="password-input-card">
        <div className="password-manager-img-card">
          <img
            className="password-manager-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
        </div>
        <form onSubmit={this.onSubmitForm} className="form-card">
          <h1 className="form-heading">Add New Password</h1>
          <div className="input-card">
            <img
              className="input-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input
              value={website}
              onChange={this.onChangeWebsite}
              className="input"
              placeholder="Enter Website"
              type="text"
            />
          </div>
          <div className="input-card">
            <img
              className="input-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input
              value={username}
              onChange={this.onChangeUsername}
              type="text"
              className="input"
              placeholder="Enter Username"
            />
          </div>
          <div className="input-card">
            <img
              className="input-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input
              value={password}
              onChange={this.onChangePassword}
              type="password"
              className="input"
              placeholder="Enter Password"
            />
          </div>
          <button className="add-button" type="submit">
            Add
          </button>
        </form>
      </div>
    )
  }

  renderPasswordManagerLogo = () => (
    <div className="app-logo-card">
      <img
        className="app-logo"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
      />
    </div>
  )

  render() {
    const {passwordList} = this.state
    return (
      <div className="app-container">
        <div className="password-manager-container">
          {this.renderPasswordManagerLogo()}
          {this.renderPasswordInput()}
          <PasswordManager passwordList={passwordList} />
        </div>
      </div>
    )
  }
}

export default AddPasswordManager
