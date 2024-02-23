import {Component} from 'react'
import PasswordListItem from '../PasswordListItem'
import './index.css'

class PasswordManager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordManagerList: [],
      passShowed: false,
      seachInput: '',
      searchList: [],
    }
  }

  componentDidUpdate(prevProps) {
    const {passwordList} = this.props
    if (prevProps.passwordList !== passwordList) {
      this.setState({
        passwordManagerList: passwordList,
      })
    }
  }

  onClickDeletePass = passId => {
    const {passwordManagerList, searchList} = this.state
    const filteredPassList = passwordManagerList.filter(
      eachItem => eachItem.id !== passId,
    )
    const filteredSearchPassList = searchList.filter(
      eachItem => eachItem.id !== passId,
    )
    this.setState({
      passwordManagerList: filteredPassList,
      searchList: filteredSearchPassList,
    })
  }

  onClickShowPass = () => {
    this.setState(prevState => ({
      passShowed: !prevState.passShowed,
    }))
  }

  onChangeSearch = event => {
    const {passwordManagerList} = this.state
    const searchInputList = passwordManagerList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    this.setState({
      searchList: searchInputList,
      seachInput: event.target.value,
    })
  }

  renderPasswordHeadingSearchCard = () => {
    const {passwordManagerList, seachInput, searchList} = this.state
    const count =
      seachInput.length > 0 ? searchList.length : passwordManagerList.length
    return (
      <div className="pass-manager-heading-search-card">
        <div className="pass-manager-heading-card">
          <h1 className="pass-manager-heading">Your Passwords</h1>
          <p className="pass-manager-list-count">{count}</p>
        </div>
        <div className="pass-manager-search-card">
          <img
            className="search-img"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
          />
          <input
            value={seachInput}
            onChange={this.onChangeSearch}
            className="search-input"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
    )
  }

  render() {
    const {passwordManagerList, passShowed, seachInput, searchList} = this.state
    console.log(passwordManagerList)
    const {passwordList} = this.props
    console.log(passwordList)
    const passManagerList =
      seachInput.length > 0 ? searchList : passwordManagerList
    return (
      <div className="password-manager-card">
        {this.renderPasswordHeadingSearchCard()}
        <hr className="password-manager-line" />
        <div className="pass-manager-checkbox-card">
          <input
            onClick={this.onClickShowPass}
            className="pass-checkbox"
            type="checkbox"
            id="passwordCheckBox"
          />
          <label className="pass-checkbox-label" htmlFor="passwordCheckBox">
            Show passwords
          </label>
        </div>
        {passManagerList.length < 1 ? (
          <div className="no-password-img-card">
            <img
              className="no-password-img"
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p className="no-password-heading">No Passwords</p>
          </div>
        ) : (
          <ul className="pass-manager-list">
            {passManagerList.map(eachItem => (
              <PasswordListItem
                isPassShowed={passShowed}
                eachItem={eachItem}
                key={eachItem.id}
                deletePasswordItem={this.onClickDeletePass}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default PasswordManager
