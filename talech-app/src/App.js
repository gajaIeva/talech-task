import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductList from './components/ProductList';

class App extends React.Component {
  render () {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1> Warehouse Inventory </h1>
        <ProductList />
      </header>
    </div>
  </Router>
  );
}
}

export default App;
