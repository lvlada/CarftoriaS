import style from './BookinPageDropDown.module.scss';

const BookinPageDropDown = ({ user }) => {
  return (
    <select name="" id="" className={style.dropDown}>
      <option disabled selected value="">
        Odaberite uslugu:
      </option>
      {user.services.map((item) => (
        <option key={item} value={item.serviceName}>
          {item.serviceName}
        </option>
      ))}
    </select>
  );
};

export { BookinPageDropDown };
