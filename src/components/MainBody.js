import React, {Component } from 'react';
import OrderComponent from './orderComponent';
import AccountInfo from './AccountInfo';
import Stock from './Stock';

class MainBody extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return(
            <div className="row">
               <div className="col-3 border">
                   <AccountInfo />
               </div>
               <div className="col-6 border">
               <Stock />
               {/* <OrderComponent /> */}
               </div>
               <div className="col-3 border">
                   col-3
               </div>
            </div>
        );
    }
}

export default MainBody;