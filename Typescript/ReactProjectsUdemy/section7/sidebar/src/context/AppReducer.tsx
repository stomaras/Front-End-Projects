import { AppState } from "../interfaces/interfaces";

type AppAction = | { type: 'openModal', payload: { isModalOpen: boolean } }
                 | { type: 'closeModal', payload: { isModalOpen: boolean } } 
                 | { type: 'openSidebar', payload: { isSidebarOpen: boolean }}
                 | { type: 'closeSidebar', payload: { isSidebarOpen: boolean } }


export const AppReducer = (state: AppState, action: AppAction): AppState => {
    
    switch (action.type) {
        case 'openModal':
            return {
                ...state,
                isModalOpen: true
            }
        case 'closeModal':
            return {
                ...state,
                isModalOpen: false
            } 
        case 'openSidebar':
            return {
                ...state,
                isSidebarOpen: true
            }
        case 'closeSidebar':
            return {
                ...state,
                isSidebarOpen: false
            }
        default:
            return state
    }
}