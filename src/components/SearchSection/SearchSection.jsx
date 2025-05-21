import { IconArrowRight, IconSearch } from '@/assets';
import { Input } from '../ui';
import style from './SearchSection.module.scss';
import { useState } from 'react';
import { Select } from '../ui/Select';

const SearchSection = () => {
  const [searchItem, setSearchItem] = useState('');

  return (
    <section className={style.searchSection}>
      <div>
        <Select options={['Kragujevac', 'Beograd', 'Zrenjain']} />
      </div>
      <div className={style.searchSection__input__container}>
        <Input
          icon={<IconSearch />}
          placeholder="Unesi ime, kategoriju, mesto..."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
          className={style.searchSection__input}
        />
        <IconArrowRight color="#8B5E3C" />
      </div>
    </section>
  );
};

export { SearchSection };
