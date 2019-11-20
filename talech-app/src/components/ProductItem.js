import React, {Component, Fragment} from 'react';
//import {Link} from 'react-router-dom';

class ProductItem extends Component {

    render () {
        
        let products = JSON.parse(localStorage.getItem('products'));

        console.log(products);
        
        let productListElements = products.map((product) => 
        <Fragment>
            <tr>
                <td>1</td>
                <td>{product.product_name}</td>
                <td>{product.product_EAN}</td>
                <td>{product.product_type}</td>
                <td>{product.product_weight}</td>
                <td>{product.product_color}</td>
                <td><input type="checkbox" {...product.product_isActive} /></td>
                <td><button className="btn btn-outline-info">View</button></td>
                <td><button className="btn btn-outline-warning">Edit</button></td>
                <td><button className="btn btn-outline-danger">Delete</button></td>
          </tr>
        </Fragment>
        );
        
       
        return (
        
        productListElements
        
        );
    }
}

export default ProductItem;