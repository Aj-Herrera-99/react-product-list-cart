function productsReducer(state, action) {
    if (action.type === "FETCH_INIT") return { ...state, prods: action.prod };

    if (action.type === "INCREMENT") {
        const prodSel = state.prods.find((prod) => prod.id === action.prod.id);
        const newState = state.prods.map((prod) => {
            return prod.id === prodSel.id
                ? { ...prodSel, quantity: action.prod.quantity + 1 }
                : prod;
        });
        return {
            prods: newState,
            count: state.count + 1,
            total: state.total + action.prod.price,
        };
    }
    if (action.type === "DECREMENT") {
        const prodSel = state.prods.find((prod) => prod.id === action.prod.id);
        // if (action.prod.quantity === 0) return state;
        const newState = state.prods.map((prod) => {
            return prod.id === prodSel.id
                ? { ...prodSel, quantity: action.prod.quantity - 1 }
                : prod;
        });
        return {
            prods: newState,
            count: state.count - 1,
            total: state.total - action.prod.price,
        };
    }
    if (action.type === "REMOVE") {
        const subCount = action.prod.quantity;
        const subTotal = action.prod.price * action.prod.quantity;
        const newState = state.prods.map((prod) => {
            return prod.id == action.prod.id ? { ...prod, quantity: 0 } : prod;
        });
        return {
            prods: newState,
            count: state.count - subCount,
            total: state.total - subTotal,
        };
    }

    if (action.type === "RESET") {
        return { prods: action.prod, count: 0, total: 0 };
    }
}

export default productsReducer;
