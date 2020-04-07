import React, { Component } from 'react';
import Products from '../components/Products'
import Product from '../components/Product'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { actAddToCart,actChangeMassage } from '../actions/index'
class ProductsContainer extends Component {
    render() {
        let { products } = this.props
        return (
            <Products>
                {
                    this.showProducts(products)
                }
            </Products>
        );
    }
    showProducts = (products) => {
        let result = null;
        let { onAddToCart,onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={product.id} product={product} onAddToCart={onAddToCart} onChangeMessage={onChangeMessage} />
            });
        }
        return result;
    }

}
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            desc: PropTypes.string.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage:PropTypes.func.isRequired,
    onAddToCart:PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: product => {
            dispatch(actAddToCart(product, 1))
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMassage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);