

const INITIAL_STATE = {
    listagem: {}
}

export const despesaReducer = (state = {}, action) => {
    if (action.type == 'LISTAR_DESPESAS') {        
        return {...state, listagem: action.listagem};
    }   

    return state;
}
export default despesaReducer;