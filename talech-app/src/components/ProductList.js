import React, {Component} from 'react';
import ProductItems from './ProductItems';
import {getFromLocalStorage, saveToLocalStorage} from './localStorageUtilities';

class ProductList extends Component {

    constructor (props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.renderProductListElements = this.renderProductListElements.bind(this);
        console.log("Sveiki :)");

        this.state = {
            productsArray: getFromLocalStorage(),
        }
    }

    onChange(index){
        
        let productObject = this.state.productsArray[index];
        
        productObject.product_isActive = !productObject.product_isActive;

        let updatedProductsArray = [
            ...this.state.productsArray.slice(0, index),
            {
                product_name: productObject.product_name,
                product_EAN: productObject.product_EAN,
                product_type: productObject.product_type,
                product_weight: productObject.product_weight,
                product_color: productObject.product_color,
                product_isActive: productObject.product_isActive,
            },
            ...this.state.productsArray.slice(index + 1)
        ];

        saveToLocalStorage(updatedProductsArray);

        this.setState({
            productsArray: updatedProductsArray
        });        
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
        {return <ProductItems 
                    key = {index}
                    index = {index}
                    product = {product}
                    onChange = {this.onChange}
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