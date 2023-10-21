import React from 'react';
import Home from './Home';
import SingleMovie from './SingleMovie';
import Error from "./Error";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </>
  );
};

export default App;


// import logo from './logo.svg';
// import './App.css';

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

// export default App;
