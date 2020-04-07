import React, { Component } from 'react';
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import CartItem from '../components/CartItem'
import PropTypes from 'prop-types'
import * as Message from '../constants/Message'
import CartResult from '../components/CartResult'
import { actDelProductInCart,actChangeMassage, actUpdateProductInCart } from '../actions';
class CartContainer extends Component {
    render() {
        let { cart } = this.props
        return (
            <div>
                <Cart>
                    {this.showCartItem(cart)}
                    {this.showTotalAmount(cart)}
                </Cart>
            </div>
        );
    }
    showCartItem = (cart) => {
        let result = Message.MSS_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem key={index} item={item} index={index} onDelProductInCart={this.props.onDelProductInCart} onChangeMessage={this.props.onChangeMessage} onUpdateProductInCart={this.props.onUpdateProductInCart} />
            })
        }
        return result;
    }
    showTotalAmount=cart=>{
        let result=null;
        if(cart.length>0)
            result=<CartResult  cart={cart}/>
        return result;
    }
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                desc: PropTypes.string.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage:PropTypes.func.isRequired,
    onDelProductInCart: PropTypes.func.isRequired,
    onUpdateProductInCart:PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDelProductInCart:(product)=>{
            dispatch(actDelProductInCart(product));
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMassage(message))
        },
        onUpdateProductInCart :(product,quantity)=>{
            dispatch(actUpdateProductInCart(product,quantity));
        }, 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);