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
                    localStorage.clear();
                    sessionStorage.clear()
                    alert("Your Account deleted Successfully")
                    this.props.history.push('/');
                })
                

        }catch(err){
            console.log(err);
        }
    }

    render(){
        return (
        <Wrapper>
            <UserBar>
                <h2>Name : {this.state.name}</h2>
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
                
                <div className= "btn">
                    <button onClick = {this.deleteMyAccount}> Delete My Account permanantly</button>
                    <button className= "updateBtn" onClick = {this.updateInfo}>Update</button>
                </div>  
                <>
                </>
            </UserBar>
        </Wrapper>
        )
    }
}

export default User;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const UserBar = styled.div`
    width: 400px;
    border: 1px solid pink;
    margin : auto;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 300px;
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
        text-align:center;
        @media(max-width: 479px){
            width: 250px;
        }

    }
    button{
      background: grey;
      border-radius: 5px;
      color : white;
      margin: 10px;
      height: 30px;
      border: none;       
    }
    button:hover{
        box-shadow: 0 5px pink;
        cursor : pointer;
        transition: all 0.4s
    }
    .btn{
        @media(max-width: 479px){
           display:flex;
           flex-direction: column-reverse;
        }
    }
`