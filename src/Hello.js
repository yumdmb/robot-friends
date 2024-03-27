import { Component } from "react";
import './Hello.css';

// this is class component
// class Hello extends Component {
//     render() {
//         return (
//         <div className='f1 tc'>
//             <h1>Hello</h1>
//             <p>{this.props.greeting}</p>
//             <p>This is a paragraph</p>
//         </div>
//         );
//     }
// }
// this is functional component
const Hello = (props) => {
    return (
        <div className='f1 tc'>
            <h1>Hello</h1>
            <p>This is a paragraph</p>
            <p>{props.greeting}</p>
        </div>
    );
}


export default Hello;