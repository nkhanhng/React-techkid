import React, { Component } from 'react';
import axios from "../axios"

class ProfilePanel extends Component {
  state = {
    username: null //not login yet
  }

  login = () => {
    axios.post("api/auth",{
      username: "admin",
      password: "123456"
    })
    .then(respone => {
      this.setState({
        username: respone.data.username,
        password: respone.data.id
      })
    })
    .catch(err => console.log(err));
  }
  
  componentWillMount(){
    axios.get("api/auth").then(respone =>{
      this.setState({
        username: respone.data.username,
        password: respone.data.id
      })
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="col-3 profile_panel">
        {this.renderContent()}
      </div>
    );
  }
  renderContent(){
    if(!this.state.username){
      return <button className="btn btn-primary" onClick={this.login()}>Login</button>;
    }else{
      return <div>{this.state.username}</div>
    }
  }
}

  

export default ProfilePanel;