import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav.js';
import ProductList from './components/ProductList';
import NewProduct from './components/CreateProductItem';
import EditProduct from './components/EditProductItem';
import PreviewProduct from './components/PreviewProductItem';

class App extends React.Component {
  render () {
  return (
    <Router>
    <div className="App container-fluid">
      <header className="App-header">
       <Nav/>
      </header>
      <main className="App-main">
        <Switch>
          <Route path="/products" exact component={ProductList} />
          <Route path="/product/:id" component={PreviewProduct}/>
          <Route path="/products/create" component={NewProduct}/>
          <Route path="/product/:id/edit" component={EditProduct}/>
        </Switch>
      </main>
    </div>
  </Router>
  );
}
}

export default App;
