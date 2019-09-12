import React, {Component} from 'react';
import  './LinkButton.css';
import {Link} from 'react-router-dom';
export default class LinkButtonDanger extends Component{
    render(){
        return(            
            <Link className="link-btn-danger" to={this.props.url}>{this.props.label}</Link>
        )
    }
}


