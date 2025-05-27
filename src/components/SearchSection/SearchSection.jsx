import { IconArrowRight, IconSearch } from '@/assets';
import { Input } from '../ui';
import style from './SearchSection.module.scss';
import { useState } from 'react';
import { Select } from '../ui/Select';
import { locationList } from '@/fake_data/locationList';
import { CATEGORIES } from '@/constants';

const SearchSection = () => {
  const [searchItem, setSearchItem] = useState('');

  return (
    <section className={style.searchSection}>
      <h2 className={style.searchSection__heading}>Pretraži zanatlije po:</h2>
      <form className={style.searchSection__form}>
        <div className={style.searchSection__select__container}>
          <Select
            options={CATEGORIES.map((category) => category.categoryName)}
            name="category"
            placeholder="Kategorija"
          />
          <Select
            options={CATEGORIES.flatMap((category) => category.subCategories)}
            name="craftmans"
            placeholder="Zanat"
          />
          <Select
            options={locationList.map((location) => location.city)}
            name="location"
            placeholder="Lokacija"
          />
        </div>
        <div className={style.searchSection__input__container}>
          <Input
            icon={<IconSearch />}
            placeholder="Unesi ime, kategoriju, mesto..."
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
            className={style.searchSection__input}
            name="search"
          />
          <button className={style.searchSection__button} type="submit" aria-label="Search">
            <IconArrowRight color="#8B5E3C" />
          </button>
        </div>
      </form>
    </section>
  );
};

export { SearchSection };
