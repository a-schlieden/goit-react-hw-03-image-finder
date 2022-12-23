import React, { Component } from "react"
import { Vortex } from 'react-loader-spinner'





export class ImageGallery extends Component {
    static propTypes = {}

    state = {
        images: [],
        // loading: false,
        error: null,
        status: "idleNothing"
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.searchWord !== this.props.searchWord) {
            this.setState({ status: "pendingLoad" })

            fetch(`https://pixabay.com/api/?q=${this.props.searchWord}&page=1&key=31200881-a0442d807a70df79b0436fdb6&image_type=photo&orientation=horizontal&per_page=12`)
                .then(responce => {
                    if (responce.ok) {
                        return responce.json()
                    }
                    return Promise.reject(new Error(`no result with string ${this.props.searchWord}`))
                })
                .then(imagesFromBack => {
                    console.log("images after fetch ", imagesFromBack.hits.length)
                    if (imagesFromBack.hits.length > 0) {
                        return this.setState({ images: imagesFromBack.hits, status: "resolved" })
                    }
                    return this.setState({ status: "noImg" })
                }
                )
                .catch(errorFetch => this.setState({ error: errorFetch, status: "rejecktedError" }))

        }

    }




    render() {

        const { images, error, status } = this.state
        // const totalFeedback = this.totalFeedback()

        if (status === "idleNothing") {

        }
        if (status === "noImg") {
            return <h2> Sorry no img with name {this.props.searchWord} !!!!!</h2>
        }
        if (status === "pendingLoad") {
            return <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow']}
            />
        }

        if (status === "rejecktedError") {
            return <h2>{error.message}</h2>
        }


        if (status === "resolved") {
            return <ul className="test">
                {images.map(item => (
                    <li key={item.id} className="test">
                        <img src={item.webformatURL} alt="" />
                    </li>
                ))}
            </ul>
        }

        // return (
        //     <div>
        //         {loading && <Vortex
        //             visible={true}
        //             height="80"
        //             width="80"
        //             ariaLabel="vortex-loading"
        //             wrapperStyle={{}}
        //             wrapperClass="vortex-wrapper"
        //             colors={['blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow']}
        //         />}
        //         {error && <h2>{error.message}</h2>}
        //         {images &&
        //             <ul className="test">
        //                 {images.hits.map(item => (
        //                     <li key={item.id} className="test">
        //                         <img src={item.webformatURL} alt="" />
        //                     </li>
        //                 ))}
        //             </ul>
        //         }

        //     </div>
        // )
    }
}
