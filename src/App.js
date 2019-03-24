import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    name:"",
    phone:"",
    details:[],
    show:false
  }
}

changeName = (e) => {
  this.setState({
    name: e.target.value
  })
}

changePhone = (e) => {
  this.setState({
    phone: e.target.value
  })
}

addDetails = () => {
  let detail ={}
  detail["name"]=this.state.name
  detail["phone"]=this.state.phone
  let cloneDetails = this.state.details
  cloneDetails.push(detail)
  this.setState({
    details:cloneDetails,
    show:true
  })
}

showDetails = () => {
  return this.state.details.map((key,index)=>{
    return <div>
<p>{key.name}</p>
<p>{key.phone}</p>
    </div>
  })
}

goBack = () => {
  this.setState({
    show:false
  })
}

  render() {

    return (
<div>
{!this.state.show ?
<div>
<input type="text" placeholder="Name" value={this.state.name} onChange={this.changeName} />
<input type="text" placeholder="Phone" value={this.state.phone} onChange={this.changePhone} />
<button onClick={()=>this.addDetails()}>Add</button>
</div>
:
<div>
<button onClick={()=>this.goBack()}>Back</button>
<p>All Details are</p>
<p>{this.showDetails()}</p>
</div>
}

</div>
);
  }
}

export default App;
