import React from 'react';
import Stock from '../components/Stock'

const StockContainer = props => (
  <div>
    <h2>Stocks</h2>
    { props.stocks.map(stock => <Stock stock={stock} stockAction={props.addStock} />) }
  </div>

)

export default StockContainer
