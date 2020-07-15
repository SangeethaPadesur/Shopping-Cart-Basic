import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

 class OrderDetail extends Component{
    render(){
        return(
<>
  <div className="section"></div>
  <main>
    <center>
      <div className="section"></div>
      <div className="section"></div>

      <div className="container">
        <div className="z-depth-1 grey lighten-4 row" style={{display: 'inline-block', padding : '32px 48px 0px 48px', border :'1px solid #EEE;'}}>

          <div className="col s12">
            <div className='row'>
              <div className='col s12'>
              </div>
            </div>
            <div className='row'>
              Order & Payment page goes here 
            </div>
            <br />
          </div>
        </div>
      </div>
    </center>
  </main>
  </>


        )
    }
 }
export default withRouter(OrderDetail)