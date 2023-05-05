import { AppState } from "../interfaces/interfaces";

type AppAction = | { type: 'toggleModal', payload: { isModalOpen: boolean } }
                 | { type: 'toggleSidebar', payload: { isSidebarOpen: boolean }}


export const AppReducer = (state: AppState, action: AppAction): AppState => {
    
    switch (action.type) {
        case 'toggleModal':
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        case 'toggleSidebar':
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen
            } 
        default:
            return state
    }
}