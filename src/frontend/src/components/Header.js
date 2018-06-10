import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import HomeLogo from '../assests/EmpirEqual_home.svg';
import { AppContext } from '../AppProvider.js';

class Header extends Component {
  constructor (props) {
      super(props)
      this.state = {
        selected: ""
      }
      this.changeSelected = this.changeSelected.bind(this);
  }
  componentDidMount() {
    this.changeSelected(this.props.history.location.pathname.split('/')[1])
  }

  changeSelected(selected) {
    this.setState({ selected: selected });
    this.props.history.push(selected)
  }

  render() {
    return (
          <HeaderContainer>
            <MainNav>
              <NavItem onClick={() => this.changeSelected('')} selected={this.state.selected} pathName="">
                <NavLink to="/">
                  <HeaderImage src={HomeLogo}/>
                </NavLink>
              </NavItem>
              <NavItem className="right" onClick={() => this.changeSelected('login')} selected={this.state.selected} pathName="login">
                <NavLink to="/login">
                  <HeaderImage src={HomeLogo}/>
                </NavLink>
              </NavItem>
            </MainNav>
          </HeaderContainer>
      )
  }
}
export default withRouter(Header);

const HeaderContainer = styled.div`
  width: '100%';
`

const MainNav = styled.div`
  list-style: none;
  display: flex;

  > .right {
    text-align: right;
  }
`

const NavItem = styled.div`
  > a {
    text-decoration: none;
  }
  width: 50%;
  margin: 1em;

`

const HeaderImage = styled.img`
  width: 5%;
`
