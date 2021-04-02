import React from 'react';
import "./Input.css";

const Input = (props) => {
    return (
        <div className="w-100">
            <input {...props} className="custom-input" />
        </div>
    )
}

export default Input
