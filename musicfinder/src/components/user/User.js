import React from "react";
import axios from "axios";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: ""
    };
  }
  componentDidMount() {
    let id = localStorage.getItem(`id`);
    const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`;
    // const url = `http://localhost:5000/api/users/${id}`;
    this.setState({ id: id });
    try {
      console.log("User Info Res");
      axios.get(url, { headers: {
        Authorization: `${localStorage.getItem("token")}`
      }}).then(res => {
        console.log("User Info Res", res);
        this.setState({ name: res.data.name, email: res.data.email });
      });
    } catch (err) {
      console.log(err);
    }
  }
  handleInput = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  updateInfo = (data, id) => {
    data = { name: this.state.name, email: this.state.email };
    id = localStorage.getItem(`id`);
    const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`;
    // const url = `http://localhost:5000/api/users/${id}`;
    try {
      axios.put(url, data, {headers: {Authorization: `${localStorage.getItem("token")}`}})
      .then(res => {
        this.setState({ name: res.data.name, email: res.data.email });
        alert("Your Update Submitted Successfully");
        this.props.history.push("/home");
        // window.location.reload(true);
      });
    } catch (err) {
      console.log(err);
    }
  };
  deleteMyAccount = id => {
    id = localStorage.getItem(`id`);
    // const url = `http://localhost:5000/api/users/${id}`;
    const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`;
    let answer = window.confirm("Your Account Will be deleted permanantly");
    if(answer ){
    
        try {
          axios.delete(url, {headers: {Authorization: `${localStorage.getItem("token")}`}}).then(res => {
            localStorage.clear();
            sessionStorage.clear();
            alert("Your Account deleted Successfully");
            this.props.history.push("/");
            window.location.reload(true);
          });
        } catch (err) {
          console.log(err);
        }
    }
  };
  render() {
    return (
      <Wrapper>
        <UserBar>
          <div className= "userInfoBar">
              <h3>{this.state.name}</h3>
              <h4>{this.state.email} </h4>
          </div>
          <form>
            <div className="input-row">
              <h5 for="name">Update Name:</h5>
              <input
                className="input"
                onChange={this.handleInput}
                placeholder="name"
                value={this.state.name}
                name="name"
              />
            </div>
            <div className="input-row">
              <h5 for="email">Update Email:</h5>
              <input
                className="input"
                onChange={this.handleInput}
                placeholder="email"
                value={this.state.email}
                name="email"
              />
            </div>
          </form>

          <div className="btn ">
            <button className="deleteBtn " onClick={this.deleteMyAccount}>
              {" "}
              Delete My Account
            </button>
            <button className="updateBtn" onClick={this.updateInfo}>
              Update
            </button>
          </div>
          <></>
        </UserBar>
      </Wrapper>
    );
  }
}

export default withRouter(User);
const Wrapper = styled.div`
  box-sizing: border-box;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #272727;
`;
const UserBar = styled.div`
  
  box-shadow: 0px 4px 4px black;
  text-align: center;
  width: 400px;
  border-radius: 5px;
  background-color: white;
  @media (max-width: 479px) {
    width: 300px;
  }
  h5{
    margin:0; padding:0;
  }
  h2,
  h3,
  h4 {
    color: #272727;
    @media (max-width: 479px) {
      font-size: 14px;
    }
  }
  .input-row {
    margin-bottom: 10px;
  }
  .input {
    margin: 5px;
    height: 25px;
    width: 300px;
    border-radius: 5px;
    border: none;
    text-align: center;
    background-color: #efefef;
    @media (max-width: 479px) {
      width: 250px;
    }
  }
  button {
    background-color: green;
    border-radius: 5px;
    color: white;
    margin: 10px;
    padding: 10px 15px;
    border: none;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  }
  button:hover {
    box-shadow: 0 2px 2px #272727;
    transform: translateY(-1px);
    cursor: pointer;
    transition: all 0.1s;
  }
  .deleteBtn{
    background: tomato;
  }
  .btn {
    @media (max-width: 479px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;
