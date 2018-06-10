import React, { Component } from 'react';

import Header from '../Header';

import './index.scss';

class Layout extends Component {
    render() {
        const headerName = 'Test App';
        return (
            <div>
                <Header name={headerName} />
            </div>
        );
    }
}

export default Layout;
