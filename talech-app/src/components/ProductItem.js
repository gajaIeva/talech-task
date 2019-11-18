import React, {Component} from 'react';

class ProductItem extends Component {
    render () {
        return (
            <tr>
                <td>Lempa</td>
                <td>22222</td>
                <td>Big</td>
                <td>40g</td>
                <td>blue</td>
                <td><input type="checkbox" selected /></td>
            </tr>
        );
    }
}

export default ProductItem;