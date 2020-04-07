import React, { Component } from 'react';
import * as Message from '../constants/Message'

class CartItem extends Component {
    render() {
        let { item } = this.props
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.img} alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                         <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <span  className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light" onClick={()=>this.onUpdateCart(item.product,-1)}>
                            <a href="# " >—</a>
                        </span>
                        <span className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light" onClick={()=>this.onUpdateCart(item.product,+1)}>
                            <a href="# " >+</a>
                        </span>
                    </div>
                </td>
                    <td>{item.product.price* item.quantity}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick={()=>this.onDelete(item.product)}>
                        X
                    </button>
                </td>
            </tr>
        );
    }
    onUpdateCart=(product,quantity)=>{
        let {onUpdateProductInCart,onChangeMessage}=this.props
       onUpdateProductInCart(product,quantity);
       onChangeMessage(Message.MSG_UPD_TO_CART_SUCCES);   
    }
    onDelete=product=>{
      let{onDelProductInCart,onChangeMessage}=this.props;
      onDelProductInCart(product);
      onChangeMessage(Message.MSS_DEL_PRODUCT_IN_CART_SUCCES);   
    }
}

export default CartItem;