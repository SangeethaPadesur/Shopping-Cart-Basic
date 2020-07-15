import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {setLoggedInUser  } from './actions/cartActions';

 const Navbar = (props)=>{
     const getOptions = ()=>{
         if(props.loggedInUser){
             return <span>{props.loggedInUser}</span>
         }
         else{
            return<><li><Link to="/signIn">Sign In</Link></li>
            <li><Link to="/signUp">Sign Up</Link></li> </>
         }
     }
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                        <li><Link to="/cart">{props.items.length}</Link></li>
                        {getOptions()}
                        {props.location.state ? <li><Link to="/signIn" onClick={()=>{
                            props.setLoggedInUser(undefined)
                        }}>Logout</Link></li> : null}
                    </ul>
                </div>
            </nav>
   
        
    )
}
const mapStateToProps = (state)=>{
    return{
        loggedInUser: state.loggedInUser,
        items: state.addedItems,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        setLoggedInUser: (name)=>{dispatch(setLoggedInUser(name))}
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar))