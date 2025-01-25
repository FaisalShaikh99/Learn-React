import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Faisal Shaikh</h1>
        </div>
    )
}

// const reactElement = {
//     type : 'a',
//     props : {
//        href : 'https://google.com',
//        target : '_blank',
//     },
//     children : "Visit to google"
//  }

// const reactElement = (
//     <a href="https://google.com" target='_blank'>Visit to google</a>   // using object
// )

const reactElement = React.createElement(
    'a',
    {href :'https://google.com', target :'_blank'},
    "Click to visit on google"
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <App/>
)
