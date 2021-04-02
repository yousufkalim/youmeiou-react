import React from 'react';
import "./List.css";

const List = (props) => {
    return (
        <div className="list" style={props.noborder && {border: 'none', backgroundColor: "#EFD242"}}>
            {props.children}
        </div>
    )
}

export default List
