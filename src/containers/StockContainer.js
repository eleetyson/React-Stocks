import React from 'react';
import Stock from '../components/Stock'

export default function StockContainer(props) {
  return (
    <div>
      <h2>Stocks</h2>
      { props.stocks.map(stock => <Stock stock={stock} />) }
    </div>
  )

}
