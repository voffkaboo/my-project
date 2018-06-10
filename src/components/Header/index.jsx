import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class Header extends Component {
    render() {
        return (
            <div>{this.props.name}</div>
        );
    }
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Header;
