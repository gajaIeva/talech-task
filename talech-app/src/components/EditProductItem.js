import React, {Component} from 'react';
import {getFromLocalStorage, saveToLocalStorage} from './localStorageUtilities';

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

        let index = this.props.match.params.id;
        
        let productsArray = getFromLocalStorage();

        let productObject = productsArray[index];

        this.state = {
            product_name: productObject.product_name,
            product_EAN: productObject.product_EAN,
            product_type: productObject.product_type,
            product_weight: productObject.product_weight,
            product_color: productObject.product_color,
            product_isActive: productObject.product_isActive
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

        let index = this.props.match.params.id;
        let productsArray = getFromLocalStorage();
        let productObject = productsArray[index];

        let updatedProductsArray = [
            ...productsArray.slice(0, index),
            {
                product_name: this.state.product_name,
                product_EAN: this.state.product_EAN,
                product_type: this.state.product_type,
                product_weight: this.state.product_weight,
                product_color: this.state.product_color,
                product_isActive: this.state.product_isActive
            },
            ...productsArray.slice(index + 1)
        ];
        
        saveToLocalStorage(updatedProductsArray);
        
        this.setState({
            product_name: this.state.product_name,
            product_EAN: this.state.product_EAN,
            product_type: this.state.product_type,
            product_weight: this.state.product_weight,
            product_color: this.state.product_color,
            product_isActive: this.state.product_isActive
        });
    }

    render() {
        
        let index = this.props.match.params.id;

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