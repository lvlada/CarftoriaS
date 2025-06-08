import { IconArrowRight, IconSearch } from '@/assets';
import { Input } from '../ui';
import style from './SearchSection.module.scss';
import { forwardRef } from 'react';
import { Select } from '../ui/Select';

const SearchSection = forwardRef((props, ref) => {
  const {
    searchItem,
    selectedCategory,
    selectedSubCategory,
    selectedLocation,
    subCategories,
    categories,
    locations,
    onCategoryChange,
    onSubCategoryChange,
    onLocationChange,
    onSearchInputChange,
    onSubmit
  } = props;

  return (
    <section className={style.searchSection} id="search-section" ref={ref}>
      <h2 className={style.searchSection__heading}>Pretraži zanatlije po:</h2>
      <form className={style.searchSection__form} onSubmit={onSubmit}>
        <div className={style.searchSection__select__container}>
          <Select
            options={categories.map((category) => category.categoryName)}
            name="category"
            placeholder="Kategorija"
            value={selectedCategory}
            onChange={onCategoryChange}
          />
          <Select
            options={subCategories}
            name="craftmans"
            placeholder="Zanat"
            value={selectedSubCategory}
            onChange={onSubCategoryChange}
          />
          <Select
            options={locations.map((location) => location.city)}
            name="location"
            placeholder="Lokacija"
            value={selectedLocation}
            onChange={onLocationChange}
          />
        </div>
        <div className={style.searchSection__input__container}>
          <Input
            icon={<IconSearch />}
            placeholder="Unesi ime, kategoriju, mesto..."
            onChange={onSearchInputChange}
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
});

SearchSection.displayName = 'SearchSection';

export { SearchSection };
