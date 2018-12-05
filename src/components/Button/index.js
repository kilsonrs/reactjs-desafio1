import React from 'react';
import PropTypes from 'prop-types';

// import Styles from "./styles.css";

const Button = props => <button onClick={props.onClick}>{props.children}</button>;

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
