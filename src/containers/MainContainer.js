import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

export default class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: []
    }
  }

  render() {
    return (
      <div>
      <SearchBar />

          <div className="row">
            <div className="col-6">
              <StockContainer stocks={this.state.stocks} />
            </div>
            <div className="col-4">
              <PortfolioContainer />
            </div>
          </div>

      </div>
    )
  }

// lifecycle method fetching the stocks and setting state with them
  componentDidMount() {
    fetch("http://localhost:8000/stocks")
    .then(resp => resp.json())
    .then(jsObj => {
      this.setState({
        stocks: jsObj
      })
    })
  }

}
