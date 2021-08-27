const SELECT_PRICE_AMOUNT  = 'SELECT_PRICE_AMOUNT';

let initialState = {
    selectedSongs:[],
    price: 0,
    amount: 0,
}

const Reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case SELECT_PRICE_AMOUNT:
            return{
                ...state,
                selectedSongs: action.selectedSongs,
                price: action.price,
                amount: action.amount,
            }
        default:
            return state;
    }
}

export default Reducer;