import React, { Component } from "react"
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Statistics } from 'components/Statistics/Statistics';
// import { Notification } from 'components/Notification/Notification';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  static propTypes = {}

  state = {
    keyWord: "",
    largeImgSrc: "",
    showModal: false
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  // onLeaveFeedback = (btn) => {
  //   this.setState((prevState) => ({
  //     [btn]: prevState[btn] + 1,
  //   }));
  // }

  // totalFeedback = () => {
  //   const { good, neutral, bad } = this.state
  //   let total = good + neutral + bad
  //   return total
  // }

  // positivePercent = () => {
  //   if (this.totalFeedback() === 0) {
  //     return 0
  //   }
  //   else {
  //     let result = 0
  //     result = Math.round((this.state.good / this.totalFeedback()) * 100)
  //     return result
  //   }
  // }

  render() {

    const { showModal } = this.state
    // const totalFeedback = this.totalFeedback();
    // const positiveFeedback = this.positivePercent();

    return (
      <div style={{
        margin: "100px auto",
        padding: '15px',
        width: "100%",
        fontSize: '20px',
        textAlign: 'center',
        background: '#d3d3d3'
      }}>

        {/* <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {good || neutral || bad > 0
            ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
            : <Notification message='There is no feedback' />
          }
        </Section> */}
        <h3>IMAGE FINDER </h3>
        <button type="button" onClick={this.toggleModal}>Show modal</button>
        {showModal && <Modal closeModal={this.toggleModal}>
          <h3>MODAL IS WORK</h3>
          <button type="button" onClick={this.toggleModal}>Hide modal</button>
        </Modal>}

      </div>
    )
  }
}
