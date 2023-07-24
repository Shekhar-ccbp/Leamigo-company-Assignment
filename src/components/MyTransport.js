import {Component} from 'react'
import './MyTransport.css'

class MyTransport extends Component {
  state = {
    pickUp: '',
    Drop: '',
    pickupDate: '',
    dropDate: '',
    peoples: 1,
    travelList: [],
  }

  onChangePickUp = event => {
    this.setState({pickUp: event.target.value})
  }

  onChangeDrop = event => {
    this.setState({Drop: event.target.value})
  }

  onChangeDateTime1 = event => {
    this.setState({pickupDate: event.target.value})
  }

  onChangeDateTime2 = event => {
    this.setState({dropDate: event.target.value})
  }

  onClickMinus = () => {
    const {peoples} = this.state
    if (peoples > 1) {
      this.setState(prevState => ({peoples: prevState.peoples - 1}))
    }
  }

  onClickPlus = () => {
    this.setState(prevState => ({peoples: prevState.peoples + 1}))
  }

  onClickSearchButton = () => {
    const {pickUp, Drop, pickupDate, dropDate, travelList, peoples} = this.state
    console.log(pickUp)
    this.setState(prevState => ({
      travelList: [
        ...prevState.travelList,
        [pickUp, Drop, pickupDate, dropDate, travelList, peoples],
      ],
    }))
  }

  render() {
    const {pickUp, Drop, pickupDate, dropDate, travelList, peoples} = this.state
    console.log(pickUp)
    console.log(pickupDate)
    console.log(travelList)
    return (
      <div className="bgContainer">
        <div className="header">
          <h1 className="titleLogo">MyTransfers</h1>
          <ul className="HeaderItems">
            <li className="item">Destinations</li>
            <li className="item">My Bookings</li>
            <li className="item">
              <select>
                <option className="item1">Register</option>
                <option className="item1">Login</option>
                <option className="item1">For More Information</option>
              </select>
            </li>
            <li className="item">Help Centre</li>
            <li className="item">
              <select>
                <option className="item1">Eng</option>
                <option className="item1">Francals</option>
                <option className="item1">Espanol</option>
                <option className="item1">Deustch</option>
              </select>
            </li>
            <li className="button">
              <button type="button" className="button1">
                Login
              </button>
            </li>
          </ul>
        </div>
        <div className="homeSection">
          <h1 className="name">Let's go places!</h1>
          <p className="subSection">Transport time with Transparent money</p>
          <div className="inputCard">
            <div className="input1">
              <div className="sub1">
                {/* <IoLocation className="icon" /> */}
                <input
                  type="text"
                  className="inputType1"
                  onChange={this.onChangePickUp}
                  value={pickUp}
                />
              </div>
              <div className="inputSub1">
                <input
                  type="datetime-local"
                  className="input2"
                  onChange={this.onChangeDateTime1}
                  value={pickupDate}
                />
              </div>
            </div>
            <div className="input1">
              <div className="sub1">
                {/* <IoLocation className="icon" /> */}
                <input
                  type="text"
                  className="inputType1"
                  onChange={this.onChangeDrop}
                  value={Drop}
                />
              </div>
              <div className="inputSub1">
                <input
                  type="datetime-local"
                  className="input2"
                  onChange={this.onChangeDateTime2}
                  value={dropDate}
                />
              </div>
            </div>
            <div className="one">
              <p className="value">Adults</p>
              <div className="optionCard">
                <button
                  className="minus"
                  type="button"
                  onClick={this.onClickMinus}
                >
                  -
                </button>
                <p className="value">{peoples}</p>
                <button
                  className="minus"
                  type="button"
                  onClick={this.onClickPlus}
                >
                  +
                </button>
              </div>
            </div>
            <button
              className="search"
              type="button"
              onClick={this.onClickSearchButton}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default MyTransport
