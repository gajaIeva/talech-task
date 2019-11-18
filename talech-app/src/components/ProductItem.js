import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    render () {
        return (
            <tr>
                <th>1</th>
                <td>Lempa</td>
                <td>22222</td>
                <td>Big</td>
                <td>40g</td>
                <td>blue</td>
                <td><input type="checkbox" selected /></td>
                <Link to={`/products/id`}>
                <td><button className="btn btn-outline-info">View</button></td>
                </Link>
                <Link to="/products/id/edit">
                <td><button className="btn btn-outline-warning">Edit</button></td>
                </Link>
                <td><button className="btn btn-outline-danger">Delete</button></td>
            </tr>
        );
    }
}

export default ProductItem;