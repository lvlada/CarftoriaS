import { DropDown } from './DropDown';

const DropDownContainer = ({ items, label, ...props }) => {
  return <DropDown dropDownItems={items} label={label} {...props} />;
};

export { DropDownContainer };
