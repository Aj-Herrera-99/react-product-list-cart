import { useContext } from "react";
import { GlobalContext } from "../state-management/stores/GlobalContext";
import { useState, useEffect } from "react";

function CardButtons({ product }) {
    const { incProdSel, decProdSel } = useContext(GlobalContext);

    const [isZero, setIsZero] = useState(true);

    useEffect(() => {
        if (product.quantity === 0) {
            setIsZero(true);
        }
    }, [product]);

    const operation = (e) => {
        e.stopPropagation();
        if (e.target.matches("div")) {
            if (isZero) {
                incProdSel(product);
                setIsZero(false);
            }
        } else if (e.target.closest(".fa-minus")) {
            decProdSel(product);
        } else if (e.target.closest(".fa-plus")) {
            incProdSel(product);
        }
    };

    return (
        <div
            onClick={operation}
            className={`absolute w-1/2 sm:w-3/5 lg:w-3/4 xl:w-1/2 bg-white left-1/2 -translate-x-1/2 text-center py-3 rounded-3xl bottom-[-20px] select-none ${
                isZero && "cursor-pointer"
            }`}
        >
            {isZero ? (
                <>Add to Cart</>
            ) : (
                <>
                    <i
                        onClick={operation}
                        className="absolute p-1 -translate-y-1/2 bg-red-300 rounded-full cursor-pointer left-2 top-1/2 fa-solid fa-minus"
                    ></i>
                    <span>{product.quantity}</span>
                    <i
                        onClick={operation}
                        className="absolute p-1 -translate-y-1/2 bg-red-300 rounded-full cursor-pointer right-2 top-1/2 fa-solid fa-plus"
                    ></i>
                </>
            )}
        </div>
    );
}

export default CardButtons;