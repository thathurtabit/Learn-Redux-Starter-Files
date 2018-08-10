import React, { Component, cloneElement } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Suxstagram</Link>
                </h1>
                {cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}