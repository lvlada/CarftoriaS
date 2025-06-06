import { IconStar } from '@/assets';

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<IconStar key={i} fill />);
    } else if (rating >= i - 0.5) {
      stars.push(<IconStar key={i} half />);
    } else {
      stars.push(<IconStar key={i} />);
    }
  }
  return stars;
};

export { renderStars };
