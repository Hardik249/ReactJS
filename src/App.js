import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

let newElem = getGreeting({firstName:'Hardik', lastName: 'Kotak'});
let newlyElem = getGreeting();
let hello = <h1> Hello! </h1>;

const element1 = <a href="https://www.reactjs.org" target="_blank"> link </a>;
const element2 = <img src={user.avatarUrl} alt={getGreeting({firstName:'Hardik'})}></img>;



function App() {
  return (
    <div className="App">
      <p>Hello World!.</p>
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
      {element}
      {newElem}
      {newlyElem}
      {element1}
      {element2}
      {hello}
    </div>
  );
}

export default App;
