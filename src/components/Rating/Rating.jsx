import style from './Rating.module.scss';
import { IconStar } from '@/assets';

const Rating = ({ rating, onChangeRating }) => {
  return (
    <div className={style.rating}>
      <span className={style.rating__comments}>Vidi komentare</span>
      <div>
        <span>Prosečena ocena: {rating}/5</span>
        <div>
          {Array(5)
            .fill()
            .map((_, index) => (
              <span
                className={style.rating__star}
                key={index}
                onClick={() => onChangeRating(index + 1)}
              >
                <IconStar fill={index < Math.floor(rating)} />
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export { Rating };
