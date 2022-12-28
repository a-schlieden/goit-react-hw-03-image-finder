import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import style from './Modal.module.css';

const modalRender = document.querySelector('#modal');

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscKeydown);
  }

  onEscKeydown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal('');
    }
  };

  onBackdropKlick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal('');
    }
  };

  render() {
    return createPortal(
      <div className={style.overlay} onClick={this.onBackdropKlick}>
        <div className={style.modal}>
          <img src={this.props.image} alt="img" />
          {this.props.children}
        </div>
      </div>,
      modalRender
    );
  }
}
