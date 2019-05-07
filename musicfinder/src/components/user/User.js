import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            id : '',
        }
    }
    componentDidMount(){
        let id = localStorage.getItem(`id`)
        const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`
        this.setState({id : id});
        try{
            axios
            .get(url)
            .then(res => {
                this.setState({name: res.data.name, email: res.data.email})
            })
        } catch(err){
            console.log(err);
        }
    }
    handleInput = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    };

    updateInfo = (data, id)=>{
        data = {name: this.state.name, email: this.state.email}
        id = localStorage.getItem(`id`)
        const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`
        try{
            axios
            .put(url, data)
            .then(res=>{
                this.setState({name: res.data.name, email: res.data.email})
                alert("Your Update Submitted Successfully");
                this.props.history.push('/');
            })
        }catch(err){
            console.log(err);
        }
    }
    deleteMyAccount = id =>{
        id = localStorage.getItem(`id`)
        const url = `https://fantabulous-music-finder.herokuapp.com/api/users/${id}`
        alert("Your Account Will be deleted permanantly")
        try{
            axios
                .delete(url)
                .then(res=>{
                    sessionStorage.removeItem('token');
                    localStorage.removeItem('token');
                    alert("Your Account deleted Successfully")
                    this.props.history.push('/');
                })
                

        }catch(err){
            console.log(err);
        }
    }

    render(){
        return (
            <UserBar>
                <h1>Name : {this.state.name}</h1>
                <h3> Email : {this.state.email} </h3>
                <form>
                    <input
                        className ='input'
                        onChange={this.handleInput}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <input
                        className ='input'
                        onChange={this.handleInput}
                        placeholder= "email"
                        value={this.state.email}
                        name="email"
                    />
                </form>
                
                <>
                <button onClick = {this.deleteMyAccount}> Delete My Account permanantly</button>
                </>
                <button onClick = {this.updateInfo}>Update</button>
                
            </UserBar>
        )
    }
}

export default User;


const UserBar = styled.div`
    width: 500px;
    border: 1px solid pink;
    margin : auto;
    border-radius: 5px;
    padding: 20px;
    .input{
        margin: 5px;
        height: 25px;
        width : 300px;
        border: none;
        border-radius: 5px;
        text-align:center;
    }
    button{
      background: black;
      border-radius: 5px;
      color : white;
      margin: 10px;
      height: 30px;
      
    }
    button:hover{
      background: black;
      cursor : pointer;
    }
`