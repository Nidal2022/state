import React, { Component } from 'react'
import logo from "../imageInSrc.jpg"
import Button from 'react-bootstrap/Button';

export default class Profile extends Component {
    state={
        fullName:"Mhamdi Nidhal",
        bio:"Bla Bla Bla !!!",
        imgSrc:logo,
        profession:"Nothing",
        time:0,
        toggle:true,
        btn:"Hide profile"
     }
     componentDidMount(){
       setInterval(() => {
         this.setState({time:this.state.time+1})
       }, 1000);
       
     }
     test(){
      this.setState({ toggle:!this.state.toggle,time:0,btn:"Show profile"})
      console.log(this.state.toggle)
     }
  render() {
    return (
      <div>
      {this.state.toggle ?
      (<div>   <img src={this.state.imgSrc} alt=""className='rounded mx-auto d-block' />
      <h1>{this.state.fullName}</h1>
      <h2>{this.state.bio}</h2>
      
      <h4>{this.state.profession}</h4></div>):<h3>Time:{this.state.time}</h3>}
    
           <Button variant="primary" onClick={()=>this.test()}>{this.state.btn}</Button>{' '}
      
      </div>
    )
  }
}
