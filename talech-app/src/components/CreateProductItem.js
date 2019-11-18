import React, {Component} from 'react';

class NewProduct extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            product_name: '',
            product_EAN: 0,
            product_type: '',
            product_weight: 0,
            product_color: '',
            product_active: false
        }
    }

    onChangeProductName(e) {
        this.setState ({
            
        })
    }

    render() {
        return (
            <h1>NEW page</h1>
        );
    }
}

export default NewProduct;