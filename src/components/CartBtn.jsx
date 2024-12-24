function CartBtn({ setIsModal, children }) {
    const handleSetIsModal = (e) => {
        setIsModal((curr) => !curr);
    };
    return (
        <button
            onClick={handleSetIsModal}
            className="w-full bg-orange-600 text-white p-2 rounded-3xl"
        >
            {children}
        </button>
    );
}

export default CartBtn