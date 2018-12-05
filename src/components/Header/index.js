import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Header = props => <header className={props.className}>{props.children}</header>;

Header.defaultProps = {
  children: 'RocketSeat',
  className: 'main-header',
};

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
