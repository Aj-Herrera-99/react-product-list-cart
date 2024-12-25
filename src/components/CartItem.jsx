function CartItem({ product, remProdSel,  name }) {
    return (
        <div className="relative flex items-center py-5 border-b border-b-stone-300">
            <div className="flex flex-wrap w-full gap-2">
                {name === "modal" && (
                    <div>
                        <img
                            src={product.image.thumbnail}
                            alt=""
                            className="object-cover h-full rounded-md "
                        />
                    </div>
                )}
                <div className="flex flex-col justify-center ">
                    <span>{product.name}</span>
                    <div className="flex gap-4">
                        <span>{product.quantity}x</span>
                        <span>${product.price.toFixed(2)}</span>
                        <span>
                            ${(product.quantity * product.price).toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
            {name === "cart" && (
                <i
                    onClick={() => remProdSel(product)}
                    className="flex items-center justify-center w-6 border border-black rounded-full cursor-pointer fa-solid fa-xmark hover:scale-125 aspect-square"
                ></i>
            )}
        </div>
    );
}

export default CartItem;
