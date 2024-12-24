function OpsBtns({ isZero, setIsZero, product, incProdSel, decProdSel }) {
    const operation = (e) => {
        e.stopPropagation();
        console.log(e.target);
        if (e.target.matches("div")) {
            if (isZero) {
                incProdSel(product);
                setIsZero(false);
            }
        } else if (e.target.closest(".fa-minus")) {
            console.log("test");
            decProdSel(product);
        } else if (e.target.closest(".fa-plus")) {
            incProdSel(product);
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
                        className="absolute left-2 top-1/2 -translate-y-1/2 fa-solid fa-minus bg-red-300 rounded-full p-1 cursor-pointer"
                    ></i>
                    <span>{product.quantity}</span>
                    <i
                        onClick={operation}
                        className="absolute right-2  top-1/2 -translate-y-1/2 fa-solid fa-plus bg-red-300 rounded-full p-1 cursor-pointer"
                    ></i>
                </div>
            )}
        </div>
    );
}

export default OpsBtns