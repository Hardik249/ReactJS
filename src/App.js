import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import HookCounterOne from "./components/HookCounterOne";
import {Fragment, useRef} from 'react';
import { useCallback } from 'react';
import { useMemo } from 'react';
import Auth from "./components/Auth";
import AuthContext from "./components/auth-context";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Basic from './components/Basic';
import SignupForm from './components/SignupForm';
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from 'react-router-dom';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Content from './components/Content.js';

// import Input from "@material-ui/core/Input";
// import Select from "react-select";

function ProfilePage() {
  let location = useLocation();
  // Get the userId param from the URL.
  let { userId } = useParams();
  // ...
  console.log(location);
  console.log(userId);
}

function App() {

  // let location = useLocation();
  // // Get the userId param from the URL.
  // let { userId } = useParams();

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);
  // console.log(location);
  // console.log(userId);

  return (
    <div className="App">
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
          <li>
            <Link to="/content">Content</Link>
          </li>
          <li>
            <Link to="/users">ProfilePage</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" Component={Home} ></Route>
          <Route path="/about" Component={About} ></Route>
          <Route path="/contact" Component={Contact} ></Route>
          <Route path="/content" Component={Content} ></Route>
          <Route path="/users">
            <Route path=":userId" Component={ProfilePage} />
          </Route>
        </Routes>
        {/*<Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/contact" element={<Contact />} ></Route>
          <Route path="/content" element={<Content />} ></Route>
          <Route path="/users">
            <Route path=":userId" element={<ProfilePage />} />
          </Route>
        </Routes>*/}
      </Router>
    </div>
  );
}

// function App() {
//   const navigate = useNavigate();
//   return (
//     <div className="App">
//       <button onClick={() => navigate(-2)}>
//         Go 2 pages back
//       </button>
//       <button onClick={() => navigate(-1)}>Go back</button>
//       <button onClick={() => navigate(1)}>
//         Go forward
//       </button>
//       <button onClick={() => navigate(2)}>
//         Go 2 pages forward
//       </button>
//     </div>
//   );
// }



// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   );
// }

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true, maxLength: 20 })} />
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//       <input type="number" {...register("age", { min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   );
// }


// // The following component is an example of your existing Input Component
// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

// // you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//       <option value="">Select</option>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));

// const App = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input label="First Name" register={register} required />
//       <Select label="Age" {...register("Age")} />
//       <input type="submit" />
//     </form>
//   );
// };


// const App = () => {
//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       firstName: '',
//       select: {}
//     }
//   });
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Controller
//         name="firstName"
//         control={control}
//         render={({ field }) => <Input {...field} />}
//       />
//       <Controller
//         name="select"
//         control={control}
//         render={({ field }) => <Select
//           {...field}
//           options={[
//             { value: "chocolate", label: "Chocolate" },
//             { value: "strawberry", label: "Strawberry" },
//             { value: "vanilla", label: "Vanilla" }
//           ]}
//         />}
//       />
//       <input type="submit" />
//     </form>
//   );
// };



// // The following component is an example of your existing Input Component
// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

// // you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
//       <option value="">Select</option>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));

// const App = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input label="First Name" register={register} required />
//       <Select label="Age" {...register("Age")} />
//       <input type="submit" />
//     </form>
//   );
// };

// function App() {
//   const { register, formState: { errors }, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       {errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
//       <input
//         {...register("mail", { required: "Email Address is required" })}
//         aria-invalid={errors.mail ? "true" : "false"}
//       />
//       {errors.mail && <p role="alert">{errors.mail?.message}</p>}
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }



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
//   return (
//     <div className="App">
//       <SignupForm/>
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

// function App() {
//   return (
//     <div
//       tabIndex={1}
//       onFocus={(e) => {
//         console.log('e.currentTarget', e.currentTarget);
//         console.log('e.relatedTarget', e.relatedTarget);
//         console.log('break');
//         if (e.currentTarget === e.target) {
//           console.log('focused self');
//         } else {
//           console.log('focused child', e.target);
//         }
//         if (!e.currentTarget.contains(e.relatedTarget)) {
//           // Not triggered when swapping focus between children
//           console.log('focus entered self');
//         }
//       }}
//       onBlur={(e) => {
//         if (e.currentTarget === e.target) {
//           console.log('unfocused self');
//         } else {
//           console.log('unfocused child', e.target);
//         }
//         if (!e.currentTarget.contains(e.relatedTarget)) {
//           // Not triggered when swapping focus between children
//           console.log('focus left self');
//         }
//       }}
//     >
//       <input id="1" />
//       <input id="2" />
//     </div>
//   );
// };


// const schema = yup.object({
//   firstName: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// }).required();

// function App() {
//   const { register, handleSubmit, formState:{ errors } } = useForm({
//     resolver: yupResolver(schema)
//   });
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <p>{errors.firstName?.message}</p>

//       <input {...register("age")} />
//       <p>{errors.age?.message}</p>

//       <input type="submit" />
//     </form>
//   );
// };

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
