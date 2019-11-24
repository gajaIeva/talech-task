import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProductItems extends Component {
   
    constructor(props) {
        super(props);
        
        this.changeItem = this.changeItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
     changeItem() {
        this.props.onChange(this.props.index);
    }

    deleteItem() {
        this.props.onDelete(this.props.index);
    }
 
    render () {
        return (
            <>
                <tr>
                    <td>{this.props.index+1}</td>
                    <td>{this.props.product.product_name}</td>
                    <td>{this.props.product.product_EAN}</td>
                    <td>{this.props.product.product_type}</td>
                    <td>{this.props.product.product_weight}</td>
                    <td>{this.props.product.product_color}</td>
                    <td>
                        <input 
                        type="checkbox" 
                        checked={this.props.product.product_isActive}
                        onChange={this.changeItem}
                        />
                    </td>
                    <td className='listButton'>
                        <Link to={`/products/${this.props.index}`}>
                            <button 
                                className="btn btn-outline-info"
                            > View
                            </button>
                        </Link>
                    </td>
                    <td className='listButton'>
                        <Link to={`/products/${this.props.index}/edit`}>
                            <button 
                                className="btn btn-outline-warning"
                            > Edit
                            </button>
                        </Link>
                    </td>
                    <td className='listButton'>
                        <button 
                            className="btn btn-outline-danger"  
                            onClick={this.deleteItem} 
                        > Delete 
                        </button>
                    </td>
                </tr>
            </>
        );
    }

}

export default ProductItems;