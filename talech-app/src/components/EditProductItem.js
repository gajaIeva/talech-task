import React, {Component} from 'react';

class EditProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onChangeProductEAN = this.onChangeProductEAN.bind(this);
        this.onChangeProductType = this.onChangeProductType.bind(this);
        this.onChangeProductWeight = this.onChangeProductWeight.bind(this);
        this.onChangeProductColor = this.onChangeProductColor.bind(this);
        this.onChangeProductIsActive = this.onChangeProductIsActive.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        const Id = this.props.match.params.id;
        
        let products = JSON.parse(localStorage.getItem('products'));

        let productObject = products[Id];


        this.state = {
            product_name: productObject.product_name,
            product_EAN: productObject.product_EAN,
            product_type: productObject.product_type,
            product_weight: productObject.product_weight,
            product_color: productObject.product_color,
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
        const Id = this.props.match.params.id;
        
        console.log(this.state);
        console.log(Id);
        
        
        
        // let productsArray = JSON.parse(localStorage.getItem('products'));
        // productsArray.push(this.state);
        // localStorage.setItem('products', JSON.stringify(productsArray));

        // this.setState({
        //     product_name: '',
        //     product_EAN: '',
        //     product_type: '',
        //     product_weight: '',
        //     product_color: '',
        //     product_isActive: false
        // });
    }

    //react life cycle - ar tikrai reikia sios dalies?
    componentDidMount() {
        this.productData = JSON.parse(localStorage.getItem('products'));

        if (localStorage.getItem('products')) {
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



    render() {
        return (
            <div className="m-1">
            <h3 className="m-2"> Update Product</h3>
            <form className='m-3' onSubmit={this.onSubmit} >
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"> Name:</label>
                    <div className='col-sm'>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_name}
                                onChange={this.onChangeProductName}
                                required
                                />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"> EAN:</label>
                    <div className='col-sm'>
                        <input  type="text"
                            className="form-control"
                            value={this.state.product_EAN}
                            onChange={this.onChangeProductEAN}
                            required
                            />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"> Type:</label>
                    <div className='col-sm'>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_type}
                                onChange={this.onChangeProductType}
                                required
                                />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"> Weight:</label>
                    <div className='col-sm'>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_weight}
                                onChange={this.onChangeProductWeight}
                                required
                                />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label"> Color:</label>
                    <div className='col-sm'>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_color}
                                onChange={this.onChangeProductColor}
                                required
                                />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 form-check-label">Active: </label>
                    <div className="col-sm">
                        <div className="form-check">
                            <input  className="form-control "
                                    type="checkbox"
                                    checked={this.state.product_isActive}
                                    onChange={this.onChangeProductIsActive}
                                    />
                            </div>
                        </div>
                    </div>
                
                <div className="form-group">
                    <input type="submit" value="Update" className="btn btn-outline-success w-100"/>
                </div>
            </form>

        </div>

        );
    }
}

export default EditProduct;