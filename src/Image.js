import React, { Component } from 'react';
import Modal from './Modal';

class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    render() {
        const { show } = this.state
        let { picData } = this.props
        let list = picData.map(pic => {
            return (
                <div key={pic.date} onClick={() => this.setState({ show: !show })}>

                    <img className='picture' src={pic.picture} alt={pic.title}></img>
                    <div>
                    {show ? (<a href='#' onClick={() => this.setState({ show: !show })}>
                        <Modal
                            title={pic.title}
                            explanation={pic.explanation}
                            picture={pic.url}
                        /></a>
                    ) : null}
                    </div>
                </div >
            );
        })

        return (
            <div className="App" styles={{ backgroundImage: 'url(${nasa})' }}>
                {list}
            </div >
        );
    }
}

export default Image;