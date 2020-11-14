import React from 'react'

const SearchBar = props => {
  return (
    <div className="search">

      <strong>Sort by: </strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.alphabetical} onChange={props.sortAlphabetical} />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.numerical} onChange={props.sortNumerical}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter: </strong>
        <select  value={props.filter} onChange={(event) => props.updateFilter(event.target.value)}>
          <option value="All" default>All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  )
}


export default SearchBar
