import * as types from '../constants/ActionType'
var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data?data:[];
var FindIndex=(cart,id)=>{
    let index=-1;
    if(cart.length>0){
        for(let i=0;i<cart.length;i++){
            if(cart[i].product.id===id)
                index=i;
        }
    }
    return index;
}
const cart = (state = initialState, action) => {
    var index=-1;
    
    let {product,quantity}=action;
    switch (action.type) {
        case types.ADD_TO_CART:
            index=FindIndex(state,product.id);
            if(index===-1){
                state.push({
                    product,quantity
                })
            }
            else{
                state[index].quantity++;
            }
            localStorage.setItem("CART",JSON.stringify(state))
            return [...state];
        case types.DEL_PRODUCT_IN_CART:
            index =FindIndex(state,product.id);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem("CART",JSON.stringify(state));
            return [...state]
        case types.UPDATE_PRODUCT_IN_CART:
            index =FindIndex(state,product.id);
            if(index !==-1){
                if(state[index].quantity+quantity>0&& state[index].quantity+quantity<= state[index].product.inventory){
                    state[index].quantity+=quantity
                } 
            }
            localStorage.setItem("CART",JSON.stringify(state));
            return [...state]
        default: return [...state];
    }
}
export default cart;