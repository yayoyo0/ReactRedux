import React from 'react';
import Header from './Components/Header'
import Users from './Components/Users'
import UserDetails from './Components/UserDetails'
import Footer from './Components/Footer'
import './App.css';

function App() {

  return (
    <div>
      <header>
        <Header/>
      </header>

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <Users/>
          </div>
          <div className="col-md-6">
            <UserDetails/>
          </div>
        </div>
      </div>
      <footer className="footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
