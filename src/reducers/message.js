import * as types from '../constants/ActionType'
import * as message from '../constants/Message'
var initialState=message.WELLCOME;
const Massage=(state=initialState,action)=>{
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message;
        default: 
        return state;
    }
}
export default Massage;