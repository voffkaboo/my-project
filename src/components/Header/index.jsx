import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        const newName = prompt('Please enter new name', '');
        this.props.onChange(newName);
    }

    render() {
        return (
            <div onClick={this.clickHandler}>{this.props.name}</div>
        );
    }
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Header;
