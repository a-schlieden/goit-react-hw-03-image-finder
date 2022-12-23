import React, { Component } from "react"
// import { Vortex } from 'react-loader-spinner'
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  static propTypes = {}

  state = {
    page: 2,
    querry: "",
    formInput: "",
    largeImgSrc: "",
    showModal: false,
    images: null,
    // loading: false
  }

  // componentDidMount() {
  //   this.setState({ loading: true })
  //   fetch('https://pixabay.com/api/?q=cat&page=1&key=31200881-a0442d807a70df79b0436fdb6&image_type=photo&orientation=horizontal&per_page=12')
  //     .then(responce => responce.json())
  //     .then(imagesFromBack =>
  //       // console.log(imagesFromBack))
  //       this.setState({ images: imagesFromBack }))
  //     .finally(() => this.setState({ loading: false }))
  // }

  // FÜR BUTTON LOAD MORE
  // componentDidUpdate(prevProp, prevState) {
  //   if (prevState.page !== this.state.page || prevState.querry !== this.state.querry) {
  //     console.log('FEtch hire ')
  //   }

  // }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  onFormSubmit = (formData) => {
    this.setState({ formInput: formData, page: 1 })
  }

  onLoadmoreBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
    console.log(this.state.page)
  }
  render() {

    const { showModal, images } = this.state
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
        <ImageGallery searchWord={this.state.formInput} />
        <button type="button" onClick={this.toggleModal}>Show modal</button>
        {showModal && <Modal closeModal={this.toggleModal} image={'test'}></Modal>}
        {/* {loading && <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow']}
        />} */}
        {images && <p>IMAGE gallery {images.total}</p>}

        <button onClick={this.onLoadmoreBtnClick}>Load more</button>
      </div>
    )
  }
}
