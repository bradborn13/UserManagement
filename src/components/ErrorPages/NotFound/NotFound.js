
import React from 'react';
import './NotFound.css';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const navigation = (props) => {
    return (
        <p className={'notFound'}>
        "404 Content not Found"
    </p>
    )
}
 
export default navigation;