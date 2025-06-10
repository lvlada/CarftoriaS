import { useState, useEffect } from 'react';
import { SearchSection } from './SearchSection';
import { useScroll } from '@/context';
import { CATEGORIES } from '@/constants';
import { locationList } from '@/fake_data/locationList';
import { useCraftsmenStore } from '@/store/CraftsmenStore';

const SearchSectionContainer = () => {
  const { searchSectionRef } = useScroll();
  const filterCraftsmen = useCraftsmenStore((state) => state.filterCraftsmen);
  const [searchItem, setSearchItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [subCategories, setSubCategories] = useState(
    CATEGORIES.flatMap((cat) => cat.subCategories)
  );

  useEffect(() => {
    if (selectedCategory) {
      const category = CATEGORIES.find((cat) => cat.categoryName === selectedCategory);
      if (category) {
        setSubCategories(category.subCategories);
        setSelectedSubCategory('');
      }
    } else {
      setSubCategories(CATEGORIES.flatMap((cat) => cat.subCategories));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSearchInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterCraftsmen({
      searchItem,
      selectedCategory,
      selectedSubCategory,
      selectedLocation
    });
    console.log({
      searchItem,
      selectedCategory,
      selectedSubCategory,
      selectedLocation
    });
  };

  return (
    <SearchSection
      ref={searchSectionRef}
      searchItem={searchItem}
      selectedCategory={selectedCategory}
      selectedSubCategory={selectedSubCategory}
      selectedLocation={selectedLocation}
      subCategories={subCategories}
      categories={CATEGORIES}
      locations={locationList}
      onCategoryChange={handleCategoryChange}
      onSubCategoryChange={handleSubCategoryChange}
      onLocationChange={handleLocationChange}
      onSearchInputChange={handleSearchInputChange}
      onSubmit={handleSubmit}
    />
  );
};

export { SearchSectionContainer };
