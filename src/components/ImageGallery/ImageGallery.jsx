
import React, { Component } from "react"

export class ImageGallery extends Component {
    static propTypes = {}

    state = {
        images: null
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchWord !== this.props.searchWord) {
            fetch(`https://pixabay.com/api/?q=${this.props.searchWord}&page=1&key=31200881-a0442d807a70df79b0436fdb6&image_type=photo&orientation=horizontal&per_page=12`)
                .then(responce => responce.json())
                .then(imagesFromBack => this.setState({ images: imagesFromBack }))
            //         .finally(() => this.setState({ loading: false }))
        }
    }
    render() {

        // const { showModal, images, loading } = this.state
        // const totalFeedback = this.totalFeedback();
        // const positiveFeedback = this.positivePercent();

        return (
            <div>
                {!this.state.images && <h2>Enter Image Name</h2>}
                {this.state.images && <h2>Searc:{this.props.searchWord}</h2>}
            </div>
        )
    }
}
