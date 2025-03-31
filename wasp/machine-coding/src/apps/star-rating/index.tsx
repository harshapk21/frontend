import React, { useState } from "react";
import { Rating } from "./components/StarRating";

export default function StarApp() {
  const [rating, setRating] = useState(-1);
  return (
    <>
      <Rating rating={rating} setRating={setRating} />
      <h1>{rating < 0 ? 'Please rate us !': `${rating+1} Rating`}</h1>
    </>
  );
}
