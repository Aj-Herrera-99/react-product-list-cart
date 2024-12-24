import CartBtn from "./CartBtn";
import CartItem from "./CartItem";

function Cart({ products, remProdSel, isModal, setIsModal }) {
    let count = 0;
    let total = 0;
    products.forEach((prod) => {
        count += prod.quantity;
        total += prod.quantity != 0 ? prod.price * prod.quantity : 0;
    });

    console.log(total);

    return (
        <div className={`bg-white rounded-lg p-5 ${isModal && "shadow-[0_0_0_999px_rgba(0,0,0,0.5)]"}`}>
            <CartDesc count={count} isModal={isModal}></CartDesc>
            <div>
                {products
                    .filter((product) => product.quantity > 0)
                    .map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            remProdSel={remProdSel}
                            isModal={isModal}
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
                <CartBtn setIsModal={setIsModal}>
                    {isModal ? "Start New Order" : "Confirm Order"}
                </CartBtn>
            )}
        </div>
    );
}

function CartDesc({ count, isModal }) {
    return (
        <>
            {!isModal ? (
                <h2 className="text-2xl font-bold">
                    Your Cart ({count !== 0 && count})
                </h2>
            ) : (
                <div className="">
                    <i className="fa-solid fa-check text-green-500 border-2 border-green-500 p-2 rounded-full mb-3"></i>
                    <h2 className="text-2xl font-bold">Order Confirmed</h2>
                    <p>We hope you enjoy your food!</p>
                </div>
            )}
        </>
    );
}

export default Cart;
