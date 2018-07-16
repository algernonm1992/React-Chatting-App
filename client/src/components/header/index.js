import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';

class Header extends React.Component {
  onLogout() {
    this.props.dispatch(userActions.logout());
  }
  render() {
    console.log(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
      return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React Chat</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={2} onClick={() => this.onLogout()}>
                Logout
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            React Chat
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/workspace_search">
              Find Workspace
            </NavItem>
            <NavItem eventKey={2} href="/workspace_create">
              Create Workspace
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const connectedHeader = connect()(Header);
export { connectedHeader as Header };
