import CartBtn from "./CartBtn";
import CartDesc from "./CartDesc";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

function Cart({ products, isModal, name, actions }) {

    return (
        <div
            className={`bg-white rounded-lg p-5 w-full ${name==="modal" && "max-h-[95vh] overflow-y-auto"} `}
        >
            <CartDesc count={products.count} name={name} />
            {products.prods
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
            {products.count !== 0 && (
                <>
                    <CartTotal total={products.total} />
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
