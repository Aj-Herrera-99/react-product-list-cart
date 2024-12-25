function CartDesc({ count, name }) {
    return (
        <>
            {name === "cart" ? (
                <h2 className="text-2xl font-bold">
                    Your Cart ({count})
                </h2>
            ) : (
                <div className="">
                    <i className="p-2 mb-3 text-green-500 border-2 border-green-500 rounded-full fa-solid fa-check"></i>
                    <h2 className="text-2xl font-bold">Order Confirmed</h2>
                    <p>We hope you enjoy your food!</p>
                </div>
            )}
        </>
    );
}

export default CartDesc;
