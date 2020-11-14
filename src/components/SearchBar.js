import React from 'react'

const SearchBar = props => {
  return (
    <div className="search">

      <strong>Sort by: </strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={props.sortAlphabetical} />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={props.sortNumerical}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter: </strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  )
}


export default SearchBar
