import React, { Component } from 'react';
import './LinkButton.css';
import { Link } from 'react-router-dom';
export default class LinkButtonPrimary extends Component {
    render() {
        return (
            <Link
                className="btn link-btn-primary"
                to={this.props.url + $this.props.value}
            >   
                {this.props.label}
            </Link>
        )
    }
}


