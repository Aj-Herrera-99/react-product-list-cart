function CartBtn({ setIsModal, name, action, children }) {
    const handleSetIsModal = (e) => {
        setIsModal((curr) => !curr);
        if (name && name === "modal") {
            action();
        }
    };
    return (
        <button
            onClick={handleSetIsModal}
            className="w-full p-2 text-white bg-orange-600 rounded-3xl"
        >
            {children}
        </button>
    );
}

export default CartBtn;
