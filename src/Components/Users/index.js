import React, { Component } from 'react';

class Users extends Component {
    constructor(){
        super()
        this.state = {users:[]}
        this.userDetails= this.userDetails.bind(this)
    }
    
    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(
            (response)=>{
                return response.json()
            }
        ).then((data)=>{
            this.setState({users:data})
            }
        )
    }

    userDetails(user){
        console.log(user)
    }

    render() {
        return (
            this.state.users.map((user,index) => {
                return (
                <div className="row">
                    <div className="col-md-8">
                        <p key={index}>{user.name}</p>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-info" onClick={()=>this.userDetails(user)}>Details</button>
                    </div>
                </div>
                )
            })
        )
    }
}
 
export default Users;