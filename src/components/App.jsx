import React, { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  static propTypes = {};

  state = {
    pageNumber: 1,
    formInput: '',
    largeImg: '',
    showModal: false,
    images: [],
    status: 'idleNothing',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.formInput !== this.state.formInput ||
      prevState.pageNumber !== this.state.pageNumber
    ) {
      this.setState({ status: 'pendingLoad' });

      fetch(
        `https://pixabay.com/api/?q=${this.state.formInput}&page=${this.state.pageNumber}&key=31200881-a0442d807a70df79b0436fdb6&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(responce => {
          if (responce.ok) {
            return responce.json();
          }
          return Promise.reject(
            new Error(`no result with string ${this.state.formInput}`)
          );
        })
        .then(imagesFromBack => {
          if (imagesFromBack.hits.length > 0) {
            return this.setState({
              // images: imagesFromBack.hits,
              images: [...prevState.images, ...imagesFromBack.hits],
              status: 'resolved',
            });
          }
          return this.setState({ status: 'noImg' });
        })
        .catch(errorFetch =>
          this.setState({ error: errorFetch, status: 'rejecktedError' })
        );
    }
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  onFormSubmit = formData => {
    this.setState({ formInput: formData, pageNumber: 1, images: [] });
  };

  onLoadmoreBtnClick = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  handleModal = bigImg => {
    this.setState({ largeImg: bigImg });
  };

  render() {
    const { status, error, images, largeImg } = this.state;
    // const totalFeedback = this.totalFeedback();

    return (
      <div
        style={{
          margin: '100px auto',
          padding: '15px',
          width: '100%',
          fontSize: '20px',
          textAlign: 'center',
          background: '#d3d3d3',
        }}
      >
        <Searchbar onSubmitForm={this.onFormSubmit} />

        {images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            onImgClick={this.handleModal}
          />
        )}

        {status === 'resolved' && (
          <Button onBtnClick={this.onLoadmoreBtnClick} />
        )}

        {status === 'noImg' && (
          <h2> Sorry no img with name {this.state.formInput} !!!!!</h2>
        )}

        {status === 'pendingLoad' && <Loader />}

        {status === 'rejecktedError' && <h2>{error.message}</h2>}

        {/* <button type="button" onClick={this.toggleModal}>
          Show modal
        </button> */}

        {largeImg && (
          <Modal closeModal={this.handleModal} image={largeImg}></Modal>
        )}
      </div>
    );
  }
}
