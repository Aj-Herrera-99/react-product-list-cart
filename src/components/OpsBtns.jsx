function OpsBtns({ isZero, product, actions }) {
    const operation = (e) => {
        e.stopPropagation();
        if (e.target.matches("div")) {
            if (isZero) {
                actions.incProdSel(product);
                actions.setIsZero(false);
            }
        } else if (e.target.closest(".fa-minus")) {
            actions.decProdSel(product);
        } else if (e.target.closest(".fa-plus")) {
            actions.incProdSel(product);
        }
    };

    return (
        <div
            onClick={operation}
            className={`absolute w-1/2 bg-white left-1/2 -translate-x-1/2 text-center py-3 rounded-3xl bottom-[-20px] select-none ${
                isZero && "cursor-pointer"
            }`}
        >
            {isZero ? (
                <>Add to Cart</>
            ) : (
                <div className="relative">
                    <i
                        onClick={operation}
                        className="absolute p-1 -translate-y-1/2 bg-red-300 rounded-full cursor-pointer left-2 top-1/2 fa-solid fa-minus"
                    ></i>
                    <span>{product.quantity}</span>
                    <i
                        onClick={operation}
                        className="absolute p-1 -translate-y-1/2 bg-red-300 rounded-full cursor-pointer right-2 top-1/2 fa-solid fa-plus"
                    ></i>
                </div>
            )}
        </div>
    );
}

export default OpsBtns;
