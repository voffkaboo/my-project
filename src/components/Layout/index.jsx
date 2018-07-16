import React, { Component } from 'react';

import Header from '../Header';

import './index.scss';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Test App',
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(newName) {
        this.setState({ name: newName });
    }

    render() {
        return (
            <div>
                <Header
                  name={this.state.name}
                  onChange={this.changeHandler}
                />
            </div>
        );
    }
}

export default Layout;
