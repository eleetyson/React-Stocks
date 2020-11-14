import React from 'react';
import Stock from '../components/Stock'

const PortfolioContainer = props => (
  <div>
    <h2>My Portfolio</h2>
    { props.stocks.map(stock => <Stock stock={stock} stockAction={props.removeStock} />) }
  </div>

)

export default PortfolioContainer
