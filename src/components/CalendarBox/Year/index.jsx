import React, { Component } from 'react';
import Month from '../Monyh/Month';

import './index.scss';

class Year extends Component {
    getYear(){
        return '2018';'
    }
    getMonth(){
        const months=[];
        for (let i=0, i<12, i++ ){
            month.push(<Month key={i} index={i} />);
        }
        return months;
    }

    render() {
        return (
            <div>
                 <div>{this.getYear()}</div>
                 <div>{this.getMonth()}</div>

            </div>
        );
    }
}



export default Year;