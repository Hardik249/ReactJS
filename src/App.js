import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import HookCounterOne from "./components/HookCounterOne";
import {Fragment, useRef} from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import Auth from "./components/Auth";
import AuthContext from "./components/auth-context";



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

// function App() {
//   return (
//     <div className="App">
//       <p>Hello World!.</p>
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//       {element}
//       {newElem}
//       {newlyElem}
//       {element1}
//       {element2}
//       {hello}
//     </div>
//   );
// }

// function App() {
//   const [click, setClick] = useState(0);
//   const clicked = useState('GeeksForGeeks');
//   // using array destructuring here
//   // to assign initial value 0
//   // to click and a reference to the function
//   // that updates click to setClick

//   // const [clickArr, setClickarr] = useState([]);

//   // const addNumber = () => {
//   //   setClickarr([
//   //     ...clickArr,
//   //     {
//   //       id: clickArr.length,
//   //       value: Math.random() * 10
//   //     }
//   //   ]);
//   // };
//   return (
//       <div>
//         <ul>
//           {/*{clickArr.map(item => (
//             <li key={item.id}>{item.value}</li>
//           ))}*/}
//         </ul>
//         <p>You clicked {click} times</p>
//         <p>The number of times you have clicked
//         is {click % 2 == 0 ? 'even!' : 'odd!'}</p>

//         <button onClick={() => setClick(click => click + 1)}>
//           Click me
//         </button>
//         <h1>Welcome to {clicked}</h1>
//     </div>
//   );
// }

// function App() {
//   const [click, setClick] = useState([]);
//   const [data, setData] = useState({
//     username: '',
//     password: ''
//   });
//   const [form, setForm] = useState({
//     username: '',
//     password: ''
//   });
//   const [submit, submitted] = useState(false);

//   const printValues = e => {
//     e.preventDefault();
//     setForm({
//       username: data.username,
//       password: data.password
//     });
//     submitted(true);
//   };

//   const updateField = e => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value
//     });
//   };



//   const addNumber = () => {
//     setClick([
//       ...click,
//       {
//         id: click.length,
//         value: Math.random() * 10
//       }
//     ]);
//   };

//   return (
//     <div>
//       <form onSubmit={printValues}>
//         <label>
//           Username:
//           <input
//             value={data.username}
//             name="username"
//             onChange={updateField}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             value={data.password}
//             name="password"
//             type="password"
//             onChange={updateField}
//           />
//         </label>
//         <br />
//         <button>Submit</button>
//       </form>

//       <p>{submit ? form.username : null}</p>

//       <p>{submit ? form.password : null}</p>
//       <ul>
//         {click.map(item => (
//           <li key={item.id}>{item.value}</li>
//         ))}
//       </ul>
//       <button onClick={addNumber}>
//         Click me
//       </button>
//     </div>
//   );
// }


// function App() {
//   const [values, setValues] = useState(['test']);
//   useEffect(()=>{
//       //You can add your code here for mounting phase of component
//       console.log("Mounting in Functional Component")
//   },[])
//   // adding an empty array ensures that the useEffect is only triggered once
//   // (when the component mounts)

//   useEffect(()=>{
//     //You can add your code for updating phase of component
//       console.log("Updating in Functional Component")
//   },[values])
//   //values triggers re render whenever they are updated in your program,
//   //you can add multiple values by separating them by commas

//   useEffect(()=>{
//     return()=>{
//     //You can add your code for unmounting phase of component
//     console.log("Functional Component Removed ")
//     }
//   },[])
//   //Write all the code of unmounting phase only inside the callback function
//   return (
//     <div className="App">
//       <HookCounterOne />
//     </div>
//   );
// }

// function App() {
//   // Creating a ref object using useRef hook
//   const focusPoint = useRef(null);
//   const onClickHandler = () => {
//     focusPoint.current.value =
//       "The quick brown fox jumps over the lazy dog";
//       focusPoint.current.focus();
//   };
//   return (
//     <Fragment>
//       <div>
//         <button onClick={onClickHandler}>
//          ACTION
//         </button>
//       </div>
//       <label>
//        Click on the action button to
//        focus and populate the text.
//       </label><br/>
//       <textarea ref={focusPoint} />
//     </Fragment>
//   );
// };

// const funccount = new Set();
// const App = () => {
//   const [count, setCount] = useState(0)
//   const [number, setNumber] = useState(0)
//   // const incrementCounter = () => {
//   //   setCount(count + 1)
//   // }
//   // const decrementCounter = () => {
//   //   setCount(count - 1)
//   // }

