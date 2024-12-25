import { useContext } from "react";
import CartBtn from "./CartBtn";
import CartDesc from "./CartDesc";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { GlobalContext } from "../state-management/stores/GlobalContext";
import CartBadge from "./CartBadge";

function Cart({ name }) {
    const { products } = useContext(GlobalContext);
    return (
        <div
            className={`bg-white rounded-lg p-5 mt-5 w-full font-semibold ${
                name === "modal" && "max-h-[95vh] overflow-y-auto"
            } `}
        >
            <CartDesc name={name} />
            {products.prods
                .filter((product) => product.quantity > 0)
                .map((product) => (
                    <CartItem key={product.id} name={name} product={product} />
                ))}
            {products.count !== 0 ? (
                <>
                    <CartTotal />
                    {name === "cart" ? (
                        <>
                            <CartBadge></CartBadge>

                            <CartBtn>Confirm Order</CartBtn>
                        </>
                    ) : (
                        <CartBtn name={name}>Start New Order</CartBtn>
                    )}
                </>
            ) : (
                <div className="flex justify-center">
                    <figure>
                        <img
                            className="mx-auto"
                            src="assets/images/illustration-empty-cart.svg"
                            alt="illustration empty cart"
                        />
                        <figcaption>
                            Your added items will appear here
                        </figcaption>
                    </figure>
                </div>
            )}
        </div>
    );
}

export default Cart;
