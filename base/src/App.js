import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MazeGen from './mazeGen/MazeGen';

function App() {
  return (
    <Router> 
    <div className="App">
      
      <Route path='/base' render ={(props) =>
      (
        <Header />
      )}
      />

      <Route path='/maze' component={MazeGen} />

    </div>
    
    </Router>
  );
}

export default App;
