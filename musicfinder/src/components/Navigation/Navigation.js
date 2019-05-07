import React, { Component } from 'react'
import YoutubePlayer from "../YoutubePlayer/YoutubePlayer.js";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy.js";
import TermsOfService from "../TermsOfService/TermsOfService.js";
import Browser from '../Browser/Browser.js';
import User from '../user/User.js'
import Patreon from '../Patreon/Patreon.js'


import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

export default class Navigation extends Component {
  constructor() {
    super();  
    this.state = {
      showMenu: false,
      name: '',
    };
  }
  componentDidMount(){
    let id = localStorage.getItem(`id`)
    const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`
    this.setState({id : id});
    try{
        axios
        .get(url)
        .then(res => {
            this.setState({name: res.data.name})
        })
    } catch(err){
        console.log(err);
    }
}

signMeOut = () =>{
    if(sessionStorage.getItem('token')){
      sessionStorage.removeItem('token');
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      alert("You successfully Signed Out")
      this.props.history.push("/");
    }
}
showMenu = (event) => {
  event.preventDefault();
  this.setState({ showMenu: true }, () => {
    document.addEventListener('click', this.closeMenu);
  });
}

closeMenu=(event)=> {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });  
}
  render() {
    return (
      <Router>
        <NavDiv className="">
          <nav className="navBar" >
            <Link to='/home'>Home</Link>
            
            <div>
            <Link to="./donation"> Support Us </Link>
              <button className ="userinfo" onClick={this.showMenu} > {this.state.name} </button>
                {this.state.showMenu ? 
                (<div className ='menu' >
                  <button className ="userbtn" ><Link to = '/user'> Update Profile </Link> </button>
                  <button  className ="userbtn" onClick= {this.signMeOut}> Sign Out </button>
                </div> ) : (null) }
            </div>

          </nav>
          <Route path="/player" component={YoutubePlayer} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/termsofservice" component={TermsOfService} />
          <Route path="/user" component={User} />
          <Route path="/donation" component={Patreon} />
          <Route exact path="/home" component={Browser} />
        </NavDiv>
      </Router>
    )
  }
}

const NavDiv = styled.div` 
  .navBar{
    border-bottom: 1px solid pink;
  }
  .userinfo{
    margin-top: 18px;
    padding: 3px;
    margin-right: 15px;
    background: black;
    font-size: 16px;
    border: none;
    color: white;
    cursor: pointer;
  }
  .userbtn{
    border-radius: 5px;
    background: black;
    color: red;
    font-size: 12px;
    margin : 5px;
    color: red;
    cursor: pointer;
    @media(max-width: 479px){
    }
  }
  .userbtn:hover{
    background: grey;
    color: black;
  }
`