import React, {Component} from 'react';

class NewProduct extends Component {
    
    productData;

    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductEAN = this.onChangeProductEAN.bind(this);
        this.onChangeProductType = this.onChangeProductType.bind(this);
        this.onChangeProductWeight = this.onChangeProductWeight.bind(this);
        this.onChangeProductColor = this.onChangeProductColor.bind(this);
        this.onChangeProductIsActive = this.onChangeProductIsActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_name: '',
            product_EAN: '',
            product_type: '',
            product_weight: '',
            product_color: '',
            product_isActive: false
        };
    }

    onChangeProductName(e) {
        this.setState ({
            product_name: e.target.value
        });
    }

    onChangeProductEAN(e) {
        this.setState ({
            product_EAN: e.target.value
        });
    }

    onChangeProductType(e) {
        this.setState ({
            product_type: e.target.value
        });
    }

    onChangeProductWeight(e) {
        this.setState ({
            product_weight: e.target.value
        });
    }

    onChangeProductColor(e) {
        this.setState ({
            product_color: e.target.value
        });
    }

    onChangeProductIsActive() {
        this.setState ({
            product_isActive: !this.state.product_isActive
        });
    }

    onSubmit(e) {
        e.preventDefault();

        //submit logic

        console.log(`Form submitted:`);
        console.log(`name: ${this.state.product_name}`);
        console.log(`ean: ${this.state.product_EAN}`);
        console.log(`type: ${this.state.product_type}`);
        console.log(`weight: ${this.state.product_weight}`);
        console.log(`color: ${this.state.product_color}`);
        console.log(`active: ${this.state.product_isActive}`);
        

        this.setState({
            product_name: '',
            product_EAN: '',
            product_type: '',
            product_weight: '',
            product_color: '',
            product_isActive: false
        });
    }

    //react life cycle
    componentDidMount() {
        this.productData = JSON.parse(localStorage.getItem('product'));

        if (localStorage.getItem('product')) {
            this.setState({
                product_name: this.productData.product_name,
                product_EAN: this.productData.product_EAN,
                product_type: this.productData.product_type,
                product_weight: this.productData.product_weight,
                product_color: this.productData.product_color,
                product_isActive: this.productData.product_isActive,

            })
        } else {
            this.setState({
                product_name: '',
                product_EAN: '',
                product_type: '',
                product_weight: '',
                product_color: '',
                product_isActive: false
            });
        }
    }

    componentDidUpdate(nextProps, nextState){
        localStorage.setItem('product', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="m-1">
                <h3> Create New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> Name:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_name}
                                onChange={this.onChangeProductName}
                                />
                    </div>
                    <div className="form-group">
                        <label> EAN:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_EAN}
                                onChange={this.onChangeProductEAN}
                                />
                    </div>
                    <div className="form-group">
                        <label> Type:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_type}
                                onChange={this.onChangeProductType}
                                />
                    </div>
                    <div className="form-group">
                        <label> Weight:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_weight}
                                onChange={this.onChangeProductWeight}
                                />
                    </div>
                    <div className="form-group">
                        <label> Color:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_color}
                                onChange={this.onChangeProductColor}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <label> Active:</label>
                            <input  className="form-check-input ml-5"
                                    type="checkbox"
                                    checked={this.state.product_isActive}
                                    onChange={this.onChangeProductIsActive}
                                    />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-outline-success"/>
                    </div>
                </form>

            </div>
        );
    }
}

export default NewProduct;