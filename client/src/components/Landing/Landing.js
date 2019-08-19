import React from 'react';
import {Link} from 'react-router-dom'
import Fragment from '../../utils/Fragment';
import './Landiing.css'
import imgsrc from './todo1.png'
const styles ={
  marginLeft :"0.2em",
}
const Landing = () => {
  return (
    
    <Fragment>
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to TodoList App!<img src={imgsrc} style = {styles} alt="img"></img></h1>
          <p className="lead">Hi,Use this App to memorize your all Todos.</p>
          <p className="lead">Create the <Link to="/signin">Account</Link> for free or if you already have an account,Please<Link to='/login'>Login.</Link></p>
          <hr className="my-4" />
          <p></p>
        </div>
      </div>
    </Fragment>
  )
}
export default Landing