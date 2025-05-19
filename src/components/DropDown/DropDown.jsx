import { useState, useRef, useEffect } from 'react';
import style from './DropDown.module.scss';
import { firstLetterUpperCase } from '@/utils';
import { IconArrowDown } from '@/assets';

const DropDown = ({ dropDownItems, label, onSelect, variant = 'default', selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenCategoryIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setOpenCategoryIndex(null);
    }
  };

  const toggleSubMenu = (index, e) => {
    e.stopPropagation();

    if (openCategoryIndex === index) {
      setOpenCategoryIndex(null);
    } else {
      setOpenCategoryIndex(index);
    }
  };

  const handleSelect = (item, isSubCategory = false, categoryName = null) => {
    if (onSelect) {
      const selection = isSubCategory
        ? { category: categoryName, subCategory: item }
        : { category: item };

      onSelect(selection);
    }
    setIsOpen(false);
    setOpenCategoryIndex(null);
  };

  const renderSubMenu = (subCategories, categoryName) => {
    return (
      <ul className={style.dropDown__sublist}>
        {subCategories.map((subItem, index) => (
          <li
            key={index}
            className={style.dropDown__list__link}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(subItem, true, categoryName);
            }}
          >
            {firstLetterUpperCase(subItem)}
          </li>
        ))}
      </ul>
    );
  };
  const getSelectedFlag = () => {
    if (variant === 'flag' && selected) {
      const selectedItem = dropDownItems.find((item) => item.code === selected);
      return selectedItem ? selectedItem.icon : null;
    }
    return null;
  };

  const renderDropdownContent = () => {
    if (!isOpen) return null;

    return (
      <ul className={style.dropDown__list}>
        {dropDownItems.map((item, index) => {
          const isSelected = variant === 'flag' && selected === item.code;

          return (
            <li
              key={index}
              className={`${style.dropDown__list__link} ${isSelected ? style['dropDown__list__link--selected'] : ''}`}
              onClick={(e) => {
                if (variant === 'flag') {
                  e.stopPropagation();
                  handleSelect(item);
                } else {
                  toggleSubMenu(index, e);
                }
              }}
            >
              {variant === 'flag' ? (
                <span>{item.categoryName} </span>
              ) : (
                <>
                  <div
                    className={`${style.dropDown__category} ${openCategoryIndex === index ? style['dropDown__category--active'] : ''}`}
                  >
                    {firstLetterUpperCase(item.categoryName)}
                    <span
                      className={openCategoryIndex === index ? style.arrow__active : style.arrow}
                    >
                      <IconArrowDown />
                    </span>
                  </div>

                  {item.subCategories &&
                    openCategoryIndex === index &&
                    renderSubMenu(item.subCategories, item.categoryName)}
                </>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={style.dropDown} ref={dropdownRef}>
      <span onClick={toggleDropDown} className={style.dropDown__label}>
        {variant === 'flag' && selected ? getSelectedFlag() || label : label}
      </span>

      {renderDropdownContent()}
    </div>
  );
};

export { DropDown };
