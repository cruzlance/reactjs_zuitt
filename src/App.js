// import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';

// lets create a simple function

//to solve the problem we have to group our JSX elements
//there are multiple approaches to group adjacent JSX elements
//<React.Fragment>...</React.Fragment> or <>...</> ...some would describe react fragments as an invisible div
export default function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </div>
  );
}

// similar to export default from function
// export default App; 