//   //  const incrementNumber = () => {
//   //   setNumber(number + 1)
//   // }

//   const incrementCounter = useCallback(() => {
//   setCount(count + 1)
//   }, [count])
//   const decrementCounter = useCallback(() => {
//     setCount(count - 1)
//   }, [count])
//   const incrementNumber = useCallback(() => {
//     setNumber(number + 1)
//   }, [number])

//   funccount.add(incrementCounter);
//   funccount.add(decrementCounter);
//   funccount.add(incrementNumber);
//   alert(funccount.size);

//   return (
//     <div>
//       Count: {count}
//       <button onClick={incrementCounter}>
//         Increase counter
//       </button>
//       <button onClick={decrementCounter}>
//          Decrease Counter
//       </button>
//       <button onClick={incrementNumber}>
//         increase number
//       </button>
//     </div>
//   )
// }

// function App() {
//   const [number, setNumber] = useState(0)
//   const squaredNum =  squareNum(number);
//   const [counter, setCounter] = useState(0);

//  // Change the state to the input
//   const onChangeHandler = (e) => {
//     setNumber(e.target.value);
//   }

//   // Increases the counter by 1
//   const counterHander = () => {
//     setCounter(counter + 1);
//   }
//   return (
//     <div className="App">
//       <h1>Welcome to Geeksforgeeks</h1>
//       <input type="number" placeholder="Enter a number"
//         value={number} onChange={onChangeHandler}>
//       </input>

//       <div>OUTPUT: {squaredNum}</div>
//       <button onClick= {counterHander}>Counter ++</button>
//       <div>Counter : {counter}</div>
//     </div>
//   );
// }

// function App() {
//   const [number, setNumber] = useState(0)
//   // Using useMemo
//   const squaredNum = useMemo(()=> {
//     return squareNum(number);
//   }, [number])
//   const [counter, setCounter] = useState(0);

//  // Change the state to the input
//   const onChangeHandler = (e) => {
//     setNumber(e.target.value);
//   }

//   // Increases the counter by 1
//   const counterHander = () => {
//     setCounter(counter + 1);
//   }
//   return (
//     <div className="App">
//       <h1>Welcome to Geeksforgeeks</h1>
//       <input type="number" placeholder="Enter a number"
//           value={number} onChange={onChangeHandler}>
//       </input>

//       <div>OUTPUT: {squaredNum}</div>
//       <button onClick= {counterHander}>Counter ++</button>
//       <div>Counter : {counter}</div>
//     </div>
//   );
// }


// // function to square the value
// function squareNum(number){
//   console.log("Squaring will be done!");
//   return Math.pow(number, 2);
// }

// const App = () => {
//   //using the state to dynamicallly pass the values to the context

//   const [authstatus, setauthstatus] = useState(false);
//   const login = () => {
//     setauthstatus(true);
//   };
//   return (
//     <React.Fragment>
//       <AuthContext.Provider value={{ status: authstatus, login: login }}>
//         <Auth />
//       </AuthContext.Provider>
//     </React.Fragment>
//   );
// };

// class App extends React.Component {
//   handleClick(event) {
//     // Access event properties
//     console.log('Clicked on', event.target);
//     console.log('Clicked value', event.target.value);
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>Click me</button>
//     );
//   }
// };

// function App() {
//   return (
//     <div>
//       <input
//         onFocus={(e) => {
//           console.log('Focused on input');
//         }}
//         placeholder="onFocus is triggered when you click this input."
//       />
//       <input
//         onBlur={(e) => {
//           console.log('Triggered because this input lost focus');
//         }}
//         placeholder="onBlur is triggered when you click this input and then you click outside of it."
//       />
//     </div>
//   )
// };

function App() {
  return (
    <div
      tabIndex={1}
      onFocus={(e) => {
        console.log('e.currentTarget', e.currentTarget);
        console.log('e.relatedTarget', e.relatedTarget);
        console.log('break');
        if (e.currentTarget === e.target) {
          console.log('focused self');
        } else {
          console.log('focused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus entered self');
        }
      }}
      onBlur={(e) => {
        if (e.currentTarget === e.target) {
          console.log('unfocused self');
        } else {
          console.log('unfocused child', e.target);
        }
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          console.log('focus left self');
        }
      }}
    >
      <input id="1" />
      <input id="2" />
    </div>
  );
};

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



export default App;
