import style from './Comment.module.scss';
const Comment = ({ item, name }) => {
  return (
    <div className={style.commentContainer}>
      <div className={style.commentInfo}>
        <p>
          <span>od korisnka </span>
          <strong>userID {name}:</strong>
        </p>
        <p>
          <strong>januar 2024</strong>
        </p>
      </div>

      <p className={style.commentContainer__comment}>{item.comment}</p>
    </div>
  );
};

export { Comment };
