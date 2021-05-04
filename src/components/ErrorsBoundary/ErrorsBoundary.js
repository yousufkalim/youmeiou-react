import React, { Component } from 'react'

export class ErrorsBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false,
        }
    }
    
    render() {
        const {hasError} = this.state;
       if(hasError){
           return(
               <h1>Error boundary applied</h1>
           )
       }
       else{
           return this.props.children
       }
    }
}

export default ErrorsBoundary
