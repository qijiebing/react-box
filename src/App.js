import React from 'react';
// import logo from './logo.svg';
import './App.css';

// import {Button} from 'antd';
// import CommentList from './components/CommentList.js';
// import ComPosition from './components/ComPosition.js';
// import HOC from './components/HOC.js';
// import HOCdor from './components/HOCdor.js';
import ContextSample from './components/Context.js';

function App() {
  return (
    <div className="App">


      {/* <CommentList></CommentList> */}
      {/* <ComPosition > </ComPosition> */}
      {/* <HOCdor stage = 'REACT' > </HOCdor> */}
      <ContextSample></ContextSample>


      {/* <Button>提交</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
