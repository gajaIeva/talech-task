import React, {Component} from 'react';
import './../App.css';
import {getFromLocalStorage} from './localStorageUtilities';

class PreviewProduct extends Component {

    render() {

        const Id = this.props.match.params.id;

        let productsArray = getFromLocalStorage();

        let productObject = productsArray[Id];

        return (

             <div>
                 <h2>{productObject.product_name}</h2>
                 <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>EAN</th>
                            <th>Type</th>
                            <th>Weight</th>
                            <th>Color</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>{productObject.product_EAN}</td>
                            <td>{productObject.product_type}</td>
                            <td>{productObject.product_weight}</td>
                            <td>{productObject.product_color}</td>
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={productObject.product_isActive}
                                    readOnly
                                />
                            </td>
                        </tr>   
                    </tbody>
                </table>
            </div>

        );
    }
}

export default PreviewProduct;