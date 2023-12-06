import { ActionTypeModal } from "../action-types";

export interface ModalState{
    isOpen:boolean;
}

export const modalInitialState:ModalState = {
    isOpen: false,
};


const reducerModal = (state:ModalState = modalInitialState, action:any):ModalState => {
    switch(action.type){
        case ActionTypeModal.OPEN_MODAL:
            return {
                isOpen:true,
            }
        case ActionTypeModal.CANCEL:
            return {
                isOpen:false,
            }
        
        default:
            return state;
    }
};

export default reducerModal;