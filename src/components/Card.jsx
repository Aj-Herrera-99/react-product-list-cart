import CardButtons from "./CardButtons";

function Card({ product }) {
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
                        className="object-cover w-full h-full rounded-2xl"
                    />
                </picture>

                <CardButtons product={product}></CardButtons>
            </div>
            <div className="flex flex-col">
                <span>{product.category}</span>
                <span>{product.name}</span>
                <span>${product.price.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default Card;
