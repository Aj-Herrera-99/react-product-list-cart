import CartBtn from "./CartBtn";
import CartDesc from "./CartDesc";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

function Cart({ products, isModal, name, actions }) {
    let count = 0;
    let total = 0;
    products.forEach((prod) => {
        count += prod.quantity;
        total += prod.quantity != 0 ? prod.price * prod.quantity : 0;
    });

    return (
        <div
            className={`bg-white rounded-lg p-5 w-full ${name==="modal" && "max-h-[95vh] overflow-y-auto"} `}
        >
            <CartDesc count={count} name={name} />
            {products
                .filter((product) => product.quantity > 0)
                .map((product) => (
                    <CartItem
                        key={product.id}
                        name={name}
                        product={product}
                        remProdSel={actions.remProdSel}
                        isModal={isModal}
                    />
                ))}
            {count !== 0 && (
                <>
                    <CartTotal total={total} />
                    {name === "cart" ? (
                        <CartBtn setIsModal={actions.setIsModal}>
                            Confirm Order
                        </CartBtn>
                    ) : (
                        <CartBtn
                            name={name}
                            resetQuantities={actions.resetQuantities}
                            setIsModal={actions.setIsModal}
                        >
                            Start New Order
                        </CartBtn>
                    )}
                </>
            )}
        </div>
    );
}

export default Cart;
