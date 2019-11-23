import React, {Component} from 'react';
import ProductItem from './ProductItem';
import {getFromLocalStorage, saveToLocalStorage} from './localStorageUtilities';

class ProductList extends Component {

    constructor (props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.renderProductListElements = this.renderProductListElements.bind(this);

         // geriau kelti i didMount - (setState) - cia nereikia palikti
        this.state = {
            productsArray: getFromLocalStorage(),
        }
    }

    onDelete(index) {
        let updatedProductsArray = [
            ...this.state.productsArray.slice(0, index),
            // {name: "m", ka: 2 ir tt - editinimui}
            ...this.state.productsArray.slice(index + 1)
        ];

        saveToLocalStorage(updatedProductsArray);

        this.setState({
            productsArray: updatedProductsArray
        });
    }

    renderProductListElements() {
    
        let productsArrayElements = this.state.productsArray.map((product, index) => 
        {
            console.log(product);  

            return <ProductItem 
                key = {index}
                index = {index}
                product = {product}
                onDelete = {this.onDelete}
            />  
        }
        );

        return this.state.productsArray.length === 0 ?
            <div>Whoops, no products.</div> : 
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>EAN</th>
                        <th>Type</th>
                        <th>Weight</th>
                        <th>Color</th>
                        <th>Active</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr> 
                </thead>
                <tbody>
                    {productsArrayElements}
                </tbody>
            </table>;
    }

    render() {
        return (
            <div className=''>
                <h2 className="m-2">Products</h2>
                <div>{this.renderProductListElements()}</div> 
            </div>
        );
    }
}

export default ProductList;