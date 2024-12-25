import { useReducer, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";

const productsReducer = (state, action) => {
    if (action.type === "FETCH_INIT") return action.prod;

    if (action.type === "INCREMENT") {
        const prodSel = state.find((prod) => prod.id === action.prod.id);
        const newState = state.map((prod) => {
            return prod.id === prodSel.id
                ? { ...prodSel, quantity: action.prod.quantity + 1 }
                : prod;
        });
        return newState;
    }
    if (action.type === "DECREMENT") {
        const prodSel = state.find((prod) => prod.id === action.prod.id);
        if (action.prod.quantity === 0) return state;
        const newState = state.map((prod) => {
            return prod.id === prodSel.id
                ? { ...prodSel, quantity: action.prod.quantity - 1 }
                : prod;
        });
        return newState;
    }
    if (action.type === "REMOVE") {
        const newState = state.map((prod) => {
            return prod.id == action.prod.id ? { ...prod, quantity: 0 } : prod;
        });
        return newState;
    }

    if (action.type === "RESET") {
        const resetState = state.map((prod) => ({ ...prod, quantity: 0 }));
        return resetState;
    }
};

function App() {
    const [products, dispatchProducts] = useReducer(productsReducer, []);
    const [isModal, setIsModal] = useState(false);

    const incProdSel = (product) => {
        dispatchProducts({ type: "INCREMENT", prod: product });
    };

    const decProdSel = (product) => {
        dispatchProducts({ type: "DECREMENT", prod: product });
    };

    const remProdSel = (product) => {
        dispatchProducts({ type: "REMOVE", prod: product });
    };

    const resetQuantities = (data) => {
        dispatchProducts({ type: "RESET" });
    };

    useEffect(() => {
        fetch("../src/data.json")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((item, index) => {
                    item.id = index + 1;
                    item.quantity = 0;
                });
                dispatchProducts({ type: "FETCH_INIT", prod: data });
            });
    }, []);

    return (
        <>
            <section className="w-full p-8 bg-red-300 products sm:w-4/6">
                <Header title="Desserts" />
                <main className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            actions={{incProdSel, decProdSel}}
                        ></Card>
                    ))}
                </main>
            </section>
            <section className="w-full p-8 bg-red-400 cart sm:w-2/6">
                <Cart
                    products={products}
                    remProdSel={remProdSel}
                    isModal={isModal}
                    setIsModal={setIsModal}
                    name="cart"
                />
            </section>
            {isModal && (
                <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <Cart
                        products={products}
                        isModal={isModal}
                        setIsModal={setIsModal}
                        name="modal"
                        resetQuantities={resetQuantities}
                    />
                </div>
            )}
        </>
    );
}

export default App;
