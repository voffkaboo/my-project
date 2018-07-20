import React, { Component } from 'react';
import {MONTHNAMES} from '../constants/Names';

import './index.scss';

class Month extends Component {

    render() {

        return (
            <div className="Month">
                <div>{MONTHNAMES[this.props.index]}</div>
            </div>
        );
    }
}



export default Month;