import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

export default class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: []
  }

  render() {
    return (
      <div>
      <SearchBar />

          <div className="row">
            <div className="col-6">
              <StockContainer stocks={this.state.stocks} addStock={this.addStock} />
            </div>
            <div className="col-4">
              <PortfolioContainer stocks={this.state.portfolio} removeStock={this.removeStock} />
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

// function adding clicked stock to the portfolio (if not already owned)
  addStock = id => {
    let stockToAdd = this.state.stocks.find(stock => stock.id === id)

    if (this.state.portfolio.find(stock => stock.id === stockToAdd.id) === undefined) {
      this.setState(prevState => ({
        portfolio: [...prevState.portfolio, stockToAdd]
      }))
    }

  }

// function removing clicked stock from portfolio
  removeStock = id => {
    this.setState(prevState => ({
      portfolio: prevState.portfolio.filter(stock => stock.id !== id)
    }))
  }

}
