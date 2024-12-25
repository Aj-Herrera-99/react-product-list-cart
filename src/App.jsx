import { useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";
import Cart from "./components/Cart";
import "./App.css";

const CardsSection = styled.section`
    width: 100%;
    @media (min-width: 768px) {
        width: calc(100% * (4 / 6));
    }
`;
const CartSection = styled.section`
    width: 100%;
    padding-inline: 2rem;
    @media (min-width: 768px) {
        width: calc(100% * (2 / 6));
    }
`;

const Main = styled.main`
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;

const ModalContainer = styled.div`
    display: ${(props) => (props.$isModal ? "flex" : "none")};
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    justify-content: center;
    align-items: end;
    @media (min-width: 640px) {
        padding-inline: 25%;
        align-items: center;
    }
    @media (min-width: 1024px) {
        padding-inline: 30%;
    }
`;

function App() {
    // todo: creare un altro stato per la gestione dei dessert in carrello (ottimizzazione)
    const [initData, setInitData] = useState([]);
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

    const resetQuantities = () => {
        dispatchProducts({ type: "RESET", prod: initData });
    };

    useEffect(() => {
        fetch("../src/data.json")
            .then((res) => res.json())
            .then((data) => {
                data.forEach((item, index) => {
                    item.id = index + 1;
                    item.quantity = 0;
                });
                setInitData(data);
                dispatchProducts({ type: "FETCH_INIT", prod: data });
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <CardsSection>
                <Header title="Desserts" />
                <Main>
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            product={product}
                            actions={{ incProdSel, decProdSel }}
                        ></Card>
                    ))}
                </Main>
            </CardsSection>
            <CartSection>
                <Cart
                    name="cart"
                    products={products}
                    isModal={isModal}
                    actions={{ remProdSel, setIsModal }}
                />
            </CartSection>
            <ModalContainer $isModal={isModal}>
                <Cart
                    name="modal"
                    products={products}
                    isModal={isModal}
                    actions={{ resetQuantities, setIsModal }}
                />
            </ModalContainer>
        </>
    );
}

function productsReducer(state, action) {
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
        return action.prod;
    }
}

export default App;
