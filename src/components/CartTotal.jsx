function CartTotal({ total }) {
    return (
        <div className="flex items-center justify-between py-5">
            <>
                <span>Order Total</span>

                <span className="text-2xl font-bold">${total.toFixed(2)}</span>
            </>
        </div>
    );
}

export default CartTotal;
