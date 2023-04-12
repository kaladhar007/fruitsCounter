// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mangoCounter = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  bananaCounter = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="back_ground">
        <div className="container">
          <h1>
            Bob ate <span>{count1}</span> mangoes <span>{count2}</span> bananas
          </h1>

          <div className="cards_container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div>
                <button type="button" onClick={this.mangoCounter}>
                  Eat Mango
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div>
                <button type="button" onClick={this.bananaCounter}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
