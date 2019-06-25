import React, { Component } from 'react';

class UserDetails extends Component {
    render() { 
        return (  
        <div className="card">
            <div className="card-header">
                User Details
            </div>
            <div className="card-body">
                <p className="card-text">{this.props.user}</p>
            </div>
        </div>
      );
    }
}
 
export default UserDetails;