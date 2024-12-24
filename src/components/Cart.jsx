import { useEffect, useState } from "react";
import CartItem from "./CartItem";

function Cart({ products, remProdSel }) {
    let count = 0;
    let total = 0;
    products.forEach((prod) => {
        count += prod.quantity;
        total += prod.quantity != 0 ? prod.price * prod.quantity : 0;
    });

    console.log(total);

    return (
        <div className="bg-white rounded-lg p-5">
            <h2 className="text-2xl font-bold pb-1 ">
                Your Cart ({count !== 0 && count})
            </h2>
            <div>
                {products
                    .filter((product) => product.quantity > 0)
                    .map((product) => (
                        <CartItem
                            key={product.id}
                            product={product}
                            remProdSel={remProdSel}
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
        </div>
    );
}

export default Cart;
