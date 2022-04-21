import React, { Component } from 'react'
import Profile from './components/Profile'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  
  
  render() {
    return (
      <div class="p-3 mb-2 bg-secondary text-white"><Profile/></div>
    )
  }
}
