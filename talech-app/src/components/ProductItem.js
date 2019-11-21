import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
        
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);

    }
    
    onDelete(e) {
      
        let index = e.target.value;
        
        let productsArray = JSON.parse(localStorage.getItem('products'));
        
        productsArray.splice(index,1);

        localStorage.setItem('products', JSON.stringify(productsArray));

        window.location.reload();

    }

    render () {
        
        let products = JSON.parse(localStorage.getItem('products'));
        
        let productListElements = products.map((product, index) => 
        <Fragment>
            <tr key={index} id={index}>
                <td>{index+1}</td>
                <td>{product.product_name}</td>
                <td>{product.product_EAN}</td>
                <td>{product.product_type}</td>
                <td>{product.product_weight}</td>
                <td>{product.product_color}</td>
                <td><input type="checkbox" 
                           checked={product.product_isActive}
                           //onChange={this.onChangeProductIsActive}
                           /></td>
                <td><Link to={`/products/${index}`}><button className="btn btn-outline-info">View</button></Link></td>
                <td><Link to={`/products/${index}/edit`}><button className="btn btn-outline-warning">Edit</button></Link></td>
                <td><button className="btn btn-outline-danger"  onClick={this.onDelete} value={index}>Delete</button></td>
          </tr>
        </Fragment>
        );
        
       
        return (
        
        productListElements
        
        );
    }
}

export default ProductItem;