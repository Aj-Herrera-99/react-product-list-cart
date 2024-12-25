import CardButtons from "./CardButtons";

function Card({ product }) {
    return (
        <div className={`font-semibold`}>
            <div className="relative mb-9 aspect-video lg:aspect-square">
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
                        className={`object-cover w-full h-full rounded-2xl ${
                            product.quantity !== 0 &&
                            "border-2 border-[#b3330c]"
                        }`}
                    />
                </picture>

                <CardButtons product={product}></CardButtons>
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium text-[#87635a]">
                    {product.category}
                </span>
                <span className="text-[#260f08]">{product.name}</span>
                <span className="text-[#c73a0f]">
                    ${product.price.toFixed(2)}
                </span>
            </div>
        </div>
    );
}

export default Card;
