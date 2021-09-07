import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

const Nav = () => {
  const history = useHistory();
  const activePath = history.location.pathname;

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li className={`${activePath === '/' ? 'active' : ''}`}>
          <Link to="/">1. About us</Link>
        </li>
        <li className={`${activePath === '/work' ? 'active' : ''}`}>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li className={`${activePath === '/contact' ? 'active' : ''}`}>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    margin-left: 10rem;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      height: 0.3rem;
      background: #23d997;
      width: 0%;
      position: absolute;
      bottom: -80%;
      left: -5%;
      transition: 0.75s ease-in;
    }
    &.active {
      &::before {
        width: 110%;
      }
    }
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  @media (max-width: 1500px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        margin: 0;
      }
    }
  }
`;
