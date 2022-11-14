import styled from 'styled-components';

import { Menu as MenuAntd } from 'antd';

const StyledMenu = styled(MenuAntd)`
  max-height: 200px;
  overflow: scroll;

  .ant-dropdown-menu-item,
  .ant-dropdown-menu-submenu-title {
    font-size: 1rem;
  }
`;

const Menu = ({ items = [], onItemSelect, style, ...props }) => {
  const handleOnItemSelect = ({ key }) => {
    const selectedItem = items.find((i) => i.key === key);

    onItemSelect({ value: selectedItem?.value, key: key, item: selectedItem });
  };

  return (
    <StyledMenu
      style={style}
      onClick={handleOnItemSelect}
      items={items}
      {...props}
    />
  );
};

export default Menu;
