import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as action from '../../store/actions/index'

import Fragment from '../../utils/Fragment'
import NavBtn from './NavbarInput/NavbarInput'
import './Navbar.css'

class Navbar extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser()
  }

  render(){

    const needAuthentication = 
      <Fragment>
        <button class="navbar-toggler"  data-toggle="collapse" data-target="#dt"aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="dt">
          <li className="nav-item">
            <Link 
              className="nav-link" 
              to='/signin'>
              <i className="fas fa-user-edit fa-sm"></i> SignUp</Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to='/login'>
              <i className="fas fa-sign-in-alt fa-sm"></i> Login</Link>
          </li>
        </div>
      </Fragment>
    
    const guestAuthenticated = 
      <Fragment>
      <button class="navbar-toggler"  data-toggle="collapse" data-target="#dt1" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <NavBtn />
      <div class="collapse navbar-collapse" id="dt1">
      <ul class="navbar-nav">
          <li className="nav-item">
              <Link
                className="nav-link"
                to='/dashboard'>
                <i className="far fa-list-alt fa-sm"></i> Dashboard</Link>
            </li>
          <li className="nav-item">
            <a 
              href="/"
              onClick={(e)=>this.onLogout(e)}
              className="nav-link">
            <i className="fas fa-user fa-sm"></i> Logout</a>
          </li>
        </ul>
      </div>
      </Fragment>

    


    return (
      <Fragment>
      <div className="NavHeader">
          <div className="container">
            <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light NavBk  fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link 
                    className="navbar-brand" 
                    to='#'><i className="fas fa-tasks"></i>    My TodoList App</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                  {this.props.isAuthenticated? guestAuthenticated : needAuthentication}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </Fragment>
  )}
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => {dispatch(action.logoutUser())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)