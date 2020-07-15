import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FieldValidations from './FieldValidation';
import { connect } from 'react-redux';
import {setLoggedInUser  } from './actions/cartActions'

 class Login extends Component{
     constructor(props){
         super(props)
         this.state = {
             email : undefined,
             password : undefined,
             isFormHasEmailPassword : false,
             errors : []
         }
     }
    onLoginClick =() =>{
        let errors = []
        if(this.state.email && this.state.password){
            this.props.setLoggedInUser(this.state.email)
            this.props.history.push('/','loggedIn')
        }
        if(!this.state.email){
           errors.push('email')
        }
        if(!this.state.password){
           errors.push('password')
        }
        this.setState({...this.state, errors : errors})
    }
    render(){
        return(
<>
  <div className="section"></div>
  <main>
    <center>
      {/* <img className="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" /> */}
      <div className="section"></div>

      <h5 className="indigo-text">Please, login into your account</h5>
      <div className="section"></div>

      <div className="container">
        <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding : '32px 48px 0px 48px', border :'1px solid #EEE;'}}>

          <div className="col s12">
            <div className='row'>
              <div className='col s12'>
              </div>
            </div>
            {this.state.isFormHasEmailPassword ? <div className='col s12'  style={{color: 'red'}}>Email & Password are required
              </div> : null}
            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='email' name='email' id='email' value={this.state.email} onChange={(e) => this.setState({...this.state, email : e.target.value})} onBlur={(e) =>{
                     if(e.target.value.lenght > 0 && !FieldValidations.IsValidEmail(e.target.value)){
                        this.setState({...this.state, errors : [...this.state.errors, 'invalidEmail']})
                    }
                }}/>
                <label for='email'>Enter your email</label>
                <span style={{color : 'red'}}>{this.state.errors.find(x => x === 'email') ? 'Required' : null}</span>
                <span style={{color : 'red'}}>{this.state.errors.find(x => x === 'invalidEmail') ? 'Invalid Email' : null}</span>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='password' name='password' id='password' value={this.state.password} onChange={(e) => this.setState({...this.state, password : e.target.value})} />
                <label for='password'>Enter your password</label>
                <span style={{color : 'red'}}>{this.state.errors.find(x => x === 'password') ? 'Required' : null}</span>
              </div>
              <label style={{float:"right"}} >
								<a className='blue-text'><b>Forgot Password?</b></a>
							</label>
            </div>

            <br />
            <center>
              <div className='row'>
                <span  className='col s12 btn btn-large waves-effect indigo' onClick={() =>this.onLoginClick()}>Login</span>
              </div>
            </center>
          </div>
        </div>
      </div>
    </center>
  </main>
  </>


        )
    }
 }
 const mapStateToProps = (state)=>{
    return{
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        setLoggedInUser: (name)=>{dispatch(setLoggedInUser(name))}
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))