function CartItem({ product, remProdSel }) {
    return (
        <div className="py-3 border-b border-b-stone-300 flex flex-col relative">
            <span>{product.name}</span>
            <div className="flex gap-4">
                <span>{product.quantity}x</span>
                <span>${product.price.toFixed(2)}</span>
                <span>${(product.quantity * product.price).toFixed(2)}</span>
            </div>
            <span
                onClick={() => remProdSel(product)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-lg rounded-full border w-5 h-5 flex justify-center items-center border-red-400 cursor-pointer"
            >
                x
            </span>
        </div>
    );
}

export default CartItem