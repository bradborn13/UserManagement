
import React from 'react';
import './Navigation.css';
import { Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


const navigation = (props) => {
    return (
        
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//   <Navbar.Brand href="/">NAVBAR EMP</Navbar.Brand>
//   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//   <Navbar.Collapse id="responsive-navbar-nav">
//     <Nav className="mr-auto">
//           <LinkContainer to={'/owner-list'} exact>   
//                             <NavItem eventkey={1}  className="color-nav-section">
//                                 Owner List                            
//                             </NavItem>
//                         </LinkContainer>
//                         <LinkContainer to={'/owner-li'} exact>
//                             <NavItem eventkey={1} className="color-nav-section">
//                                Something else                          
//                             </NavItem>
//                         </LinkContainer>
  
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
<Col md={12}>
<Navbar inverse collapseOnSelect>
    <Navbar.Header>
    <Navbar.Brand>
            <NavLink to={'/'} exact >Account-Owner</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
        <Nav >
            <LinkContainer to={'/owner-list'} exact>
                <NavItem eventKey={1}>
                    Owner Actions
                </NavItem>
            </LinkContainer>
            <LinkContainer to={'/account-list'}>
                <NavItem eventKey={2}>
                    Account Actions
                </NavItem>
            </LinkContainer>
        </Nav>   
</Navbar>
</Col>
    )
}
 
export default navigation;