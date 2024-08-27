import React, { Component } from 'react';
import "Nav"
import { BrowserRouter as Router } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/blog">Media</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
