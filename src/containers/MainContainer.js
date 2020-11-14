import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

export default class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sortedAlphabetically: false,
    sortedNumerically: false,
    filter: 'All'
  }

  render() {
    let stocksToDisplay = [...this.state.stocks]
    if (this.state.filter !== 'All') {
      stocksToDisplay = stocksToDisplay.filter(stock => stock.type === this.state.filter)
    }

    return (
      <div>
      <SearchBar sortAlphabetical={this.sortAlphabetical} sortNumerical={this.sortNumerical} updateFilter={this.updateFilter} />

          <div className="row">
            <div className="col-6">
              <StockContainer stocks={stocksToDisplay} addStock={this.addStock} />
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
    } // end if
  } // end function

// function removing clicked stock from portfolio
  removeStock = id => {
    this.setState(prevState => ({
      portfolio: prevState.portfolio.filter(stock => stock.id !== id)
    }))
  }

// function sorting the displayed stocks alphabetically (if not already)
  sortAlphabetical = () => {
    if (!this.state.sortedAlphabetically) {
      this.setState(prevState => ({
        sortedAlphabetically: true,
        sortedNumerically: false,
        stocks: prevState.stocks.sort((a, b) => a.name.localeCompare(b.name))
      }))
    } // end if
  } // end function

// function sorting the displayed stocks in ascending price order
  sortNumerical = () => {
    if (!this.state.sortedNumerically) {
      this.setState(prevState => ({
        sortedAlphabetically: false,
        sortedNumerically: true,
        stocks: prevState.stocks.sort((a,b) => a.price - b.price)
      }))
    } // end if
  } // end function

// function filtering the displayed stocks by category
  updateFilter = category => {
    this.setState({filter: category})
  }

}
