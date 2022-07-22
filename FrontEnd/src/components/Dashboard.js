import React, { Component } from 'react'
import './Dashboard.css'
export default class Dashboard extends Component {
  render() {
    return (
      <div class="search">
    <i class="fa fa-search"></i>
        <input type="text" class="form-control" placeholder="

          Search Document"></input>
        <button class="btn btn-primary">Search</button>
      </div>
    )
  }
}