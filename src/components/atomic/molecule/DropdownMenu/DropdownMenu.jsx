import { Dropdown, Menu } from '@atomic';

const getTitle = (item) => {
  if (item?.title) return item?.title;
  if (item?.label) return item?.label;
  if (item?.value) return item?.value;

  return 'N/A';
};

const DropdownMenu = ({ value, items, onItemSelect }) => {
  const title = getTitle(value);
  const menu = () => {
    return <Menu items={items} onItemSelect={onItemSelect} />;
  };

  return <Dropdown title={title} menu={menu} />;
};

export default DropdownMenu;
