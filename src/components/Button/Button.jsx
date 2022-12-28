import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

export class Button extends Component {
  state = {};

  static propTypes = {
    onBtnClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <button
        type="button"
        onClick={this.props.onBtnClick}
        className={style.Button}
      >
        Load More
      </button>
    );
  }
}
