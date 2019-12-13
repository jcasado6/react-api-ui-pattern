import React, { Component } from 'react';
// import { Route, Link, Switch } from 'react-router-dom'


class Image1 extends Component {
    render() {
        return (
            <div>
                <img src={this.props.picture.url} alt='pic'></img>
                <p>{this.props.explanation}</p>
            </div>
        );
    }
}

export default Image1