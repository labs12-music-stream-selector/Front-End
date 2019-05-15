import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            id: '',
        }
    }
    componentDidMount() {
        let id = localStorage.getItem(`id`)
        const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`
        this.setState({ id: id });
        try {
            axios
                .get(url)
                .then(res => {
                    this.setState({ name: res.data.name, email: res.data.email })
                })
        } catch (err) {
            console.log(err);
        }
    }
    handleInput = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    };

    updateInfo = (data, id) => {
        data = { name: this.state.name, email: this.state.email }
        id = localStorage.getItem(`id`)
        const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`
        try {
            axios
                .put(url, data)
                .then(res => {
                    this.setState({ name: res.data.name, email: res.data.email })
                    alert("Your Update Submitted Successfully");
                    this.props.history.push('/home');
                    window.location.reload(true);
                })
        } catch (err) {
            console.log(err);
        }
    }
    deleteMyAccount = id => {
        id = localStorage.getItem(`id`)
        const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`
        alert("Your Account Will be deleted permanantly")
        try {
            axios
                .delete(url)
                .then(res => {
                    localStorage.clear();
                    sessionStorage.clear()
                    alert("Your Account deleted Successfully")
                    this.props.history.push('/');
                    window.location.reload(true);
                })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <Wrapper>
                <UserBar>
                    <h2>Name : {this.state.name}</h2>
                    <h3> Email : {this.state.email} </h3>
                    <form>
                        <input
                            className='input'
                            onChange={this.handleInput}
                            placeholder="name"
                            value={this.state.name}
                            name="name"
                        />
                        <input
                            className='input'
                            onChange={this.handleInput}
                            placeholder="email"
                            value={this.state.email}
                            name="email"
                        />
                    </form>

                    <div className="btn">
                        <button onClick={this.deleteMyAccount}> Delete My Account permanantly</button>
                        <button className="updateBtn" onClick={this.updateInfo}>Update</button>
                    </div>
                    <>
                    </>
                </UserBar>
            </Wrapper>
        )
    }
}

export default withRouter(User);
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const UserBar = styled.div`
    text-align : center;
    width: 400px;
    margin : 0 auto;
    border-radius: 5px;
    padding-top: 60px;
    margin-bottom: 320px;
    @media(max-width: 479px){
        width : 300px;
    }
    h2, h3{  
        color: white;
        @media(max-width: 479px){
            font-size: 14px;
        }
    }
    .input{
        margin: 5px;
        height: 25px;
        width : 300px;
        border-radius: 5px;
        border: none;
        text-align:center;
        @media(max-width: 479px){
            width: 250px;
        }
    }
    button{
      background-color: #009FB7;
      border-radius: 5px;
      color : white;
      margin: 10px;
      height: 30px;
      border: none;       
    }
    button:hover{
        box-shadow: 0 2px 4px #272727;
        transform: scaleX(1.025) scaleY(1.025);
        cursor : pointer;
        transition: all 0.2s;
    }
    .btn{
        @media(max-width: 479px){
           display:flex;
           flex-direction: column-reverse;
        }
    }
`