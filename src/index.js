import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  
import { useState, useEffect } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './components/Welcome.js'
import Comment from './components/Comment.js';
import Tick from './components/Tick.js';
import Clock from './components/Clock.js'
import Toggle from './components/Toggle.js'
import LoggingButton from './components/LoggingButton.js';
import Greeting from './components/Greeting.js';
import LoginControl from './components/LoginControl.js';
import Mailbox from './components/Mailbox.js';
import NumberList from './components/NumberList.js';
import Blog from './components/Blog.js';
import NameForm from './components/NameForm.js';
import EssayForm from './components/EssayForm.js';
import FlavorForm from './components/FlavorForm.js';
import Reservation from './components/Reservation.js';
import Calculator from './components/Calculator.js';
import About from './components/About.js';
import Contact from './components/Contact.js';


const element1 = (
  <h1 className="greeting">
    Hello, world!1
  </h1>
);

const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!2'
);

// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!chld'
  }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
// const [count, setCount] = useState(<Tick />);
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};


// function ticking() {
//   // body...
//   root.render(<Clock />);
// }

const routing = (
  <div>
    <h1>React Router Example</h1>
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<App />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
    </Router>
  </div>
);

root.render(routing);
root.render(
  <React.StrictMode>
  {routing}
  </React.StrictMode>
);


// root.render(
//   <React.StrictMode>
//     <Toggle />
//     <LoggingButton />
//     <Clock />
//     <Clock />
//     <Clock />
//   'ticking'
//     <Tick />
//     <Clock />
//     <Comment
//       date={comment.date}
//       text={comment.text}
//       author={comment.author} />
//     {element1}
//     {element2}
//     {element.props.children}
//     <App />
//   </React.StrictMode>
// );

// setInterval(ticking, 1000);
// setInterval(<Tick />, 1000);

const rootDemo = ReactDOM.createRoot(
  document.getElementById('rootDemo')
);

const WelcomeElement = <Welcome name="Hardik" />;

const messages = ['React', 'Re: React', 'Re:Re: React'];
const count = 0;

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);


// const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


const elementDemo = <h1>Hello, world..!!</h1>;
// rootDemo.render(
//   <React.StrictMode>
//     <Calculator />
//     <Reservation />
//     <NameForm />
//     <EssayForm />
//     <FlavorForm />
//     'rootDemo'
//     <Blog posts={posts} />
//     <NumberList numbers={doubled} />
//     'rootDemo'
//     <ul>{listItems}</ul>
//     {elementDemo}
//     <Greeting isLoggedIn={false} />
//     <Greeting isLoggedIn={true} />
//     {WelcomeElement}
//     <LoginControl />
//     <Mailbox unreadMessages={messages} />
//     {count && <h1>Messages: {count}</h1>}
//   </React.StrictMode>
// );



const rootNew = ReactDOM.createRoot(
  document.getElementById('rootNew')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!New</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // rootNew.render(element);
}

setInterval(tick, 1000);

// root.render(routing);
// ReactDOM.render(routing, document.getElementById('root'));
// rootDemo.render(WelcomeElement);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
