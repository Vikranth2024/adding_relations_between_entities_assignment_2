import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0); // Reset rating
    } else {
      alert("Please select a valid rating before submitting!");
    }
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              color: star <= (hoveredRating || rating) ? "gold" : "#ccc"
            }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} style={{ marginTop: "8px" }}>
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;
