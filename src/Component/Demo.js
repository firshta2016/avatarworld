import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

//functional
const Demo =(props) => {
    return <div className="maindiv_style"> 
        <h1>hello { props.name }</h1>
        <p>this is my new app</p>
        </div>
}

//class
{/*class Demo extends Component {
    render() {
        return <div className="maindiv_style"> 
        <h1>hello { this.props.name }</h1>
        <p>this is my new app</p>
        </div>

    }

    //props get passed to the component
    //props are immutable
    //props=> functional componenets
    //this.props=>class components
    //state is only used in class componets
} */}
export default Demo