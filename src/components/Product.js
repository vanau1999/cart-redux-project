import React, { Component } from 'react';
import * as Message from '../constants/Message'
class Product extends Component {
    render() {
        var {product} = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.img} className="img-fluid" alt={product.name} />
                        <a href="# ">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="# ">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            {this.showRating(product)}
                        </ul>
                        <p className="card-text">
                            {product.desc}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a href="# " role="button" className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart" onClick={() => this.onAddToCart(product)}>
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangeMessage(Message.MSG_ADD_TO_CART_SUCCES);

    }
    showRating = (product) => {
        let result = [];
        for (var i = 0; i < product.rating; i++) {

            result.push(<li key={i + 1}> <i className="fa fa-star"></i></li>)
        }
        for (let j = 0; j < 5 - product.rating; j++) {

            result.push(<li key={i + 1}> <i className="fa fa-star-o"></i></li>)
            i++;
        }
        return result;
    }
}

export default Product;