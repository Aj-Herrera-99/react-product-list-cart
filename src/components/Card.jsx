import { useEffect, useState } from "react";

function Card({ product, incProdSel, decProdSel }) {
    const [isZero, setIsZero] = useState(true);

    useEffect(() => {
        if (product.quantity === 0) {
            setIsZero(true);
        }
    }, [product]);

    return (
        <div>
            <div className="relative mb-6 aspect-video lg:aspect-square">
                <picture>
                    <source
                        media="(min-width:1024px)"
                        srcSet={product.image.desktop}
                    />
                    <source
                        media="(min-width:640px)"
                        srcSet={product.image.tablet}
                    />
                    <img
                        src={product.image.mobile}
                        alt={product.name}
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </picture>

                <OpsBtns
                    isZero={isZero}
                    setIsZero={setIsZero}
                    product={product}
                    incProdSel={incProdSel}
                    decProdSel={decProdSel}
                ></OpsBtns>
            </div>
            <div className="flex flex-col">
                <span>{product.category}</span>
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
            </div>
        </div>
    );

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
}

export default Card;
