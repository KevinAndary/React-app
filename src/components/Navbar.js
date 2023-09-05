import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { FaUser, FaEnvelope } from 'react-icons/fa';

export default class Navbar extends Component {
    state = {
        activeLink: ''
    };

    setActiveLink = (link) => {
        this.setState({ activeLink: link });
    };

    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src="img/apple.png" alt="logo" className="navbar-brand logo-image" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <NavLink
                            to="/"
                            exact
                            className="nav-link"
                            activeClassName="active"
                            onClick={() => this.setActiveLink('products')}
                        >
                            products
                        </NavLink>
                    </li>
                    <li className="nav-item ml-5">
                        <NavLink
                            to="/about"
                            className="nav-link"
                            activeClassName="active"
                            onClick={() => this.setActiveLink('about')}
                        >
                            about
                        </NavLink>
                    </li>
                    <li className="nav-item ml-5">
                        <NavLink
                            to="/contact"
                            className="nav-link"
                            activeClassName="active"
                            onClick={() => this.setActiveLink('contact')}
                        >
                            contact
                        </NavLink>
                    </li>
                </ul>
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
                        <ButtonContainer className="btn">
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </div>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background-color: #fff;
    border-bottom: 1px solid #eee;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .navbar-brand {
        color: #000;
        text-decoration: none;
        font-size: 1.2rem;
    }

    .logo-image {
        height: 50px;
    }

    .navbar-nav {
        display: flex;
        align-items: center;

        .nav-item {
            margin-left: 15px;

            &:first-child {
                margin-left: 0;
            }
        }

        .nav-link {
            color: #555;
            font-weight: 500;
            text-transform: uppercase;
            transition: color 0.3s ease-in-out;
            font-size: 1rem;
            
            &:hover {
                color: #000;
            }

            &.active {
                background-color: #000;
                color: #fff;
                font-weight: bold;
                padding: 0.5rem;
                border-radius: 1rem; /* Adjust the value to control the roundness of the oval */
                display: inline-flex;
                align-items: center;
                justify-content: center;
                height: 30px; /* Adjust the value to control the height of the oval */
                width: 80px; /* Adjust the value to control the width of the oval */
            }
        }
    }

    .ml-auto {
        display: flex;
        align-items: center;

        .btn {
            font-size: 16px;
            font-weight: 500;
            text-transform: uppercase;
            border-radius: 20px;
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
            color: black;
            border: 1px solid black;
            padding: 8px 16px;
        
            &:hover,
            &:focus,
            &.active {
                background-color: #000;
                color: #fff;
            }
        
            .fa-user {
                margin-right: 8px;
            }
        
            .fa-cart-plus {
                font-size: 1.2rem;
                margin-right: 8px;
            }
        }
        

        .signup-btn {
            display: flex;
            align-items: center;
            
            .fa-plus {
                margin-left: 4px;
            }
        }
    }

    .navbar-nav,
    .ml-auto {
        flex-grow: 1;
        justify-content: center;
    }
`;




