import { useContext } from "react";
import CartBtn from "./CartBtn";
import CartDesc from "./CartDesc";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { GlobalContext } from "../state-management/stores/GlobalContext";
import CartBadge from "./CartBadge";
import CartEmptyIcon from "./CartEmptyIcon";

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
                <CartEmptyIcon/>
            )}
        </div>
    );
}

export default Cart;
