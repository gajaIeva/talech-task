import React, {Component} from 'react';
import {getFromLocalStorage, saveToLocalStorage} from './localStorageUtilities';

class NewProduct extends Component {
    
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

        let productsArray = getFromLocalStorage();
        productsArray.push(this.state);
        saveToLocalStorage(productsArray);

        this.setState({
            product_name: '',
            product_EAN: '',
            product_type: '',
            product_weight: '',
            product_color: '',
            product_isActive: false
        });
    }

    render() {
        return (
            <div className="m-1">
                <h3 className="m-2"> Create New Product</h3>
                <form className='m-3' onSubmit={this.onSubmit} >
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label"> Name:</label>
                        <div className='col-sm'>
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.product_name}
                                    onChange={this.onChangeProductName}
                                    autoFocus
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
                        <input type="submit" value="Create" className="btn btn-outline-success w-100"/>
                    </div>
                </form>

            </div>
        );
    }
}

export default NewProduct;