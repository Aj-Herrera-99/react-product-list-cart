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
};

function App() {
    const [products, dispatchProducts] = useReducer(productsReducer, []);

    const incProdSel = (product) => {
        dispatchProducts({ type: "INCREMENT", prod: product });
    };

    const decProdSel = (product) => {
        dispatchProducts({ type: "DECREMENT", prod: product });
    };

    const remProdSel = (product) => {
        dispatchProducts({ type: "REMOVE", prod: product });
    };

    useEffect(() => {
        fetch("../src/data.json")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((item, index) => {
                    item.id = index + 1;
                    item.quantity = 0;
                });
                console.log(data);
                dispatchProducts({ type: "FETCH_INIT", prod: data });
            });
    }, []);

    useEffect(() => {
        console.log(products);
    }, [products]);

    return (
        <>
            <section className="products bg-red-300 w-full p-8 sm:w-4/6">
                <Header title="Desserts" />
                <main className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            incProdSel={incProdSel}
                            decProdSel={decProdSel}
                        ></Card>
                    ))}
                </main>
            </section>
            <section className="cart bg-red-400 w-full p-8 sm:w-2/6">
                <Cart products={products} remProdSel={remProdSel} />
            </section>
        </>
    );
}

export default App;
