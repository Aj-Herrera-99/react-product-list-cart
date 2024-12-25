function CartBtn({ setIsModal, name, resetQuantities, children }) {
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
