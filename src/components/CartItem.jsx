function CartItem({ product, remProdSel, isModal }) {
    return (
        <div className="py-3 border-b border-b-stone-300 flex items-center relative">
            <div className="h-20 w-full flex">
                {isModal && (
                    <img
                        src={product.image.thumbnail}
                        alt=""
                        className="h-full object-cover float-left rounded-md mr-2"
                    />
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
            {!isModal && (
                <i
                    onClick={() => remProdSel(product)}
                    className="fa-solid fa-xmark hover:scale-125 cursor-pointer border border-black rounded-full aspect-square w-6 flex items-center justify-center"
                ></i>
            )}
        </div>
    );
}

export default CartItem;
