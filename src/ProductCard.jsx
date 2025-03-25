import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  const { id, name, description, image, avgRating, totalRatings } = product;

  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px" }}>
      <img src={ image } alt={name} style={{ width: "100%", borderRadius: "8px" }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>
        Average Rating: {avgRating.toFixed(1)} ({totalRatings} ratings)
      </p>
      <RatingWidget productId={id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
