import React from 'react';
import "./Header.css";

const Header = (props) => {
    return (
        <div className="custom-header">
            {props.children}
        </div>
    )
}

export default Header;
