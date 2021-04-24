import React from 'react';
import './App.css';
import Hello from './components/Hello';
import Array from './components/Array';
import ThreeDots from './components/ThreeDots';
import UseEffect from './components/UseEffect';
import GithubApi from './components/GithubApi';
import ComponentA from './components/contextApi/ComponentA';


const App = () => {
  return (
    <div className="App">
      {/* <Hello/> */}
      {/* <Array /> */}
      {/* <ThreeDots /> */}
      {/* <UseEffect/> */}
      {/* <GithubApi/> */}
      <ComponentA/>
    </div>
  )
}

export default App;
