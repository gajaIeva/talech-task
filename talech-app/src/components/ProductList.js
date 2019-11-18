import React, {Component} from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
    render() {
        return (
            <div className='mainProductList'>
                <table>
                    <caption>The List of Products</caption>
                        <tr>
                            <th>Name</th>
                            <th>EAN</th>
                            <th>Type</th>
                            <th>Weight</th>
                            <th>Color</th>
                            <th>Active</th>
                        </tr>
                        <ProductItem/> 
                </table>
            </div>
        );
    }
}

export default ProductList;