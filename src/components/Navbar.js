import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaCartPlus } from 'react-icons/fa';

export default class Navbar extends Component {
  state = {
    activeLink: ''
  };

  setActiveLink = (link) => {
    this.setState({ activeLink: link });
  };

  render() {
    return (
      <NavWrapper className="navbar navbar-expand-lg navbar-dark bg-dark px-sm-5">
        <Link to="/" className="navbar-brand">
          <span className="logo-text">PhonePro</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Use mx-auto to center links on larger screens */}
            <li className="nav-item">
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="active"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <Link to="/login" className="btn">
            <FaUser className="mr-1" />
            Login
          </Link>
          <Link to="/signup" className="btn">
            <FaUser className="mr-1" />
            Signup
          </Link>
          <Link to="/cart" className="ml-3">
            <button className="btn">
              <span className="mr-2">
                <FaCartPlus />
              </span>
              My Cart
            </button>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background-color: #333; /* Dark background color */
  border-bottom: 1px solid #eee;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

/* Base styles for both mobile and laptop versions */
.navbar-brand {
  font-size: 24px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo-text {
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  fontFamily: 'Lobster, cursive',
}

/* Styles for mobile devices (e.g., smartphones) */
@media (max-width: 768px) {
  .navbar-brand {
    font-size: 20px; /* Adjust font size for mobile */
  }
}

/* Styles for laptop/desktop devices */
@media (min-width: 769px) {
  .navbar-brand {
    font-size: 28px; /* Adjust font size for laptops/desktops */
  }

  .navbar-brand:hover {
    color: #FF5733; /* Change color on hover for laptops/desktops */
  }
}



  .navbar-brand {
    color: #fff; /* White text color */
    text-decoration: none;
    font-size: 1.2rem;
  }

  .logo-image {
    height: 50px;
  }

  .navbar-toggler {
    border: none;
  }

  .navbar-nav {
    display: flex;
    align-items: center;
    flex-direction: row; /* Ensure links are side-by-side on larger screens */

    .nav-item {
      margin-right: 15px; /* Add horizontal spacing between items */
    }

    .nav-link {
      color: #fff; /* White text color */
      font-weight: 500;
      text-transform: uppercase;
      transition: color 0.3s ease-in-out;
      font-size: 1rem;

      &:hover {
        color: #f8f9fa; /* Lighter text color on hover */
      }

      &.active {
        background-color: #f8f9fa; /* Light background color */
        color: #333; /* Dark text color */
        font-weight: bold;
        padding: 0.5rem;
        border-radius: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .ml-auto {
    margin-top: 20px; /* Add top margin to the right-aligned content */
  }

  .btn {
    font-size: 16px;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 1rem; /* Adjust the border-radius for consistency */
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
    color: #f8f9fa; /* Lighter text color for buttons */
    background-color: transparent; /* Transparent background for buttons */
    border: none; /* Remove the button border */
    padding: 8px 16px;

    &:hover,
    &:focus,
    &.active {
      background-color: #f8f9fa; /* Light background color for buttons on hover */
      color: #333; /* Dark text color for buttons on hover */
    }

    .fa-user {
      margin-right: 8px;
    }

    .fa-cart-plus {
      font-size: 1.2rem;
      margin-right: 8px;
    }
  }
`;
