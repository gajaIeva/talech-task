import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getFromLocalStorage, saveToLocalStorage} from './localStorageUtilities';

class ProductItem extends Component {
   
    constructor(props) {
        super(props);
        
        console.log(props);
        
        this.deleteItem = this.deleteItem.bind(this);
        //this.onChangeProductIsActive = this.onChangeProductIsActive.bind(this);
    }
    
    // onChangeProductIsActive() {

    //    // product_isActive: !this.state.product_isActive
    //     let productsArray = JSON.parse(localStorage.getItem('products'));
    //     productsArray.push(this.state);
    //     localStorage.setItem('products', JSON.stringify(productsArray));
    // }

    deleteItem() {
        this.props.onDelete(this.props.index);
    }
 

    render () {
        console.log(this.props);
        
        return (
            <>
            <tr>
                <td>{this.props.index+1}</td>
                <td>{this.props.product.product_name}</td>
                <td>{this.props.product.product_EAN}</td>
                <td>{this.props.product.product_type}</td>
                <td>{this.props.product.product_weight}</td>
                <td>{this.props.product.product_color}</td>
                <td><input type="checkbox" 
                    checked={this.props.product.product_isActive}
                    //onChange={this.onChangeProductIsActive}
                    /></td>
                <td>
                    <Link to={`/products/${this.props.index}`}>
                        <button className="btn btn-outline-info">View</button>
                    </Link>
                </td>
                <td>
                    <Link to={`/products/${this.props.index}/edit`}>
                        <button className="btn btn-outline-warning">Edit</button>
                    </Link>
                </td>
                <td>
                    <button 
                        className="btn btn-outline-danger"  
                        onClick={this.deleteItem} 
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
        );
    }

}

export default ProductItem;