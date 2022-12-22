import React, { Component } from "react"
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
// import { Statistics } from 'components/Statistics/Statistics';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  static propTypes = {}

  state = {
    formInput: "",
    largeImgSrc: "",
    showModal: false,
    images: null,
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://pixabay.com/api/?q=cat&page=1&key=31200881-a0442d807a70df79b0436fdb6&image_type=photo&orientation=horizontal&per_page=12')
      .then(responce => responce.json())
      .then(imagesFromBack =>
        // console.log(imagesFromBack))
        this.setState({ images: imagesFromBack }))
      .finally(() => this.setState({ loading: false }))
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  onFormSubmit = (formData) => {
    this.setState({ formInput: formData })
  }

  render() {

    const { showModal, images, loading } = this.state
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
        <Searchbar onSubmitForm={this.onFormSubmit} />
        <h3>IMAGE FINDER </h3>
        <button type="button" onClick={this.toggleModal}>Show modal</button>
        {showModal && <Modal closeModal={this.toggleModal}>
          <h3>MODAL IS WORK</h3>
          <button type="button" onClick={this.toggleModal}>Hide modal</button>
        </Modal>}
        {loading && <h3>Spiner load ... </h3>}
        {images && <p>IMAGE gallery {images.total}</p>}

      </div>
    )
  }
}
