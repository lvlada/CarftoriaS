import { useState } from 'react';
import { Rating } from './Rating';

const RatingContainer = () => {
  const [ratingSum, setRatingSum] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [currentRating, setCurrentRating] = useState(0);

  const handleRatingChange = (newRating) => {
    const newSum = ratingSum + newRating;
    setRatingSum(newSum);

    const newCount = ratingCount + 1;
    setRatingCount(newCount);

    const newAverage = newSum / newCount;
    setCurrentRating(newAverage);
  };

  return <Rating rating={currentRating.toFixed(1)} onChangeRating={handleRatingChange} />;
};

export { RatingContainer };
