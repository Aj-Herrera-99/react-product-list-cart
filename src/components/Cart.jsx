import CartBtn from "./CartBtn";
import CartItem from "./CartItem";

function Cart({
    products,
    remProdSel,
    isModal,
    setIsModal,
    name,
    resetQuantities,
}) {
    let count = 0;
    let total = 0;
    products.forEach((prod) => {
        count += prod.quantity;
        total += prod.quantity != 0 ? prod.price * prod.quantity : 0;
    });

    return (
        <div
            className={`bg-white rounded-lg p-5 min-w-[70vw] sm:min-w-[200px] lg:min-w-[300px] ${
                name == "modal" && "shadow-[0_0_0_999px_rgba(0,0,0,0.5)]"
            }`}
        >
            <CartDesc count={count} name={name}></CartDesc>
            <div>
                {products
                    .filter((product) => product.quantity > 0)
                    .map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            remProdSel={remProdSel}
                            isModal={isModal}
                            name={name}
                        ></CartItem>
                    ))}
            </div>
            {total != 0 && (
                <div className="flex items-center justify-between py-3">
                    <>
                        <span>Order Total</span>

                        <span className="text-2xl font-bold">
                            ${total.toFixed(2)}
                        </span>
                    </>
                </div>
            )}
            {count !== 0 && (
                <>
                    {name === "cart" ? (
                        <CartBtn setIsModal={setIsModal}>Confirm Order</CartBtn>
                    ) : (
                        <CartBtn
                            name={name}
                            action={resetQuantities}
                            setIsModal={setIsModal}
                        >
                            Start New Order
                        </CartBtn>
                    )}
                </>
            )}
        </div>
    );
}

function CartDesc({ count, name }) {
    return (
        <>
            {name === "cart" ? (
                <h2 className="text-2xl font-bold">
                    Your Cart ({count !== 0 && count})
                </h2>
            ) : (
                <div className="">
                    <i className="p-2 mb-3 text-green-500 border-2 border-green-500 rounded-full fa-solid fa-check"></i>
                    <h2 className="text-2xl font-bold">Order Confirmed</h2>
                    <p>We hope you enjoy your food!</p>
                </div>
            )}
        </>
    );
}

export default Cart;
