import React, { Component } from 'react';
import style from './Button.module.css';

export class Button extends Component {
  state = {};

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
