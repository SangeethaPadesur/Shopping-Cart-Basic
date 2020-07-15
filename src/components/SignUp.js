import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FieldValidations from './FieldValidation';

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            name :undefined,
            email : undefined,
            age : undefined,
            gender : undefined,
            address : undefined,
            newPassWord : undefined,
            confirmPassWord : false,
            errors : []
        }
    }
    validateRequiredFields = () =>{
        let errors= []
        if(!this.state.name){
            errors.push('name')
        }
        if(!this.state.email){
            errors.push('email')
        }
        if(!this.state.newPassWord){
            errors.push('newPassword')
        }
        if(!this.state.confirmPassWord){
            errors.push('confirmPassword')
        }
        if(this.state.newPassWord && this.state.confirmPassWord && this.state.newPassWord !== this.state.confirmPassWord){
            errors.push('inavlidPassword')
        }
        return errors
    }
    onSignUpClick = () =>{
        let errors = this.validateRequiredFields()
        this.setState({...this.state, errors : errors})
        if(errors.length === 0){
            this.props.history.push('/signIn')
        }
    }
    
    render(){
        return(
            <>
  <div className="section"></div>
  <main>
    <center>
      {/* <img className="responsive-img" style="width: 250px;" src="https://i.imgur.com/ax0NCsK.gif" /> */}
      <div className="section"></div>

      <h5 className="indigo-text">Please Provide below details to create account</h5>
      <div className="section"></div>

      <div className="container">
        <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding : '32px 48px 0px 48px', border :'1px solid #EEE;', width: '500px'}}>

          <div className="col s12">
            <div className='row'>
              <div className='col s12'>
              </div>
            </div>
              <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='text' name='name' id='name' value={this.state.name} onChange={(e) => this.setState({...this.state, name : e.target.value})}/>
                <label for='name'>Name<span style={{color : 'red'}}>*</span></label>
                <span style={{color : 'red'}}>{this.state.errors.find(x => x === 'name') ? 'Required' : null}</span>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='email' name='email' id='email' value={this.state.email} onChange={(e) => this.setState({...this.state, email : e.target.value})} onBlur={(e) =>{
                    if(e.target.value.lenght > 0 && !FieldValidations.IsValidEmail(e.target.value)){
                        this.setState({...this.state, errors : [...this.state.errors, 'invalidEmail']})
                    }
                }}/>
                <label for='email'>Email<span style={{color : 'red'}}>*</span></label>
                <span style={{color : 'red'}}>{this.state.errors.find(x => x === 'email') ? 'Required' : null}</span>
                <span style={{color : 'red'}}>{this.state.errors.find(x => x === 'invalidEmail') ? 'Invalid Email' : null}</span>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='password' name='password' id='password' value={this.state.newPassWord} onChange={(e) => this.setState({...this.state, newPassWord : e.target.value})} />
                <label for='password'>New Password<span style={{color : 'red'}}>*</span></label>
                <span style={{color : 'red'}}>{this.state.errors.find(x => x === 'newPassword') ? 'Required' : null}</span>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='password' name='password' id='password' value={this.state.confirmPassWord} onChange={(e) => this.setState({...this.state, confirmPassWord : e.target.value})} />
                <label for='password'>Confirm Password<span style={{color : 'red'}}>*</span></label>
                <span style={{color : 'red'}}>{this.state.errors.find(x => x === 'confirmPassword') ? 'Required' : null}</span>
                <span style={{color : 'red'}}>{this.state.errors.find(x => x === 'inavlidPassword') ? 'Incorrect Password' : null}</span>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' type='text' name='password' id='password' value={this.state.address} onChange={(e) => this.setState({...this.state, confirmPassWord : e.target.value})} />
                <label for='password'>Delivery/Billing Address</label>
              </div>
            </div>
            <div className='row'>
              <div className='input-field col s12'>
                <span>
                  <input name="gender" type="radio"  checked={this.state.gender === 'Male'}/>
                  <span onClick={(e)=> this.setState({...this.state, gender : 'Male'})}>Male</span>
                </span>
                <span>
                  <input name="gender" type="radio" checked={this.state.gender === 'Female'}/>
                  <span onClick={(e) => this.setState({...this.state, gender : 'Female'})}>Female</span>
                </span>
                <label for='gender'>Gender</label>
              </div>
            </div>
            <br />
            <center>
              <div className='row'>
                <span  className='col s12 btn btn-large waves-effect indigo' onClick={() =>this.onSignUpClick()}>Sign Up</span>
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

export default withRouter(SignUp)