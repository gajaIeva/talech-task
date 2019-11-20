import React, {Component} from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component {
    render() {
        return (
            <div className='mainProductList'>
                <h2 className="m-2">Products</h2>
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
                        <ProductItem/>  
                    </tbody>
                </table>
              
            </div>
        );
    }
}

export default ProductList;