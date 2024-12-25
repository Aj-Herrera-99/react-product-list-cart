import { useContext } from "react";
import { GlobalContext } from "../state-management/stores/GlobalContext";

function CartBtn({ name, children }) {
    const { resetQuantities, setIsModal } = useContext(GlobalContext);

    const handleClick = () => {
        setIsModal((curr) => !curr);
        if (name && name === "modal") {
            resetQuantities();
        }
    };
    return (
        <button
            onClick={handleClick}
            className="w-full p-2 text-white bg-orange-600 rounded-3xl"
        >
            {children}
        </button>
    );
}

export default CartBtn;
