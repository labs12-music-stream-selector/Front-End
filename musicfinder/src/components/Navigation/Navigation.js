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
          <Link className="dropbtn"  to='/home'>Home</Link>
            <div className="dropdown">
                <button className="dropbtn">{this.state.name}</button>
                <div className="dropdown-content">
                  <Link to = '/user'> Update Profile </Link>
                  <Link to="./donation"> Support Us </Link>
                  <Button  className ="signoutBtn" onClick= {this.signMeOut}> Sign Out </Button>
                </div>
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
    top:0;
    position: fixed;
    display: flex;
    flex-wrap: warp;
    background: #3232;
    width: 100%;
    justify-content: space-between;
    .dropbtn {
      text-decoration: none;
      background-color: #f1f4;
      color: white;
      padding: 14px;
      font-size: 14px;
      border: none;
      cursor: pointer;
      @media(max-width: 479px){
        font-size: 12px;
      }
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      right: 0;
      background-color: #f9f;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #f1d;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .dropbtn:hover {
      background-color: #f1f2;
    }
  }
  .dropdown-content .signoutBtn{
    border-radius: 5px;
    height: 25px;
  }
`
const Button= styled.div`
  background: #f1f2;
  border-radius: 5px;
  margin: 10px;
  height: 30px;
  border: none;
  :hover{
    background: purple;
    color: white;
  }
`
