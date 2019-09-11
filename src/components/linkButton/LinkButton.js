import React, {Component} from 'react';
import  './LinkButton.css';
import {Link} from 'react-router-dom';
export default class LinkButton extends Component{
    render(){
        return(            
            <Link className="link-btn" to={this.props.url}>{this.props.label}</Link>
        )
    }
}


