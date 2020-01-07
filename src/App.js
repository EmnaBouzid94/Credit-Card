

import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {num:"xxxx xxxx xxxx xxxx",date:"xx/xx",name:""}
          
        
  }
  codeName=(event)=>{
    if (event.target.value.match(/^[a-z-A-Z]+$/g))
    {this.setState({
      name:event.target.value.toUpperCase()
    })}
    else if (event.target.value==="")
    {this.setState({
      name:""
    
    })}
  
  }
  codeNum=(event)=>{
    if (event.target.value.match(/^[0-9]+$/g))
    {this.setState({
      num:event.target.value.slice(0,4).padEnd(4,"x")+" "+event.target.value.slice(4,8).padEnd(4,"x")+" "+event.target.value.slice(8,12).padEnd(4,"x")+" "+event.target.value.slice(12,16).padEnd(4,"x")
    })}
    else if (event.target.value==="")
    {this.setState({
      num:"xxxx xxxx xxxx xxxx"
    
    })}
  }
  codeDate=(event)=>{
    if (event.target.value.match(/^[0-9]+$/g))
    {this.setState({
      date:event.target.value.slice(0,2).padEnd(2,"x")+"/"+event.target.value.slice(2,4).padEnd(2,"x")
    })}
    else if (event.target.value==="")
    {this.setState({

      date:"xx/xx"
    
    })}
  }

render(){
  console.log(this.state.name)
  return (<div className="App">
     
            <div className="card">
    <p className="num">{this.state.num}</p>
           <p className="date">{this.state.date}</p>
           <p className="name">{this.state.name}</p>

        </div>
        <form className="form">
                Card Number:
            <input type="text"onChange={this.codeNum} maxLength="16"/>
            Card Holder:
            <input type="text"onChange={this.codeName}/>
            Valid Date:
            <input type="text"onChange={this.codeDate}/>
            </form>
  </div>)
}
}

export default App;
