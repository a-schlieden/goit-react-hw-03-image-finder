import React, { Component } from "react"
import { createPortal } from "react-dom"
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Statistics } from 'components/Statistics/Statistics';
// import { Notification } from 'components/Notification/Notification';
// import { Section } from 'components/Section/Section';
import style from './Modal.module.css';

const modalRender = document.querySelector('#modal')

export class Modal extends Component {
    static propTypes = {}

    componentDidMount() {
        window.addEventListener('keydown', this.onEscKeydown);
    }
    componentWillUnmount() {
        console.log('UNMOUNT')
        window.removeEventListener('keydown', this.onEscKeydown)
    }

    onEscKeydown = event => {
        if (event.code === 'Escape') {
            console.log('Eckape')
            this.props.closeModal();

        }
    }

    render() {

        // const { good, neutral, bad } = this.state
        // const totalFeedback = this.totalFeedback();
        // const positiveFeedback = this.positivePercent();

        return createPortal(
            <div className={style.overlay}>
                <div className={style.modal}>
                    {/* <img src="" alt="" /> */}
                    {this.props.children}
                </div>
            </div>,
            modalRender,
        )
    }
}

