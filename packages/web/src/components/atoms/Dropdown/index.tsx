import { Menu, Transition } from '@headlessui/react';
import Button from '@mui/material/Button';
import React, { Fragment } from 'react';
import { uuid } from '../../../utils/uuid';
import Item, { ItemProps } from './Item';

export type DropdownProps = {
  icon?: JSX.Element;
  title?: string;
  items: ItemProps[];
};

const Dropdown: React.FC<DropdownProps> = ({
  icon = <></>,
  title = '',
  items = [],
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Button variant="contained">{title}</Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          {items.map((item: ItemProps) => {
            const { href = '', icon = <></>, text = '' } = item;
            return (
              <Item
                key={`item-${uuid()}`}
                href={href}
                icon={icon}
                text={text}
              />
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = { title: '', items: [] };

export default Dropdown;
