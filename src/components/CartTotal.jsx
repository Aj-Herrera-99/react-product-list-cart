import { useContext } from "react";
import { GlobalContext } from "../state-management/stores/GlobalContext";

function CartTotal() {
    const {products} = useContext(GlobalContext)
    return (
        <div className="flex items-center justify-between py-5">
            <>
                <span>Order Total</span>

                <span className="text-2xl font-bold">${products.total.toFixed(2)}</span>
            </>
        </div>
    );
}

export default CartTotal;
