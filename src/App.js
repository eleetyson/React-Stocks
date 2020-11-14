import React, { Component } from 'react'
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

export default class App extends Component {

  render() {
    return (
      <div>
        <Header/>
        <MainContainer />
      </div>
    )
  }

}
