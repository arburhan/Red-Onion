import React from 'react';
import logo from '../../images/logo.png';
import cart from '../../images/icons/Path 1.png';
const Header = () => {
    const x = 0;
    return (
        <nav>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href=""><img src={cart} alt="" /></a>
                <a href="">login</a>
                <a href="">sign up</a>
            </div>
        </nav>
    );
};

export default Header;